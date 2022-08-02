import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent {
    title = 'app';

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

    events = {

        id: 1,
        name: 'Angular Connect',
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

    handleClickMe(data) {
        console.log(data + '  ← ← Received: ');
    }


}