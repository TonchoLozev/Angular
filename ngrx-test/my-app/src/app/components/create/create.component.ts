import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  courseName: string;
  courseUrl: string;

  constructor() {
  }

  ngOnInit() {
  }

  addCourse(){
    console.log(this.courseName, this.courseUrl);
  }
}
