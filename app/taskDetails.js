import React from 'react';
import { 
  Text,
  View,
  StyleSheet
} from 'react-native';
import TaskActions from './taskactions'

class TaskDetails extends React.Component {
  static navigationOptions = {
    title: 'TaskDetails Welcome',
  };
  render() {
    let {task} = this.props.navigation.state.params;
    let {id,name,status} = task;
    return (
      <View>
          <Text style={styles.title}>{id}</Text>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.title}>{status ? "YES" : "NOOO!!"}</Text>
          <TaskActions task={task} navigation={this.props.navigation}/>
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