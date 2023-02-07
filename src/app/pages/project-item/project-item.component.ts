import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsDetails } from 'src/app/models/projects_details.model';
import { ProjectsService } from 'src/app/services/projects-service/projects.service';

@Component({
  selector: 'project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent {

  public project: ProjectsDetails | any;
  public paramId: number = 0;
  public technologies: string[] = [];

  constructor(
    private projectsService: ProjectsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => this.paramId = param['id']);
    this.project = this.projectsService.getProjectById(this.paramId);
    this.technologies = this.project.technologies.split(',');
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
