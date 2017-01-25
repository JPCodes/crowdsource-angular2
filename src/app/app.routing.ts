import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { IdeasComponent } from './ideas/ideas.component';
import { ProjectsComponent } from './projects/projects.component';
import { CharitableComponent } from './charitable/charitable.component';
import { NewComponent } from './new/new.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


const appRoutes: Routes = [
  {
  path: '',
  component: MainComponent
},{
  path: 'new',
  component: NewComponent
},{
  path: 'ideas',
  component: IdeasComponent
},{
  path: 'projects',
  component: ProjectsComponent
},{
  path: 'charitable',
  component: CharitableComponent
},
{
  path: 'project/:id',
  component: ProjectDetailsComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
