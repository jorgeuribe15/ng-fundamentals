import { Directive, Inject, OnInit, ElementRef, Input } from "@angular/core";
import { JQ_TOKEN } from "./jquery.service";

@Directive({
    selector: '[modal-trigger]' // square brackets indicate is an attribute and not element
})

export class ModalTriggerDirective implements OnInit {

    private el: HTMLElement;
    @Input('modal-trigger') modalId: string;

    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = ref.nativeElement;
    }

    ngOnInit(): void {
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({}) // Se llama el modal y se lanza el modal
        })
    }

}