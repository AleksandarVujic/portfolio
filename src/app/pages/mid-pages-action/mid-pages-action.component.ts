import { Component } from '@angular/core';


@Component({
  selector: 'mid-pages-action',
  templateUrl: './mid-pages-action.component.html',
  styleUrls: ['./mid-pages-action.component.scss']
})
export class MidPagesActionComponent {

  constructor() { }

  downloadFile() {
    let link = document.createElement("a");
    link.download = "Aleksandar Vujić";
    link.href = 'assets/files/aleksandar_vujic.pdf';
    link.click();
  }


}

