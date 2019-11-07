import {Component, ContentChild, ContentChildren, Directive, Input, QueryList, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'example-app',
  template: `
    <button (click)="toggle()">Toggle</button>
  `,
  host: {
    '[attr.tabindex]': 'disabled ? null : 0'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  disabled = false;

  toggle() {
    this.disabled = !this.disabled;
  }
}
