import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-items',
  template: `
    <p>Latest Active Color: {{color}}</p>
    <ul>
      <li *ngFor="let item of items" upper [myvisibility]="true" mycolor (ColorChange)="updateActiveColor($event)">{{item}}</li>
    </ul>
    <p [myvisibility]="true">This paragraph will be displayed!</p>
    <p [myvisibility]="false">This paragraph will not be displayed!</p>
  `,
  styles: []
})
export class ListItemsComponent {
  @Input() items: Array<string>;

  private color: string;

  updateActiveColor(color: string) {
    this.color = color;
  }

}
