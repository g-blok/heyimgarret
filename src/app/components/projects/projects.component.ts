import { Component, OnInit } from '@angular/core';
import { PROJECTS_LIST } from '../../constants/projects.const'
import { Project } from '../../models/project.model'
import { Router } from '@angular/router';

@Component({
  selector: 'projects-component',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = PROJECTS_LIST; 

  constructor(private router: Router) { }

  ngOnInit(): void {}

  goToProjectPage(project: string): void {
    this.router.navigateByUrl(project);
  }
}
