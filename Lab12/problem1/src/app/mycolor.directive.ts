import {Directive, HostListener, Renderer, ElementRef, HostBinding, EventEmitter, Output, OnInit} from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective implements OnInit {

  private colors: string[];
  @Output() private ColorChange: EventEmitter<string>;
  @HostBinding('style.color') activeColor = 'Black';

  @HostListener('click') changeColor() {
    this.activeColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.ColorChange.emit(this.activeColor);
  }

  constructor() {
    this.colors = ['Red', 'Green', 'Blue', 'Brown', 'Black', 'DarkBlue'];
    this.ColorChange = new EventEmitter();
  }

  ngOnInit() {
    this.ColorChange.emit(this.activeColor);
  }

}
