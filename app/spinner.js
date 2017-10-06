import React from 'react';
import{
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

class Spinner extends React.Component {
  render() {
    return (
      <View style={styles.view}>
          <Text style={[styles.blue, styles.big]}>Welcome to TaskList</Text>
          <Image source={require('./assets/loading.gif')} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  view: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  blue: {
    color: 'darkblue'
  },
  big: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export default Spinner;