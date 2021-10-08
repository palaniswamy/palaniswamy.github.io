import { Component, OnInit } from '@angular/core';
import {SkillsService} from "../service/skills.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-skill-experience',
  templateUrl: './skill-experience.component.html',
  styleUrls: ['./skill-experience.component.css']
})
export class SkillExperienceComponent implements OnInit {

  public experience: string[] | undefined
  paramsSubscription: Subscription | undefined;

  constructor(
    private skillsProvider: SkillsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const skill = this.route.snapshot.params['skill'];
    this.experience = this.skillsProvider.getExperience(skill);
    this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.experience = this.skillsProvider.getExperience(params['skill']);
        }
      );
  }

  ngOnDestroy() {
    if (this.paramsSubscription) this.paramsSubscription.unsubscribe();
  }

  getExperience() {
    return this.experience;
  }

}
