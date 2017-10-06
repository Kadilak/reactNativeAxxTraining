import React from 'react'
import {
  AppRegistry
} from 'react-native'

import { Provider } from 'react-redux'
import configureStore from './app/configureStore'
import App from './app/app'

const store = configureStore()

const todolist = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
AppRegistry.registerComponent('todolist', () => todolist);
