import { Component } from '@angular/core';
import { environment } from 'src/environment/environment';
import { user } from 'src/types/type';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  usersArray : user[] = []

  async fetch(userName : string) : Promise<void> {
    const users = await fetch(`https://api.github.com/search/users?q=${userName}` , {headers : {
      "Authorization" : `Bearer ${environment.token}`
    }})
    const users_res = await users.json()
    this.usersArray = users_res.items
  }
 
  search(userName : string){ 
    this.fetch(userName);
  }

}
