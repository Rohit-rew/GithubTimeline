import { Component , Input, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/services/timeline.service';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Repo } from 'src/types/type';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
  providers : [TimelineService]
})
export class RepoComponent implements OnInit {
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
  date : string = ''
  isCopied : Boolean = false;
  copy = faCopy;

  constructor(private timelineService : TimelineService){}

  // triggered from html clone btn.
  copyToClipBoard(event : MouseEvent ,cloneUrl : string){
    event.stopPropagation()
    event.preventDefault()
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

  ngOnInit(): void {
    this.date = new Date(this.repo.created_at).toDateString()
  }

  
}