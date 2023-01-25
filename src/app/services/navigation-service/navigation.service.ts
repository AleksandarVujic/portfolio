import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  showNavigation: boolean = false;

  constructor() { }
}
