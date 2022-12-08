
let repoLink : string = ""

export class RepoService {

    

    setRepoUrl = (repoUrl :string):void =>{
        repoLink = repoUrl;
    }
    
    getRepoUrl = ():string => {
        console.log(repoLink)
        return repoLink
    }

}