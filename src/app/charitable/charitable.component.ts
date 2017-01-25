import { Component, OnInit } from '@angular/core';
import { FireBaseDBService } from '../fire-base-db.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-charitable',
  templateUrl: './charitable.component.html',
  styleUrls: ['./charitable.component.css'],
  providers: [FireBaseDBService]
})
export class CharitableComponent implements OnInit {

charitables: any;

  constructor(private router: Router, public fbs: FireBaseDBService) { }

  ngOnInit() {

    this.charitables = this.fbs.getCrowdFund("charitable")
  }
  goToDetailProject(clickedProject) {
      this.router.navigate(['charitable', clickedProject.$key]);
    };


}
