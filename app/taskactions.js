import React from 'react';
import { 
  Text,
  View,
  Button,
  StyleSheet,
  Switch
} from 'react-native';

class TaskActions extends React.Component {
  
  render() {
   
    return (
      <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
        <Text style={styles.title}>TaskActions</Text>
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
 
export default TaskActions;