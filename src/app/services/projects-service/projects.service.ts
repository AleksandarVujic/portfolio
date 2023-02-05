import { Injectable } from '@angular/core';
import { ProjectsDetails } from 'src/app/models/projects_details.model';
import projectsData from '../../../assets/data/projects.json';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects: ProjectsDetails[] = projectsData;

  constructor() { }

  getAllProjects(): ProjectsDetails[] {
    return this.projects;
  }

  getProjectById(id: number) {
    return this.projects.find((project) => project.id == id);
  }
}
