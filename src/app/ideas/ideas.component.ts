import { Component, OnInit } from '@angular/core';
import { FireBaseDBService } from '../fire-base-db.service';


@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css'],
  providers: [FireBaseDBService]
})
export class IdeasComponent implements OnInit {
  ideas:any;
  constructor(public fbs: FireBaseDBService) { }

  ngOnInit() {
    this.ideas = this.fbs.getCrowdFund("idea")

  }

}
