import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeRedirectComponent } from './resume-redirect.component';

describe('ResumeRedirectComponent', () => {
  let component: ResumeRedirectComponent;
  let fixture: ComponentFixture<ResumeRedirectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeRedirectComponent]
    });
    fixture = TestBed.createComponent(ResumeRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
