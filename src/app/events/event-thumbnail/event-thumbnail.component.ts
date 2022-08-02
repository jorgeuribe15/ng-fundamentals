import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
  .pad-left {margin-left:10px;}
  `]
})
export class EventThumbnailComponent implements OnInit {

  constructor() { }
  @Input()
  events: any;

  @Output()
  eventClick = new EventEmitter()

  ngOnInit(): void {
  }

  handleClickMe() {
    console.log('print in local component: ' + this.events.name);
    this.eventClick.emit('emitted: Hola Jorge Uribe');
    this.eventClick.emit('emitted: ' + this.events.name);
  }

  logFoo() {
    console.log('From template varirable !!!');
  }

}
