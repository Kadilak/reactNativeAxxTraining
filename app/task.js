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
      <View style={styles.wrapper}>
        <View style={{flexDirection: 'row',}}>
        <Switch disabled={true}
          style={{marginBottom: 10, marginLeft:0, paddingLeft:0,}}
          value={task.status}
        />
        <Text style={styles.text}>{task.name}{task.status ? " - !!!DONE!!!":""}</Text>
        </View>
        <Button style={styles.title} title="Details" onPress={() => navigate('TaskDetails', { task })}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
  wrapper: {
    //display: 'block',
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:5,
  },
  title: {
    fontSize: 22,
    textAlign: 'left',
  },
  text: {
    fontSize: 22,
    justifyContent: 'flex-start',
  },
  button: {
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