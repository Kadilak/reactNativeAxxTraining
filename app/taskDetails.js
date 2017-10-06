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
    return (
      <View>
          <Text>TaskDetails</Text>
      </View>
    )
  }
}

export default TaskDetails;