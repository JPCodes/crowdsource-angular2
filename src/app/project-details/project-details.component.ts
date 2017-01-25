import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FireBaseDBService } from '../fire-base-db.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [FireBaseDBService]
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string = null;
  project;
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
      this.projectId = urlParameters['id'];
    });
      this.project = this.fbs.getCrowdFundDetails("project", this.projectId)
  }
  delete(key:string){
    console.log(key)
    this.fbs.delete("project",key);
    this.router.navigate(['project']);
  }
  edit(){
    this.editToggle = !this.editToggle;
  }
  updateCrowdFund(key:string){
    console.log("update", key)
    this.fbs.updateCrowdFund(this.name, this.email, this.title, this.description, "project", key)
  }
}
