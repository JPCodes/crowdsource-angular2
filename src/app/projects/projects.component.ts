import { Component, OnInit } from '@angular/core';
import { FireBaseDBService } from '../fire-base-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [FireBaseDBService]
})
export class ProjectsComponent implements OnInit {
  projects:any;

  constructor(private router: Router, public fbs: FireBaseDBService) { }

  ngOnInit() {
    this.projects = this.fbs.getCrowdFund("project")
  }
  goToDetailProject(clickedProject) {
    this.router.navigate(['project', clickedProject.$key]);
  };
}
