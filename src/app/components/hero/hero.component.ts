import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  AfterViewInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, AfterViewInit {
  @ViewChild('titleGradient') titleGradientElement?: ElementRef;
  isMobile: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.checkIfMobile();
  }

  ngAfterViewInit() {
    this.setDefaultGradient();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkIfMobile();
    this.setDefaultGradient();
  }

  checkIfMobile() {
    this.isMobile = window.innerWidth <= 768;
  }

  setDefaultGradient() {
    if (this.titleGradientElement) {
      const gradient = this.isMobile
        ? 'linear-gradient(45deg, #5DA17E, #223B2E, #5DA17E)'
        : 'linear-gradient(to right, #5DA17E, #223B2E, #5DA17E)';

      this.applyGradient(gradient);
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.titleGradientElement && !this.isMobile) {
      const rect =
        this.titleGradientElement.nativeElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const gradient = `radial-gradient(circle at ${x}px ${y}px, #5DA17E, #223B2E)`;

      this.applyGradient(gradient);
    }
  }

  private applyGradient(gradient: string) {
    if (this.titleGradientElement) {
      const element = this.titleGradientElement.nativeElement;
      this.renderer.setStyle(element, 'background', gradient);
      this.renderer.setStyle(element, 'backgroundClip', 'text');
      this.renderer.setStyle(element, '-webkit-background-clip', 'text');
      this.renderer.setStyle(element, 'color', 'transparent');
    }
  }
}
