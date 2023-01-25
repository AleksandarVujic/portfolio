import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
    declarations: [
        AboutComponent,
        ContactComponent,
    ],
    imports: [
        BrowserModule,
    ],
    exports: [
        AboutComponent,
        ContactComponent,
    ],
    providers: [],
    bootstrap: []
})
export class PagesModule { }