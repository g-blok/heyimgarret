import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'hero-component',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @ViewChild('title') titleElement?: ElementRef;

  ngOnInit() {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.titleElement) {
      const rect = this.titleElement.nativeElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const gradient = `linear-gradient(to right, #5DA17E, #223B2E ${x}px, #5DA17E)`;

      this.titleElement.nativeElement.style.background = gradient;
      this.titleElement.nativeElement.style.backgroundClip = 'text';
      this.titleElement.nativeElement.style.webkitBackgroundClip = 'text';
      this.titleElement.nativeElement.style.color = 'transparent';
    }
  }
}
