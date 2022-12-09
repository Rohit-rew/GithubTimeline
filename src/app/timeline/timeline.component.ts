import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment/environment';
import { TimelineService } from '../services/timeline.service';

type commit = {
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

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  providers : [TimelineService]
})
export class TimelineComponent implements OnInit {

  constructor(private timelineService : TimelineService){}
  commitArray : commit[] = []

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
      const commitUrl = (timeline_res.commits_url).replace("{/sha}" , "")
      this.fetchCommits(commitUrl)
    } catch (error) {
      console.log(error)
    }
  }

  ngOnInit(): void {
    const timelineLink =  this.timelineService.getTimelineLink()
    this.fetchTimeline(timelineLink)
  }

}
