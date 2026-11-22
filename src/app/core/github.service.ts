import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, catchError, defer, map, of, tap } from 'rxjs';
import { PROFILE } from '../i18n/profile';

export interface Repo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

const CACHE_KEY = 'github-repos';
/** GitHub permite 60 consultas por hora sin login: se guarda el resultado 1 hora. */
const CACHE_TTL_MS = 60 * 60 * 1000;

/** Trae los repositorios públicos de GitHub. Si falla (sin internet, límite de la API) devuelve una lista vacía. */
@Injectable({ providedIn: 'root' })
export class GithubService {
  private readonly http = inject(HttpClient);
  private readonly user = PROFILE.githubUser;

  readonly repos = toSignal(
    defer(() => {
      const cached = this.readCache();
      return cached ? of(cached) : this.fetchRepos();
    }),
    { initialValue: [] as Repo[] },
  );

  private fetchRepos(): Observable<Repo[]> {
    return this.http
      .get<Repo[]>(`https://api.github.com/users/${this.user}/repos?sort=updated&per_page=30`)
      .pipe(
        map((repos) =>
          repos
            // Excluye forks, archivados y el repo especial del README de perfil
            .filter((r) => !r.fork && !r.archived && r.name.toLowerCase() !== this.user.toLowerCase())
            .slice(0, PROFILE.maxRepos)
            .map(({ name, description, html_url, language, pushed_at, fork, archived }) => ({
              name, description, html_url, language, pushed_at, fork, archived,
            })),
        ),
        tap((repos) => this.writeCache(repos)),
        catchError(() => of([] as Repo[])),
      );
  }

  private readCache(): Repo[] | null {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const { time, repos } = JSON.parse(raw) as { time: number; repos: Repo[] };
      return Date.now() - time < CACHE_TTL_MS ? repos : null;
    } catch {
      return null;
    }
  }

  private writeCache(repos: Repo[]): void {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ time: Date.now(), repos }));
    } catch {
      /* almacenamiento no disponible */
    }
  }
}
