import React from 'react';
import { 
  StyleSheet, 
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import TaskList from './tasklist';

class App extends React.Component {
  render() {
    return (
      <View>
          <TaskList/>
      </View>
    )
  }
}

export default App;