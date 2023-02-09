import { Component } from '@angular/core';
import { PROFILE_PICTURE } from 'src/app/constants/resources';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  showMidPage: boolean = false;
  myselfImg: string = PROFILE_PICTURE;
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
