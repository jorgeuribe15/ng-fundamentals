import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateEventComponent } from "./events/create-event.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventsListComponent } from "./events/events-list.component";


export const appRoutes: Routes = [

    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent },

    { path: '', redirectTo: '/events', pathMatch: 'full' }
    //    { path: '**', redirectTo: '' }
]


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}