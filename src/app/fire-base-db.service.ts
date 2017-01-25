import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class FireBaseDBService {
  idea: FirebaseListObservable<any>;
  project: FirebaseListObservable<any>;
  charitable: FirebaseListObservable<any>;
  projectDetails: FirebaseObjectObservable<any>;

  constructor(public af: AngularFire) {
    this.idea = af.database.list('/crowdFunding/idea');
    this.project = af.database.list('/crowdFunding/project');
    this.charitable = af.database.list('/crowdFunding/charitable');
 }
  newCrowdFund(name:string, email:string, title:string, description:string, type:string){
        eval('this.'+type).push({
          name: name,
          email: email,
          title: title,
          description: description
        })

    }
  updateCrowdFund(name:string, email:string, title:string, description:string, type:string, key:string){
    console.log("db update:", key, type)
        eval('this.'+type).update(key,{
          name: name,
          email: email,
          title: title,
          description: description
        })

    }

  getCrowdFund(type:string){
    return eval('this.'+ type);
  }
  getCrowdFundDetails(type:string, id:string){
    return this.projectDetails = this.af.database.object('/crowdFunding/'+type+'/' + id);
  }
  delete(type:string,key:string){
    eval('this.'+type).remove(key);
  }
}
