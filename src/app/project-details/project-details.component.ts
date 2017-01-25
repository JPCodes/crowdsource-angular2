import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private location: Location, private fbs: FireBaseDBService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
      this.project = this.fbs.getCrowdFundDetails("project", this.projectId)
  }

}
