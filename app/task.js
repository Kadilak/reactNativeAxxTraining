import React from 'react';
import { 
  Text,
  View,
  Button
} from 'react-native';

class Task extends React.Component {
  static navigationOptions = {
    title: 'TaskDetails Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    let { task } = this.props;
    return (
      <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
        <Text>{task.name}</Text>
        <Button title="Details" onPress={() => navigate('TaskDetails', { task })}/>
        <Button title="X"/>
      </View>
    )
  }
}

  
  /* <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
<Text 
style={styles.title}
onPress={() => this.deletePerson(item)}>
{item.name}
</Text>
<Switch
onValueChange={(value) => {console.log(item.id,item);this.changeStatus(item.id)}}
style={{marginBottom: 10}}
value={item.status}
/>
</View> */
export default Task;