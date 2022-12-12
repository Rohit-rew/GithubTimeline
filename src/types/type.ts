export type userInfo = {
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
  avatar_url: string;
  html_url: string;
  login: string;
  id: number;
  repos_url: string;
  url: string;
};

export type commit = {
    sha : string,
    node_id : string,
    url : string ,
    commit : {
      message : string,
      author : {
        name : string,
        email : string,
        date : string,
      },
      committer : {
        name : string,
        email : string,
        date : string
      }
    },
    committer : {
      avatar_url : string,
      login : string,
      url : string,
    },
    parents : {sha : string, url : string , html_url : string}[]
  }
