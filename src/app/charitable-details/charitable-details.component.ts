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
    this.editToggle = !this.editToggle;
  }
  updateCrowdFund(key:string){
    console.log("update", key)
    this.fbs.updateCrowdFund(this.name, this.email, this.title, this.description, "charitable", key)
  }
}
