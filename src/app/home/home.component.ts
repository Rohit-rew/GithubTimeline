import { Component } from '@angular/core';
import { environment } from 'src/environment/environment.prod';


export type user = {
  avatar_url : string,
  html_url : string,
  login : string,
  id : number,
  repos_url : string,
  url : string,
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  usersArray : user[] = []

  async fetch(userName : string) : Promise<void> {
    console.log(userName)
    const users = await fetch(`https://api.github.com/search/users?q=${userName}` , {headers : {
      "Authorization" : `Bearer ${environment.token}`
    }})
    const users_res = await users.json()
    this.usersArray = users_res.items
    console.log(users_res)
  }
 
  search(userName : string){ 
    this.fetch(userName);
  }

}
