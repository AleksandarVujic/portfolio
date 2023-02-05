import { ViewportScroller } from '@angular/common';
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

  constructor(
    private projectsService: ProjectsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => this.paramId = param['id']);
    this.project = this.projectsService.getProjectById(this.paramId);
  }

  backToProjects(): void {
    this.router.navigate(['home'], { fragment: 'projects' });
  }

}
