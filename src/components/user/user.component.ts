import { Component  , Input} from '@angular/core';
import { RepoService } from 'src/app/services/repo.service';
import { user } from 'src/types/type';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers : [RepoService]
})
export class UserComponent {
  @Input() user: user = {avatar_url : "" , login : "" , id : 0 ,html_url : "" , repos_url : "" , url : ""};

  constructor(private repoService : RepoService){}

  setLinks(repoLink : string , userLink : string){
    this.repoService.setRepoUrl(repoLink);
    this.repoService.setUserLink(userLink);
  }

}
