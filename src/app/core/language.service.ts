import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Content, Lang } from '../i18n/content.model';
import { ES } from '../i18n/content.es';
import { EN } from '../i18n/content.en';

const STORAGE_KEY = 'lang';
const CONTENT: Record<Lang, Content> = { es: ES, en: EN };

/** Maneja el idioma activo (español / inglés) y expone los textos traducidos. */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly lang = signal<Lang>(this.initialLang());
  /** Textos del idioma activo. Usar en las plantillas como `t().seccion.campo`. */
  readonly t = computed(() => CONTENT[this.lang()]);

  constructor() {
    effect(() => {
      const lang = this.lang();
      const t = this.t();
      this.document.documentElement.lang = lang;
      this.title.setTitle(t.meta.title);
      this.meta.updateTag({ name: 'description', content: t.meta.description });
      this.meta.updateTag({ property: 'og:title', content: t.meta.title });
      this.meta.updateTag({ property: 'og:description', content: t.meta.description });
      this.meta.updateTag({ property: 'og:locale', content: lang === 'es' ? 'es_AR' : 'en_US' });
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        /* almacenamiento no disponible */
      }
    });
  }

  toggle(): void {
    this.lang.update((l) => (l === 'es' ? 'en' : 'es'));
  }

  private initialLang(): Lang {
    // Permite compartir un link directo en inglés: ?lang=en
    const fromUrl = new URLSearchParams(this.document.location?.search ?? '').get('lang');
    if (fromUrl === 'es' || fromUrl === 'en') return fromUrl;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'es' || saved === 'en') return saved;
    } catch {
      /* almacenamiento no disponible */
    }
    return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
  }
}
