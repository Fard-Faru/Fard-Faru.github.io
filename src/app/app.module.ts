import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ExtracurricularsComponent } from './extracurriculars/extracurriculars.component';
import { AwardsComponent } from './awards/awards.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ExtracurricularsComponent,
    AwardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
