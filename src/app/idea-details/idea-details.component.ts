import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FireBaseDBService } from '../fire-base-db.service';

@Component({
  selector: 'app-idea-details',
  templateUrl: './idea-details.component.html',
  styleUrls: ['./idea-details.component.css'],
  providers: [FireBaseDBService]
})
export class IdeaDetailsComponent implements OnInit {
  ideaId: string = null;
  idea;
  editToggle: boolean;
  name: string;
  email: string;
  title: string;
  description: string;
  type;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private fbs: FireBaseDBService) { }

  ngOnInit() {
    this.editToggle = false;
    this.route.params.forEach((urlParameters) => {
      this.ideaId = urlParameters['id'];
    });
      this.idea = this.fbs.getCrowdFundDetails("idea", this.ideaId)
  }
  delete(key:string){
    console.log(key)
    this.fbs.delete("idea",key);
    this.router.navigate(['idea']);
  }
  edit(){
    this.editToggle = !this.editToggle;
  }
  updateCrowdFund(key:string){
    console.log("update", key)
    this.fbs.updateCrowdFund(this.name, this.email, this.title, this.description, "idea", key)
  }

}
