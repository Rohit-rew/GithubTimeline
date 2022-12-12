import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment/environment';
import { RepoService } from '../services/repo.service';
import { userInfo , Repo } from 'src/types/type';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
  providers: [RepoService],
})
export class ReposComponent implements OnInit {
  repoUrl: string = '';
  userUrl: string = '';
  repoArray: Repo[] = [];
  userData: userInfo = {
    login: '',
    id: 0,
    avatar_url: '',
    html_url: '',
    repos_url: '',
    type: '',
    name: '',
    company: null,
    blog: '',
    location: '',
    email: null,
    hireable: null, 
    bio: '',
    twitter_username: null,
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: '',
  };

  constructor(private repoService: RepoService) {}

  async fetchRepositories(repoUrl: string): Promise<void> {
    if (!repoUrl) return;
    try {
      const repos = await fetch(repoUrl, {
        headers: {
          Authorization: `Bearer ${environment.token}`,
        },
      });
      const repos_res = await repos.json();
      this.repoArray = repos_res;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchUserDetails(userUrl: string): Promise<void> {
    console.log(userUrl);
    try {
      const user = await fetch(userUrl, {
        headers: {
          Authorization: `Bearer ${environment.token}`,
        },
      });
      const user_res = await user.json();
      this.userData = user_res;
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.repoUrl = this.repoService.getRepoUrl();
    this.userUrl = this.repoService.getUserLink();
    this.fetchUserDetails(this.userUrl);
    this.fetchRepositories(this.repoUrl);
  }
}
