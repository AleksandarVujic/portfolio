import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { MidPagesActionComponent } from './mid-pages-action/mid-pages-action.component';
import { ActionButtonComponent } from '../components/action-button/action-button.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { RouterModule } from '@angular/router';
import { FooterBarComponent } from '../layouts/footer-bar/footer-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AboutComponent,
        ContactComponent,
        ProjectsComponent,
        MidPagesActionComponent,
        ActionButtonComponent,
        ProjectItemComponent,
        FooterBarComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        BrowserAnimationsModule,
    ],
    exports: [
        AboutComponent,
        ContactComponent,
        ProjectsComponent,
        MidPagesActionComponent,
        ActionButtonComponent,
        ProjectItemComponent,
        FooterBarComponent,
    ],
    providers: [],
    bootstrap: []
})
export class PagesModule { }