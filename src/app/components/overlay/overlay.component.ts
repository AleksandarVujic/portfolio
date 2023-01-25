import { Component } from '@angular/core';
import { DialogService } from 'src/app/services/dialog-service/dialog-service.service';

@Component({
  selector: 'overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {

  constructor(public dialogService: DialogService) { }

  closeOverlay() {
    this.dialogService.showDialog = false;
  }

}
