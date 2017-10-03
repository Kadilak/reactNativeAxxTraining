import { ADD_PERSON, DELETE_PERSON } from '../constants';

let nextPersonId = 4;

export function addPerson(person,maxId) {
  return {
    type: 'ADD_PERSON',
    person: {id: maxId,...person, status: false}
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
