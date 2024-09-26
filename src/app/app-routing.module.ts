import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AdventuresComponent } from './components/adventures/adventures.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { WorkComponent } from './components/work/work.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectDetailModule } from './components/project-detail/project-detail.module';

const routes: Routes = [
  { path: '', component: HeroComponent },
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
  { path: '**', redirectTo: '' }, // Wildcard for unknown routes
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
