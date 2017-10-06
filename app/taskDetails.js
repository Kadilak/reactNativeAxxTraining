import React from 'react';
import { 
  Text,
  View
} from 'react-native';

class TaskDetails extends React.Component {
  static navigationOptions = {
    title: 'TaskDetails Welcome',
  };
  render() {
    let {id,name,status} = this.props.navigation.state.task;
    return (
      <View>
          <Text>{id}</Text>
          <Text>{name}</Text>
          <Text>{status}</Text>
      </View>
    )
  }
}

export default TaskDetails;