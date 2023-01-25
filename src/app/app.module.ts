import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilModule } from './utils/utils.module';
import { HomeComponent } from './home/home.component';
import { PagesModule } from './pages/pages.module';
import { OverlayComponent } from './components/overlay/overlay.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverlayComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
