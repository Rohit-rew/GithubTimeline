import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment/environment';
import { RepoService } from '../services/repo.service';

export type Repo = {
  id: number;
  name: string;
  fullName: string;
  htmlUrl: string;
  description: string;
  url: string;
  created_at: string;
  clone_url: string;
  language: string;
};

export type user = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  type: string;
  name: string;
  company: string | null;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean | null;
  bio: string;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
};

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
  userData: user = {
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
