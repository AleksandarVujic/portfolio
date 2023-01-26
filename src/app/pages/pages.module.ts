import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
    declarations: [
        AboutComponent,
        ContactComponent,
        ProjectsComponent,
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        AboutComponent,
        ContactComponent,
        ProjectsComponent,
    ],
    providers: [],
    bootstrap: []
})
export class PagesModule { }