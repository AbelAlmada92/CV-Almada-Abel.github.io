import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  template: `
    @let t = i18n.t().skills;
    <section class="section" id="habilidades">
      <div class="container">
        <h2 class="section-title" appReveal><span>03</span> {{ t.title }}</h2>
        <div class="row g-3 g-lg-4">
          @for (g of t.groups; track g.icon) {
            <div class="col-sm-6 col-lg-3" appReveal>
              <div class="card card-soft h-100">
                <div class="card-body">
                  <h3 class="h6 fw-bold mb-3">
                    <i class="bi {{ g.icon }} text-primary me-2"></i>{{ g.title }}
                  </h3>
                  <div class="d-flex flex-wrap gap-2">
                    @for (item of g.items; track item) {
                      <span class="badge tag">{{ item }}</span>
                    }
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Skills {
  protected readonly i18n = inject(LanguageService);
}
