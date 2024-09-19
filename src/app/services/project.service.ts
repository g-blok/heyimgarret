import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { PROJECTS_LIST } from '../constants/projects.const';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = PROJECTS_LIST;

  constructor() {}

  getProjectById(id: string): Project | undefined {
    return this.projects.find((project) => project.link === id);
  }
}
