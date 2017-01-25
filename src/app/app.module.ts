import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { IdeasComponent } from './ideas/ideas.component';
import { masterFirebaseConfig } from './api-keys'
import { AngularFireModule } from 'angularfire2';
import { ProjectsComponent } from './projects/projects.component';
import { CharitableComponent } from './charitable/charitable.component';
import { NewComponent } from './new/new.component';
import { MainComponent } from './main/main.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { IdeaDetailsComponent } from './idea-details/idea-details.component';
import { CharitableDetailsComponent } from './charitable-details/charitable-details.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    IdeasComponent,
    ProjectsComponent,
    CharitableComponent,
    NewComponent,
    MainComponent,
    ProjectDetailsComponent,
    IdeaDetailsComponent,
    CharitableDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
