import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.project = this.projectService.getProjectById(projectId);
    }
  }

  scrollLeft(): void {
    const container = document.querySelector('.content-images');
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  }

  scrollRight(): void {
    const container = document.querySelector('.content-images');
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  }
}
