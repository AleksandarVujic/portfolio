import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'mid-pages-action',
  templateUrl: './mid-pages-action.component.html',
  styleUrls: ['./mid-pages-action.component.scss'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('500ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0, transform: 'translateY(-10px)' })),
      ]),
    ])
  ],
})
export class MidPagesActionComponent {

  @Input() show: boolean = false;

  constructor() { }

  downloadFile() {
    let link = document.createElement("a");
    link.download = "Aleksandar Vujić";
    link.href = 'assets/files/aleksandar_vujic.pdf';
    link.click();
  }



}

