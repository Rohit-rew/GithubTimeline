import { AfterContentChecked, AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName : string = ''

  async fetch(username : string) : Promise<void> {
    const user = await  fetch(`https://api.github.com/repos/Rohit-rew/Portfolio/commits` , {headers : {
      "Authorization" : `Bearer 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`
    }})
    const user_res = await user.json()
    console.log(user_res)
  }

  search(userName : string){
    this.userName = userName;
  }

}


