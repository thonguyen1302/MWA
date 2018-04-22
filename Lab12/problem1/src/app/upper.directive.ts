import {Directive, ElementRef, Renderer, ViewContainerRef, TemplateRef} from '@angular/core';

@Directive({
  selector: '[upper]'
})
export class UpperDirective {

  constructor(private element: ElementRef, private renderer: Renderer) {
    renderer.setElementStyle(element.nativeElement, 'text-transform', 'uppercase');
  }

}
