import { Component } from '@angular/core';
import { ProjectsDetails } from 'src/app/models/projects_details.model';
import { ProjectsService } from 'src/app/services/projects-service/projects.service';
import projectsData from '../../../assets/data/projects.json';


@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: ProjectsDetails[] = [];


  constructor(private porjectsService: ProjectsService) { }

  ngOnInit() {
    this.projects = this.porjectsService.getAllProjects();
  }


}