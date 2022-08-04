import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
    title = 'app';
    eventsl: any;

    constructor(private eventService: EventService) {
    }

    ngOnInit() {
        this.eventsl = this.eventService.getEvents();
    }

    events2 = [
        {
            id: 1,
            name: 'Angular Connect V2 From array of events',
            date: '9/26/2036',
            time: '10:00 am',
            price: 599.99,
            imageUrl: '/assets/images/angularconnect-shield.png',
            location: {
                address: '1057 DT',
                city: 'London',
                country: 'England'
            }
        }
    ]

    // From EventEmitter
    handleClickMe(data) {
        console.log(data + '  ← ← Received: ');
    }


}