let reposLink: string = '';
let userUrl :string = ''

export class RepoService {
  setRepoUrl = (repoUrl: string): void => {
    reposLink = repoUrl;
  };

  getRepoUrl = (): string => {
    return reposLink;
  };

  setUserLink = (userLink : string):void=>{
    console.log("Setting link : " + userLink)
    userUrl = userLink;
  }

  getUserLink = ():string=>{
    return userUrl;
  }
}
