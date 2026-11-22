import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/language.service';
import { PROFILE } from '../../i18n/profile';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly i18n = inject(LanguageService);
  protected readonly profile = PROFILE;
  protected readonly cvUrl = computed(() => PROFILE.cv[this.i18n.lang()]);
}
