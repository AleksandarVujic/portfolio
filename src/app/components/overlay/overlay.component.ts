import { Component } from '@angular/core';
import { NS_SLIDE_1, NS_SLIDE_2, NS_SLIDE_3, NS_SLIDE_4, NS_SLIDE_5 } from 'src/app/constants/resources';
import { DialogService } from 'src/app/services/dialog-service/dialog-service.service';

@Component({
  selector: 'overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {

  images = [
    { imageSrc: NS_SLIDE_1, imageAlt: 'Novi Sad 1' }, 
    { imageSrc: NS_SLIDE_2, imageAlt: 'Novi Sad 2' }, 
    { imageSrc: NS_SLIDE_3, imageAlt: 'Novi Sad 3' }, 
    { imageSrc: NS_SLIDE_4, imageAlt: 'Novi Sad 4' }, 
    { imageSrc: NS_SLIDE_5, imageAlt: 'Novi Sad 5' }
  ]

  constructor(public dialogService: DialogService) { }

  closeOverlay() {
    this.dialogService.showDialog = false;
  }

}
