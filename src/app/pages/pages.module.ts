import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { MidPagesActionComponent } from './mid-pages-action/mid-pages-action.component';
import { ActionButtonComponent } from '../components/action-button/action-button.component';

@NgModule({
    declarations: [
        AboutComponent,
        ContactComponent,
        ProjectsComponent,
        MidPagesActionComponent,
        ActionButtonComponent,
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        AboutComponent,
        ContactComponent,
        ProjectsComponent,
        MidPagesActionComponent,
        ActionButtonComponent,
    ],
    providers: [],
    bootstrap: []
})
export class PagesModule { }