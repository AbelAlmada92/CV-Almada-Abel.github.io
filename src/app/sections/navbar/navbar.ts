import { AfterViewInit, Component, OnDestroy, inject, signal } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  host: { '(document:keydown.escape)': 'menuOpen.set(false)' },
})
export class Navbar implements AfterViewInit, OnDestroy {
  protected readonly i18n = inject(LanguageService);
  protected readonly theme = inject(ThemeService);
  protected readonly menuOpen = signal(false);
  /** Sección visible actualmente, para resaltar el link del menú. */
  protected readonly active = signal('');
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!('IntersectionObserver' in window)) return;
    this.observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && this.active.set(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    this.i18n.t().nav.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) this.observer!.observe(section);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
