
export enum ProjectStatus { finished = 'finished', terminated = 'terminated', inProgress = 'inProgress' }

export class ProjectsDetails {
  constructor(
    public id: number,
    public name: string,
    public technologies: string,
    public description: string,
    public coverImagePath: string,
    public myWork: string,
    public status: ProjectStatus | string,
    public liveUrl: string,
  ) { }
}

