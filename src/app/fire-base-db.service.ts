import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FireBaseDBService {
  idea: FirebaseListObservable<any>;
  project: FirebaseListObservable<any>;
  charitable: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.idea = af.database.list('/crowdFunding/idea');
    this.project = af.database.list('/crowdFunding/project');
    this.charitable = af.database.list('/crowdFunding/charitable');
 }


  newCrowdFund(name:string, email:string, title:string, description:string, type:string){
    console.log(type)
        eval('this.'+type).push({
          name: name,
          email: email,
          title: title,
          description: description
        })

    }
}
