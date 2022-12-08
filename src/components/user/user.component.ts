import { Component  , Input} from '@angular/core';
import { RepoService } from 'src/app/services/repo.service';
import { user } from '../../app/home/home.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers : [RepoService]
})
export class UserComponent {
  @Input() user: user = {avatar_url : "" , login : "" , id : 0 ,html_url : "" , repos_url : "" , url : ""};

  constructor(private repoService : RepoService){}

  setRepoLink(repoLink : string){
    this.repoService.setRepoUrl(repoLink)
  }

}
