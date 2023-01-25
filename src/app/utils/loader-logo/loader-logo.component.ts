import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'loader-logo',
  templateUrl: './loader-logo.component.html',
  styleUrls: ['./loader-logo.component.scss']
})
export class LoaderLogoComponent implements OnInit {
  showSplash: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.showSplash = !this.showSplash;
      this.router.navigate(['/home']);
    }, 3500);
  }

}
