import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module'; // Import SharedModule
import { ProjectDetailComponent } from './project-detail.component';
import { ProjectDetailRoutingModule } from './project-detail-routing.module'; // Import the routing module
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ProjectDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectDetailRoutingModule,
    MatIconModule,
  ],
})
export class ProjectDetailModule {}
