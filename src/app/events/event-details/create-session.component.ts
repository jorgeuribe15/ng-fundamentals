import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISession } from "../shared/event.model";
import { restrictedWords } from "../shared/restricted-words.validators";

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles: [`
    em {  float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color: #e3c3c5 }
    `]
})

export class CreateSessionComponent implements OnInit {

    @Output() saveNewSession = new EventEmitter();
    @Output() cancelAddSession = new EventEmitter()
    newSessionForm: FormGroup

    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl

    invalid: string[];


    ngOnInit(): void {

        this.invalid = ['foo', 'bar', 'loco'];

        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(this.invalid)])


        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })

    }



    saveSession(formValues) {

        let session: ISession = {
            id: undefined,
            name: formValues.name,
            duration: +formValues.duration,
            level: formValues.level,
            presenter: formValues.presenter,
            abstract: formValues.abstract,
            voters: []
        }

        // emito la informacio y en donde este el component esta sera cachada
        // En este caso el componente esta en : event-details
        this.saveNewSession.emit(session)
    }

    cancel() {
        this.cancelAddSession.emit()
    }
}
