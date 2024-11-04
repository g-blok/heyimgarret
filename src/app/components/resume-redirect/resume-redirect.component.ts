import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-redirect',
  template: '<div>Opening resume...</div>'
})
export class ResumeRedirectComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    window.open('/assets/blocher_resume.pdf', '_blank');
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 100);
  }
}
