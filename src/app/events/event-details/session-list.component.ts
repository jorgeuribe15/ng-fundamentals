import { sequence } from "@angular/animations";
import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "../shared/event.model";

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})

export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[]
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];


    // Implementado para hacer reactiva la lista cada que detecte un cambio
    ngOnChanges() {
        if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc)
        }
    }

    filterSessions(filter: string) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        }
        else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter
            })
        }
    }
}

function sortByNameAsc(s1: ISession, s2: ISession) {

    if (s1.name > sequence.name) return 1
    else if (sequence.name === s2.name) return 0
    else return -1
}

function sortByVotesDesc(s1: ISession, s2: ISession) {

    return s2.voters.length - s1.voters.length;

}