import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilModule } from './utils/utils.module';
import { HomeComponent } from './home/home.component';
import { PagesModule } from './pages/pages.module';
import { OverlayComponent } from './components/overlay/overlay.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MouseScrollMeComponent } from './components/mouse-scroll-me/mouse-scroll-me.component';
import { FooterBarComponent } from './layouts/footer-bar/footer-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverlayComponent,
    NavigationComponent,
    CarouselComponent,
    MouseScrollMeComponent,
    FooterBarComponent,
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
