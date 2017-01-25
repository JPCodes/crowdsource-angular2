import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FireBaseDBService } from '../fire-base-db.service';

@Component({
  selector: 'app-charitable-details',
  templateUrl: './charitable-details.component.html',
  styleUrls: ['./charitable-details.component.css'],
  providers: [FireBaseDBService]
})
export class CharitableDetailsComponent implements OnInit {

  charitableId: string = null;
  charitable;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private fbs: FireBaseDBService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.charitableId = urlParameters['id'];
    });
      this.charitable = this.fbs.getCrowdFundDetails("charitable", this.charitableId)
  }
  delete(key:string){
    console.log(key)
    this.fbs.delete("charitable",key);
    this.router.navigate(['charitable']);
  }
  edit(){

  }


}
