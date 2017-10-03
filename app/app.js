import React from 'react';
import { 
  StyleSheet, 
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import People from './people';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <People/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#e4e4e4',
    height: 55,
    borderRadius: 3,
    padding: 5,
    marginTop: 12,
  },
  button: {
    backgroundColor: '#ff9900',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
  },
  person: {
    marginTop: 12,
  },
});

export default App;
