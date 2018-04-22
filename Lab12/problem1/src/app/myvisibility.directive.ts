import {Directive, ElementRef, Renderer, Input, OnInit, ViewContainerRef} from '@angular/core';
import {element} from "protractor";

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective implements OnInit {

  @Input() private myvisibility: boolean;

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    if (!this.myvisibility) {
      this.element.nativeElement.style.display = 'none';
    }
  }

}
