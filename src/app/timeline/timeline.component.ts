import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environment/environment';
import { TimelineService } from '../services/timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  constructor(private timelineService : TimelineService){}

  async fetchTimeline(timelineLink : string) : Promise<void>{

    try {
      const timeline = await fetch(timelineLink , {headers : {
        "Authorization" : `Bearer ${environment.token}`
      }})
      const timeline_res = timeline.json()
      console.log(timeline_res)
    } catch (error) {
      console.log(error)
    }
  }

  ngOnInit(): void {
    const timelineLink =  this.timelineService.getTimelineLink()
    this.fetchTimeline(timelineLink)
  }

}
