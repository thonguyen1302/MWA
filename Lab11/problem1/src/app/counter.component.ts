import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'counter-component',
  template: `
    <div>
      <!--<input type="number" (input)="setCounterValue($event)" value="{{counterValue}}"/>-->
      <button (click)="decrementCounter()">-</button>
      <span>{{counterValue}}</span>
      <button (click)="incrementCounter()">+</button>
    </div>
  `,
  styles: [`
    div {
      border: 1px solid green;
      margin: 5px;
      padding: 5px;
    }

  `],
  outputs: ['OnCounterChange']
})
export class Counter implements OnInit {

  @Input('ComponentCounterValue') counterValue: number;
  OnCounterChange: EventEmitter<number>;

  constructor() {
    this.OnCounterChange = new EventEmitter();
  }

  incrementCounter(): boolean {
    this.counterValue = this.counterValue + 1;
    this.emitCounterValue();
    return false;
  }

  decrementCounter(): boolean {
    this.counterValue = this.counterValue - 1;
    this.emitCounterValue();
    return false;
  }

  emitCounterValue() {
    this.OnCounterChange.emit(this.counterValue);
  }

  ngOnInit() {
    this.emitCounterValue();
  }

}
