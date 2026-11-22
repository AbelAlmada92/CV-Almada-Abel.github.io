import { Component, inject } from '@angular/core';
import { LanguageService } from './core/language.service';
import { ThemeService } from './core/theme.service';
import { Navbar } from './sections/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Education } from './sections/education/education';
import { Contact } from './sections/contact/contact';
import { Footer } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Experience, Skills, Projects, Education, Contact, Footer],
  template: `
    <a class="visually-hidden-focusable skip-link" href="#main">{{ i18n.t().ui.skip }}</a>
    <app-navbar />
    <main id="main">
      <app-hero />
      <app-about />
      <app-experience />
      <app-skills />
      <app-projects />
      <app-education />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class App {
  protected readonly i18n = inject(LanguageService);
  // Se inyecta para que el tema se aplique al iniciar la app.
  private readonly theme = inject(ThemeService);
}
