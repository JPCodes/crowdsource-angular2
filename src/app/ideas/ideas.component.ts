import { Component, OnInit } from '@angular/core';
import { FireBaseDBService } from '../fire-base-db.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css'],
  providers: [FireBaseDBService]
})
export class IdeasComponent implements OnInit {
  ideas:any;
  constructor(private router: Router, public fbs: FireBaseDBService) { }

  ngOnInit() {
    this.ideas = this.fbs.getCrowdFund("idea")

  }
  goToDetailProject(clickedProject) {
    this.router.navigate(['idea', clickedProject.$key]);
  };

}
