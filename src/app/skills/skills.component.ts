import { Component, OnInit } from '@angular/core';
import {SkillsService} from "./service/skills.service";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skills: String[] | undefined

  constructor(private skillsProvider: SkillsService) { }

  ngOnInit(): void {
    this.skills = this.skillsProvider.getSkills();
  }

}
