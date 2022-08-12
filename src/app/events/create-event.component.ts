import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "./shared/event.service";


@Component({
    selector: 'create-new',
    templateUrl: './create-event.component.html',
    styles: [`
    em {  float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color: #e3c3c5 }
    `]
})

export class CreateEventComponent {

    newEvent
    isDirty: boolean = true;
    constructor(
        private router: Router,
        private evetnService: EventService) { }

    saveEvent(formValues) {
        this.evetnService.saveEvent(formValues);
        this.isDirty = false
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }

}