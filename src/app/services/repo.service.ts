let reposLink: string = '';

export class RepoService {
  setRepoUrl = (repoUrl: string): void => {
    reposLink = repoUrl;
  };

  getRepoUrl = (): string => {
    return reposLink;
  };
}
