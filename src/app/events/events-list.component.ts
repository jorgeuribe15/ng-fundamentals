import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';

import { IEvent } from './shared/event.model';


@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
    title = 'app';
    eventsl: IEvent[];

    constructor(private eventService: EventService) {
    }

    ngOnInit() {
        //this.eventsl = this.eventService.getEvents();
        this.eventService.getEvents().subscribe(events => { this.eventsl = events });
    }


    // From EventEmitter
    handleClickMe(data) {
        console.log(data + '  ← ← Received: ');
    }


}