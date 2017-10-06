import React from 'react';
import { 
  Text,
  View,
  StyleSheet
} from 'react-native';

class TaskDetails extends React.Component {
  static navigationOptions = {
    title: 'TaskDetails Welcome',
  };
  render() {
    let {id,name,status} = this.props.navigation.state.params.task;
    return (
      <View>
          <Text style={styles.title}>{id}</Text>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.title}>{status ? "YES" : "NOOO!!"}</Text>
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
  }
});
export default TaskDetails;