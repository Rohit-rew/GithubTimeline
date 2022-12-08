import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReposComponent } from './repos/repos.component';

const appRoutes: Routes = [
  { path: '', 
    component: HomeComponent 
  },
  {
    path: 'repos',
    component: ReposComponent
  }
];
export default appRoutes;