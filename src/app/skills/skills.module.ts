import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsComponent } from './skills.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillExperienceComponent } from './skill-experience/skill-experience.component';

@NgModule({
  declarations: [
    SkillsComponent,
    SkillExperienceComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule
  ]
})
export class SkillsModule { }
