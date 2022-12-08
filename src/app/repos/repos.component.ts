import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment/environment';
import { RepoService } from '../services/repo.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
  providers : [RepoService]
})
export class ReposComponent implements OnInit {

  repoUrl : string = ''

  constructor(private repoService : RepoService){}
  
  async fetchRepositories(repoUrl : string) : Promise<void>{
    if(!repoUrl) return
    try {
      const repos = await fetch(repoUrl , {headers : {
        "Authorization" : `Bearer ${environment.token}`
      }})
      const repos_res = await repos.json()
      console.log(repos_res)
    } catch (error) {
      console.log(error)
    }
  }

  getRepoUrl(){
    this.repoService.getRepoUrl()
  }
  
  ngOnInit(): void {
   this.repoUrl =  this.repoService.getRepoUrl()
   this.fetchRepositories(this.repoUrl)
  }

}
