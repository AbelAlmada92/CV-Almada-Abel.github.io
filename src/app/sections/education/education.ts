import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-education',
  imports: [RevealDirective],
  template: `
    @let t = i18n.t().education;
    <section class="section" id="formacion">
      <div class="container">
        <h2 class="section-title" appReveal><span>05</span> {{ t.title }}</h2>
        <div class="row g-4 g-lg-5">
          @for (col of [
            { title: t.educationTitle, items: t.education, size: 'col-lg-5' },
            { title: t.coursesTitle, items: t.courses, size: 'col-md-6 col-lg-4' },
            { title: t.languagesTitle, items: t.languages, size: 'col-md-6 col-lg-3' }
          ]; track col.title) {
            <div [class]="col.size" appReveal>
              <h3 class="sub-title">{{ col.title }}</h3>
              <ul class="list-group list-group-flush">
                @for (item of col.items; track item.title) {
                  <li class="list-group-item bg-transparent px-0">
                    <div class="fw-semibold">{{ item.title }}</div>
                    <div class="small text-body-secondary">{{ item.detail }}</div>
                  </li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class Education {
  protected readonly i18n = inject(LanguageService);
}
