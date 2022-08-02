import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <app-nav></app-nav>
  <events-list></events-list>`
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
