import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import appRoutes from './routerConfig';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { InputComponent } from '../components/input/input.component';
import { UserComponent } from '../components/user/user.component';
import { ReposComponent } from './repos/repos.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputComponent,
    UserComponent,
    FooterComponent,
    ReposComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoutes) ,FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
