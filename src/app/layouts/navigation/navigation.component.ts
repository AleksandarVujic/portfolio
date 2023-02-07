import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation-service/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  constructor(private navigationService: NavigationService, public router: Router) { }

  onCloseNavigation(goToFragment: string): void {
    this.router.navigate(['home'], { fragment: goToFragment });
    this.navigationService.showNavigation = false;
  }
}
