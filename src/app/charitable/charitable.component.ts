import { Component, OnInit } from '@angular/core';
import { FireBaseDBService } from '../fire-base-db.service';


@Component({
  selector: 'app-charitable',
  templateUrl: './charitable.component.html',
  styleUrls: ['./charitable.component.css'],
  providers: [FireBaseDBService]
})
export class CharitableComponent implements OnInit {

charitables: any;

  constructor(public fbs: FireBaseDBService) { }

  ngOnInit() {

    this.charitables = this.fbs.getCrowdFund("charitable")
  }


}
