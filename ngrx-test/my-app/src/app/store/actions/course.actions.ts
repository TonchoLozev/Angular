import {Action} from "@ngrx/store";
import {Course} from "../../models/course.model";

export const ADD_COURSE = '[COURSE] Add';

export class AddCourse implements Action{
  readonly type: string = ADD_COURSE;

  constructor(public payload: Course){}
}

export type Actions = AddCourse;
