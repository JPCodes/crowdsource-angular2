import { Component, OnInit } from '@angular/core';
import { FireBaseDBService } from '../fire-base-db.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [FireBaseDBService]
})
export class MainComponent implements OnInit {

  constructor(public fbs: FireBaseDBService) { }

  ngOnInit() {
  }

}
