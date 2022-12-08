import { Component  , Input} from '@angular/core';
import { user } from '../../app/home/home.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user: user = {avatar_url : "" , login : "" , id : 0 ,html_url : "" , repos_url : "" , url : ""};

}
