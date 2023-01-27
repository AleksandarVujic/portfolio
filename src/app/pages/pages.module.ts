import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { MidPagesActionComponent } from './mid-pages-action/mid-pages-action.component';

@NgModule({
    declarations: [
        AboutComponent,
        ContactComponent,
        ProjectsComponent,
        MidPagesActionComponent,
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        AboutComponent,
        ContactComponent,
        ProjectsComponent,
        MidPagesActionComponent,
    ],
    providers: [],
    bootstrap: []
})
export class PagesModule { }