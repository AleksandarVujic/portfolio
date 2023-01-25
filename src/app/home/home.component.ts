import { Component } from '@angular/core';
import { DialogService } from '../services/dialog-service/dialog-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public dialogService: DialogService) { }

  openOvarlayNS() {
    this.dialogService.showDialog = true;
  }

  toggleMenu() { }

}
