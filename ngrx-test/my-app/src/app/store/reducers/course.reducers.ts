import {Course} from "../../models/course.model";
import * as CourseActions from '../actions/course.actions';

const initialState: Course = {
  name: 'Angular Fundamentals July 2018',
  url: 'https://softuni.bg/trainings/2037/angular-fundamentals-july-2018'
};

function addCourse(state: Course[], course) {
  return [...state, course];
}

export function coursesReducer(
  state: Course[] = [initialState],
  action: CourseActions.Actions
) {
  switch (action.type) {
    case CourseActions.ADD_COURSE:
      return addCourse(state, action.payload);
    default:
      return state;
  }
}
