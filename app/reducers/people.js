// reducers/people.js
import { ADD_PERSON, DELETE_PERSON, CHANGE_STATUS } from '../constants';

const initialState = { people: []}

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PERSON:
      return {
        people: [...state.people, action.person],
      };
    case DELETE_PERSON:
      return {
        people: state.people.filter(p = (p => p.id !== action.person.id)),
      };
    case CHANGE_STATUS:
      return {
        people: state.people.map(person => (person.id == action.index) ? {...person, status: !person.status } : person)
      }
    default:
      return state;
  }
}
