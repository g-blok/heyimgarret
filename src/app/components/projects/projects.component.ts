import { Component, OnInit } from '@angular/core';
import { PROJECTS_LIST } from '../../constants/projects.const'
import { Project } from '../../models/project.model'

@Component({
  selector: 'projects-component',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = PROJECTS_LIST; 

  ngOnInit(): void {}
}
