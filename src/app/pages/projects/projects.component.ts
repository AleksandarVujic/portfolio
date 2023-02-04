import { Component } from '@angular/core';
import { ProjectsDetails } from 'src/app/models/projects_details.model';
import projectsData from '../../../assets/data/projects.json';


@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: ProjectsDetails[] = projectsData;

}
