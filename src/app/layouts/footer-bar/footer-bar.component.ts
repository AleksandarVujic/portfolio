import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.scss']
})
export class FooterBarComponent {

  constructor(private scroll: ViewportScroller) { }

  scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }
}
