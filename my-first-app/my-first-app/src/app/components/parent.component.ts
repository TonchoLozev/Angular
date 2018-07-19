import {Component} from "@angular/core";

@Component({
  selector: 'parent',
  template: `
    <h1>Parent</h1>
    <child
      (onSendingDataToParent)="dataReceived($event )"
      [fromParent]="titleForChildElement"
    ></child>`
})

export class ParentComponent {
  titleForChildElement = 'My parent title';

  dataReceived(myData) {
    window.alert(myData)
  }
}
