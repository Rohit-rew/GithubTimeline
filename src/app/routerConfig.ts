import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReposComponent } from './repos/repos.component';
import { TimelineComponent } from './timeline/timeline.component';

const appRoutes: Routes = [
  { path: '', 
    component: HomeComponent 
  },
  {
    path: 'repos',
    component: ReposComponent
  },
  {
    path : 'repos/timeline',
    component : TimelineComponent
  }
];
export default appRoutes;