import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { LandingComponent } from './components/landing/landing.component';
import { WorkComponent } from './components/work/work.component';
import { ResumeRedirectComponent } from './components/resume-redirect/resume-redirect.component';

const routes: Routes = [
  {
    path: 'resume',
    component: ResumeRedirectComponent
  },
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'projects/:id',
    loadChildren: () =>
      import('./components/project-detail/project-detail.module').then(
        (m) => m.ProjectDetailModule
      ),
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
