import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoaderLogoComponent } from './loader-logo/loader-logo.component';
@NgModule({
    declarations: [
        NotFoundComponent,
        LoaderLogoComponent,
    ],
    imports: [
        BrowserModule,

    ],
    exports: [
        NotFoundComponent,
        LoaderLogoComponent,
    ],
    providers: [],
    bootstrap: []
})
export class UtilModule { }