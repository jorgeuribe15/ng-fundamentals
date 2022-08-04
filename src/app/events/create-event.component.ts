import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
    selector: 'create-new',
    templateUrl: './create-event.component.html'
})

export class CreateEventComponent implements OnInit {

    /**
     *
     */
    constructor(private router: Router) {
    }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    cancel() {
        this.router.navigate(['/events']);
    }

}