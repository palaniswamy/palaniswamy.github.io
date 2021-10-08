import { Injectable } from '@angular/core';
import { Skills } from '../models/skills';
import JSONdata from '../../../assets/skills.json';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills: Skills[] = []

  constructor() {
    this.processSkillsFromJSON()
  }

  processSkillsFromJSON() {
    JSONdata.skills.forEach((skill) => {
      this.skills.push(
        new Skills(
          skill.name,
          skill.experience
        )
      )
    });
  }

  getSkills() {
    return this.skills.map(skill => skill.name);
  }

  // getSkill(skill: string): Skills {
  //   return this.skills.filter(skillElement => skillElement.name === skill)[0];
  // }
}
