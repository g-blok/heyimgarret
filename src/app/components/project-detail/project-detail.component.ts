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
    const container = this.contentImages.nativeElement;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;

    // Get all image wrappers
    const imageWrappers = Array.from(
      container.querySelectorAll('.content-image-wrapper')
    ) as HTMLElement[];
    if (imageWrappers.length === 0) return;

    // Find the currently visible image (the one closest to the left edge)
    let currentIndex = 0;
    let minDistance = Infinity;

    imageWrappers.forEach((wrapper, index) => {
      const wrapperLeft = wrapper.offsetLeft;
      const distance = Math.abs(wrapperLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        currentIndex = index;
      }
    });

    // Scroll to previous image
    const targetIndex = Math.max(0, currentIndex - 1);
    const targetWrapper = imageWrappers[targetIndex];
    const targetScroll = targetWrapper.offsetLeft;

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  }

  scrollRight(): void {
    const container = this.contentImages.nativeElement;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;

    // Get all image wrappers
    const imageWrappers = Array.from(
      container.querySelectorAll('.content-image-wrapper')
    ) as HTMLElement[];
    if (imageWrappers.length === 0) return;

    // Find the currently visible image (the one closest to the left edge)
    let currentIndex = 0;
    let minDistance = Infinity;

    imageWrappers.forEach((wrapper, index) => {
      const wrapperLeft = wrapper.offsetLeft;
      const distance = Math.abs(wrapperLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        currentIndex = index;
      }
    });

    // Scroll to next image
    const maxIndex = imageWrappers.length - 1;
    const targetIndex = Math.min(maxIndex, currentIndex + 1);
    const targetWrapper = imageWrappers[targetIndex];
    const targetScroll = targetWrapper.offsetLeft;

    container.scrollTo({
      left: targetScroll,
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
