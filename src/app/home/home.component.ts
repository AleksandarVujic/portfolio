import { Component } from '@angular/core';
import { DialogService } from '../services/dialog-service/dialog-service.service';
import { NavigationService } from '../services/navigation-service/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public dialogService: DialogService,
    public navigationService: NavigationService,
  ) { }

  openOvarlayNS() {
    this.dialogService.showDialog = true;
  }

  openMenu() {
    this.navigationService.showNavigation = true;
  }

}
