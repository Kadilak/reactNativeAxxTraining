import React from 'react';
import { 
  Text,
  View
} from 'react-native';

class TaskList extends React.Component {
  static navigationOptions = {
    title: 'TaskList Welcome',
  };
  render() {
    return (
      <View>
          <Text>TaskList</Text>
      </View>
    )
  }
}

export default TaskList;