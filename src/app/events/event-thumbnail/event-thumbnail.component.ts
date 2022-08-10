import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEvent } from '../shared/event.model';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
  .thumbnail {min-height: 250px;}
  .pad-left {margin-left:10px;}
  .well div {color: #bbb}
  `]
})
export class EventThumbnailComponent implements OnInit {

  constructor() { }
  @Input()
  eventt: IEvent;

  @Output()
  eventClick = new EventEmitter()

  ngOnInit(): void {
  }

  // send information over @Output and eventEmitter
  handleClickMe() {
    console.log('print in local component: ' + this.eventt.name);
    this.eventClick.emit('emitted: Hola Jorge Uribe');
    this.eventClick.emit('emitted: ' + this.eventt.name);
  }

  logFoo() {
    console.log('From template varirable !!!');
  }

}
