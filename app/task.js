import React from 'react';
import { 
  Text,
  View,
  Button,
  StyleSheet,
  Switch
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
        <Text style={styles.title}>{task.name}{task.status ? " - !!!DONE!!!":""}</Text>
        <Button title="Details" onPress={() => navigate('TaskDetails', { task })}/>
        <Switch disabled={true}
          style={{marginBottom: 10}}
          value={task.status}
        />
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