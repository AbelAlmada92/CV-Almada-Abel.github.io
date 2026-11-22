import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { LanguageService } from '../../core/language.service';
import { PROFILE } from '../../i18n/profile';
import { RevealDirective } from '../../shared/reveal.directive';

type Status = 'idle' | 'sending' | 'success' | 'error' | 'invalid';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RevealDirective],
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly i18n = inject(LanguageService);
  protected readonly profile = PROFILE;
  private readonly http = inject(HttpClient);
  private readonly fb = inject(NonNullableFormBuilder);

  protected readonly status = signal<Status>('idle');

  protected readonly form = this.fb.group({
    nombre: ['', [Validators.required, Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.maxLength(3000)]],
    /** Trampa anti-spam: los bots la completan, las personas no la ven. */
    _honey: [''],
  });

  protected invalid(name: 'nombre' | 'email' | 'mensaje'): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.touched || this.status() === 'invalid');
  }

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.status.set('invalid');
      return;
    }
    const value = this.form.getRawValue();
    if (value._honey) return; // bot

    this.status.set('sending');
    try {
      await firstValueFrom(
        this.http.post(PROFILE.formEndpoint, {
          nombre: value.nombre,
          email: value.email,
          mensaje: value.mensaje,
          _subject: this.i18n.t().contact.form.subject,
          _template: 'table',
        }),
      );
      this.form.reset();
      this.status.set('success');
    } catch {
      this.status.set('error');
    }
  }
}
