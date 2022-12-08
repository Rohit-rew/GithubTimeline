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

  search(userName : string){
    this.userNameEvent.emit(userName)
  }

}
