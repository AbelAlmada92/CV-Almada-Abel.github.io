import { Component, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LanguageService } from '../../core/language.service';
import { GithubService } from '../../core/github.service';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective, DatePipe],
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly i18n = inject(LanguageService);
  protected readonly repos = inject(GithubService).repos;
}
