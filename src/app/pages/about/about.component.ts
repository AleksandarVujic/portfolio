import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  showMidPage: boolean = false;
  skills: String[] = ['Javascript', 'Angular', 'Typescript', 'HTML', 'CSS', 'Flutter', 'Dart', 'Bootstrap', 'Java', 'Spring Framework', 'MySQL', 'Git', 'Jira'];

  toggle() {
    this.showMidPage = !this.showMidPage;
  }

  downloadFile() {
    let link = document.createElement("a");
    link.download = "Aleksandar Vujić";
    link.href = 'assets/files/aleksandar_vujic.pdf';
    link.click();
  }
}
