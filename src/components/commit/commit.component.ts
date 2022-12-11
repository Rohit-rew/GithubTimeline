import { Component, Input, OnInit } from '@angular/core';
import { commit } from 'src/app/timeline/timeline.component';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css'],
})
export class CommitComponent implements OnInit {
  @Input() commit: commit = {
    sha: '',
    node_id: '',
    url: '',
    commit: {
      message: '',
      author: {
        name: '',
        email: '',
        date: '',
      },
      committer: {
        name: '',
        email: '',
        date: '',
      },
    },
    committer: {
      avatar_url: '',
      login: '',
      url: '',
    },
    parents: [{ sha: '', url: '', html_url: '' }],
  };

  date : string = ''
  time : string = ''

  ngOnInit():void{
    this.date = new Date(this.commit.commit.committer.date).toUTCString()
  }
  
  
}
