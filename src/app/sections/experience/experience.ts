import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  template: `
    @let t = i18n.t().experience;
    <section class="section section-alt" id="experiencia">
      <div class="container">
        <h2 class="section-title" appReveal><span>02</span> {{ t.title }}</h2>
        <ol class="timeline list-unstyled">
          @for (job of t.jobs; track job.company) {
            <li class="timeline-item" appReveal>
              <div class="d-flex flex-wrap align-items-baseline column-gap-3 mb-3">
                <h3 class="h4 fw-bolder mb-0">{{ job.company }}</h3>
                <span class="small text-body-secondary fw-medium">{{ job.period }}</span>
              </div>
              @for (role of job.roles; track role.title + role.meta) {
                <div class="card card-soft mb-3">
                  <div class="card-body">
                    <h4 class="h6 fw-bold mb-2">
                      {{ role.title }}
                      <small class="fw-medium text-body-secondary">· {{ role.meta }}</small>
                    </h4>
                    <ul class="bullets mb-0">
                      @for (b of role.bullets; track $index) {
                        <li>{{ b }}</li>
                      }
                    </ul>
                    @if (role.highlight) {
                      <p class="text-success fw-semibold mb-0 mt-2">
                        <i class="bi bi-graph-up-arrow me-1"></i>{{ role.highlight }}
                      </p>
                    }
                  </div>
                </div>
              }
            </li>
          }
        </ol>
      </div>
    </section>
  `,
})
export class Experience {
  protected readonly i18n = inject(LanguageService);
}
