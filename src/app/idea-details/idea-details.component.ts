import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private location: Location, private fbs: FireBaseDBService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.ideaId = urlParameters['id'];
    });
      this.idea = this.fbs.getCrowdFundDetails("idea", this.ideaId)
  }

}
