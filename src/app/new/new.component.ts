import { Component, OnInit } from '@angular/core';
import { FireBaseDBService } from '../fire-base-db.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  providers: [FireBaseDBService]
})
export class NewComponent implements OnInit {
  name: string;
  email: string;
  title: string;
  description: string;
  submitted: boolean;
  type;

  constructor(public fbs: FireBaseDBService) { }

  ngOnInit() {
    this.submitted = false;
  }

  toggleForm(){
    this.submitted = !this.submitted;
  }

  newCrowdFund(){
    this.fbs.newCrowdFund(this.name, this.email, this.title, this.description, this.type)
  }

}
