import { Component, Input } from '@angular/core';
import { commit } from 'src/app/timeline/timeline.component';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css'],
})
export class CommitComponent {
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

  
}
