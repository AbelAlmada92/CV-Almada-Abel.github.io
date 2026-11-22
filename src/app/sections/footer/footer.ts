import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { PROFILE } from '../../i18n/profile';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="site-footer py-4">
      <div class="container d-flex justify-content-between align-items-center gap-3">
        <p class="mb-0 small">© {{ year }} {{ name }}. {{ i18n.t().footer.rights }}</p>
        <a href="#inicio" class="btn btn-sm to-top" [attr.aria-label]="i18n.t().ui.backToTop">
          <i class="bi bi-arrow-up"></i>
        </a>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly i18n = inject(LanguageService);
  protected readonly year = new Date().getFullYear();
  protected readonly name = PROFILE.name;
}
