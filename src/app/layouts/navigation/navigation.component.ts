import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation-service/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private navigationService: NavigationService) { }

  onCloseNavigation() {
    this.navigationService.showNavigation = false;
  }
}
