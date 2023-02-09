import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsDetails } from 'src/app/models/projects_details.model';
import { ProjectsService } from 'src/app/services/projects-service/projects.service';

import { DEFAULT_PROJECT_IMG } from 'src/app/constants/resources';
@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent {

  public project: ProjectsDetails | any;
  public paramId: number = 0;
  public technologies: string[] = [];
  public imagePath: string = '';
  public defaultImgPath = DEFAULT_PROJECT_IMG;

  constructor(
    private projectsService: ProjectsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => this.paramId = param['id']);
    this.project = this.projectsService.getProjectById(this.paramId);
    this.technologies = this.project.technologies.split(',');
    this.project.coverImagePath === '' ?
      this.imagePath = this.defaultImgPath :
      this.imagePath = this.project.coverImagePath;

  }

  backToProjects(): void {
    this.router.navigate(['home'], { fragment: 'projects' });
  }

  openLiveDemo(): void {
    // window.open(this.project.liveUrl, "_blank");
    let link = document.createElement("a");
    link.href = this.project.liveUrl;
    link.target = "_blank";
    link.click();
  }

}
