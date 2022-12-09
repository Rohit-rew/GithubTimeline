
let timelineLink:string = ""

export class TimelineService{

    setTimelineLink(timeLink : string){
        timelineLink = timeLink;
    }

    getTimelineLink():string{
        return timelineLink
    }

}