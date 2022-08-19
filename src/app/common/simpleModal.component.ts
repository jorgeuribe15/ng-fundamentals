import { Component, ElementRef, Inject, Input, ViewChild } from "@angular/core";
import { JQ_TOKEN } from "./jquery.service";


@Component({
    selector: 'simple-modal',
    templateUrl: 'simple-modal.component.html',
    styles: [`
        .modal-body {height: 250px; overflow-y: scroll;}
    `]
})

export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @ViewChild('modalcontainer') containerEl: ElementRef // modalcontainer viene del template html

    constructor(@Inject(JQ_TOKEN) private $: any) {
    }


    /* Para cerrar el modal
    Seguir el viewchild -- Se agrega viewchild, dento del constructor se pone el nombre de referencia que se asigna en el html
    y se le da un nombre de tipo ElementRef */
    closeModal() {
        this.$(this.containerEl.nativeElement).modal('hide');
    }


}