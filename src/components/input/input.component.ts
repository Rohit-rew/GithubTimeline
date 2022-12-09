import { Component, EventEmitter, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  faCoffee = faSearch;
  userName : string = ''
  @Output() userNameEvent = new EventEmitter<string>()

  searchEnter(event : KeyboardEvent , userName : string){
    if(event.key!="Enter") return;
    this.userNameEvent.emit(userName)
  }
  searchClick(userName : string){
    this.userNameEvent.emit(userName)
  }

}
