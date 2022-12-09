import { Component , Input } from '@angular/core';
import { Repo } from 'src/app/repos/repos.component';
import { TimelineService } from 'src/app/services/timeline.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  providers : [TimelineService]
})
export class RepoComponent {
  @Input() repo :Repo = {id : 0,
    name : "Portfolio",
    fullName : "Rohit/Portfolio",
    htmlUrl : "asd",
    description : "asdasdasd",
    url : "asd",
    created_at : "2017-09-04T02:13:17Z",
    clone_url : "asdasd",
    language : "Javascript",
  }

  constructor(private timelineService : TimelineService){

  }

  isCopied : Boolean = false;

  // triggered from html clone btn.
  copyToClipBoard(cloneUrl : string){
    this.isCopied = true;
    navigator.clipboard.writeText(cloneUrl)
    setTimeout(()=>{
      this.isCopied = false;
    },700)
  }

  // trigered from html anchor tag.
  setTimelineLink(timelineLink : string){
    this.timelineService.setTimelineLink(timelineLink);
  }

  
}