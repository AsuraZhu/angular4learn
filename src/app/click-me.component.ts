import {Component} from '@angular/core';
@Component({
  selector: 'app-click-me',
  template: `
    <button (click)="onClickMe($event)">Click me!</button>
    {{ clickMessage }} `
})
export class ClickMeComponent {
  clickMessage = '';
  onClickMe(event: MouseEvent) {
    if ( this.clickMessage === '' ) {
      this.clickMessage = 'You are my input';
      console.log(event.offsetX, event.offsetY);
    }else {
      this.clickMessage = '';
    }
  }
}

