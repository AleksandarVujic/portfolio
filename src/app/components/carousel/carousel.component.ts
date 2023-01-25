import { Component, Input, OnInit } from '@angular/core';

interface carouselImages {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() images: carouselImages[] = [];
  @Input() indicators: boolean = true;
  @Input() autoSlide: boolean = true;
  @Input() slideInterval: number = 3000;
  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      setInterval(() => {
        this.nextSlide();
      }, this.slideInterval);
    }
  }

  selectImage(idx: number): void {
    this.selectedIndex = idx;
  }

  nextSlide(): void {
    this.selectedIndex === this.images.length - 1 ?
      this.selectedIndex = 0 : this.selectedIndex++;

  }
}
