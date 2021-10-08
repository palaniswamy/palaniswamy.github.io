import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SkillsComponent} from "./skills.component";
import {SkillExperienceComponent} from "./skill-experience/skill-experience.component";

const routes: Routes = [
  {
    path: '',
    component: SkillsComponent,
    children: [
      { path: ':skill', component: SkillExperienceComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
