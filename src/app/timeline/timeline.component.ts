import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment/environment';
import { TimelineService } from '../services/timeline.service';
import { commit } from 'src/types/type';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  providers : [TimelineService]
})
export class TimelineComponent implements OnInit {
  arrow = faArrowAltCircleDown;
  commitArray : commit[] = [];
  commitUrl:string = "";
  page : number = 1;
  constructor(private timelineService : TimelineService){}

  async fetchCommits(comitUrl : string) : Promise<void>{
    try {
      const commits = await fetch(comitUrl , {headers : {
        "Authorization" : `Bearer ${environment.token}`
      }})
      const commits_res = await commits.json();
      this.commitArray = commits_res
    } catch (error) {
      console.log(error)
    }
  }

  async fetchTimeline(timelineLink : string) : Promise<void>{
    try {
      const timeline = await fetch(timelineLink , {headers : {
        "Authorization" : `Bearer ${environment.token}`
      }})
      const timeline_res = await timeline.json()
      console.log(timeline_res);
      const commitUrl = (timeline_res.commits_url).replace("{/sha}" , "")
      this.commitUrl = commitUrl;
      this.fetchCommits(commitUrl)
    } catch (error) {
      console.log(error)
    }
  }

  async fetchMore(link : string){
      this.page++;
      const moreCommits = await fetch(link+`?page=${this.page}` , {headers : {
        "Authorization" : `Bearer ${environment.token}`
      }})
      const moreCommits_res = await moreCommits.json();
      this.commitArray = [...this.commitArray , ...moreCommits_res]
  }

  ngOnInit(): void {
    const timelineLink =  this.timelineService.getTimelineLink()
    this.fetchTimeline(timelineLink)
  }

}
