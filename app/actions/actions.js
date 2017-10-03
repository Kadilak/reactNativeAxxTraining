import { ADD_PERSON, DELETE_PERSON } from '../constants';

let nextPersonId = 4;

export function addPerson(person) {
  return {
    type: 'ADD_PERSON',
    person: {id: nextPersonId++,...person, status: false}
  };
}

export function deletePerson(person) {
  return {
    type: 'DELETE_PERSON',
    person: {...person},
  };
}

export function changeStatus(index) {
  return {
    type: 'CHANGE_STATUS',
    index,
  };
}
