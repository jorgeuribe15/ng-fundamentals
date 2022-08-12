import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: IEvent
  addMode: boolean
  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(
      +this.activatedRoute.snapshot.params['id']
    );
  }

  addSession() {
    this.addMode = true;
  }

  cancelAddSession() {
    this.addMode = false;
  }

  saveNewSession(session: ISession) {
    const nextid = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextid + 1
    this.event.sessions.push(session)
    this.eventService.updateEvent(this.event)
    this.addMode = false
  }

}
