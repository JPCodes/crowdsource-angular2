import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  name: string;
  email: string;
  title: string;
  description: string;
  submitted: boolean;
  type;

  constructor() { }

  ngOnInit() {
    this.submitted = false;
  }

  submit(){
    this.submitted = true;
  }

  newCrowdFund(){

    console.log(this.name, this.email, this.title, this.description, this.type)
  }

}
