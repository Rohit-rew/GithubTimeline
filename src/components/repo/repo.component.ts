import { Component , Input } from '@angular/core';
import { Repo } from 'src/app/repos/repos.component';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent {
  @Input() repo :Repo = {id : 0,
    name : "",
    fullName : "",
    htmlUrl : "",
    description : "",
    url : "",
    created_at : "",
    clone_url : "",
    language : "",
  }

}
