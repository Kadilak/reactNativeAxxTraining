import React from 'react';
import { 
  StyleSheet, 
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import TaskList from './tasklist';
import Spinner from './spinner'
//import People from './people';

class App extends React.Component {
  render() {
    return (
      <View>
          <TaskList/>
          <Spinner/>
      </View>
    )
  }
}

export default App;