import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  template: `
    @let t = i18n.t().about;
    <section class="section" id="sobre-mi">
      <div class="container">
        <h2 class="section-title" appReveal><span>01</span> {{ t.title }}</h2>
        <div class="row g-4 align-items-start">
          <div class="col-lg-7 fs-5-sm" appReveal>
            @for (p of t.paragraphs; track $index) {
              <p class="about-text" [innerHTML]="p"></p>
            }
          </div>
          <div class="col-lg-5">
            <div class="row g-3">
              @for (s of t.stats; track s.label) {
                <div class="col-6" appReveal>
                  <div class="card card-soft h-100">
                    <div class="card-body">
                      <div class="fs-3 fw-bolder text-primary">{{ s.value }}</div>
                      <div class="small text-body-secondary">{{ s.label }}</div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class About {
  protected readonly i18n = inject(LanguageService);
}
