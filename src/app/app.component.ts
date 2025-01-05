import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'heyimgarret';
  isMainPage = true;
  isResumePage = false;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (!this.router.url.includes('#')) {
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            const heroElement = document.getElementById('hero');
            const introElement = document.getElementById('intro');
            if (heroElement) {
              heroElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            if (introElement) {
              introElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 0);
        }
        this.isMainPage = !this.router.url.includes('/projects/');
        this.isResumePage = this.router.url.includes('/resume');
      }
    });
  }

  onActivate(event: any) {
    setTimeout(() => {
      this.viewportScroller.scrollToPosition([0,0]);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      const element = document.getElementById('intro');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 0);
  }
}
