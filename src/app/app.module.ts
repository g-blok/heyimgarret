import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AdventuresComponent } from './components/adventures/adventures.component';
import { HeroComponent } from './components/hero/hero.component';
import { LandingComponent } from './components/landing/landing.component';
import { WorkComponent } from './components/work/work.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectService } from './services/project.service';
import { SharedModule } from './shared/shared.module';
import { ContactModule } from './components/contact/contact.module';
import { FilterByShowPipe } from './pipes/filter-by-show.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent,
    AdventuresComponent,
    HeroComponent,
    WorkComponent,
    FooterComponent,
    LandingComponent,
    FilterByShowPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    BrowserAnimationsModule,
    SharedModule,
    ContactModule,
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent],
})
export class AppModule {}
