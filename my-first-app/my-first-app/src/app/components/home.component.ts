import {Component} from '@angular/core';
import {Titles} from './titles';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = new Titles('First try angular', 'Don Viliyan');
  heroes = ['Gosho', 'Ivan', 'Pesho', 'Stoqn'];
  showList = false;
  buttonLabel = 'Show';

  displayList() {
    this.showList = !this.showList;
    this.buttonLabel = this.showList ? 'Show' : 'Hide';
  }
}
