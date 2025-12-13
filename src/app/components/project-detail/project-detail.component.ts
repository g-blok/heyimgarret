import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project, VisionImage } from '../../models/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent {
  project: Project | undefined;
  screenWidth: number = window.innerWidth;
  @ViewChild('contentImages', { static: false }) contentImages!: ElementRef;

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
    this.contentImages.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  }

  scrollRight(): void {
    this.contentImages.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  }

  getImageUrl(imageItem: string | VisionImage | undefined): string {
    if (!imageItem) return '';
    return typeof imageItem === 'string' ? imageItem : imageItem.image;
  }

  getImageCredit(imageItem: string | VisionImage | undefined): string {
    if (!imageItem || typeof imageItem === 'string') return '';
    return imageItem.credit;
  }

  hasCredit(imageItem: string | VisionImage | undefined): boolean {
    if (!imageItem || typeof imageItem === 'string') return false;
    return !!imageItem.credit;
  }
}
