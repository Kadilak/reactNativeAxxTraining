// configureStore.js

import {compose, applyMiddleware, createStore} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import rootReducer from './reducers'
import {AsyncStorage} from 'react-native';

function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

export default function configureStore() {
  let store = createStore(
    rootReducer,
    undefined,
    compose(
      applyMiddleware(logger),
      autoRehydrate()
    )
  )
  persistStore(store, {blacklist: ['navigationState'],storage: AsyncStorage});
  return store
}