import { Component } from '@angular/core';
import { ProjectsDetails } from 'src/app/models/projects_details.model';
import { ProjectsService } from 'src/app/services/projects-service/projects.service';

import { DEFAULT_PROJECT_IMG } from 'src/app/constants/resources';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: ProjectsDetails[] = [];
  public defaultImgPath = DEFAULT_PROJECT_IMG;

  constructor(private porjectsService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.porjectsService.getAllProjects();
  }

}