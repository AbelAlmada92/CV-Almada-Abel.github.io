import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

/** Aparición suave del elemento cuando entra en pantalla. Uso: <div appReveal>. */
@Directive({ selector: '[appReveal]' })
export class RevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const node: HTMLElement = this.el.nativeElement;
    if (!('IntersectionObserver' in window)) return;

    node.classList.add('reveal');
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          node.classList.add('visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
