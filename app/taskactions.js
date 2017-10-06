import React from 'react';
import { 
  Text,
  View,
  Button,
  StyleSheet,
  Switch
} from 'react-native';
import { connect } from 'react-redux';
import { deletePerson, changeStatus } from './actions/actions';


class TaskActions extends React.Component {
  deletePerson = (person) => {
    this.props.dispatchdeletePerson(person)
    this.props.navigation.navigate('Home');
  }
  changeStatus = (index) => {
    this.props.dispatchchangeStatus(index)
  }
  render() {
    let {task} = this.props;
    return (
      <View>
        <Switch
                onValueChange={(value) => {this.changeStatus(task.id); return !value; }}
                style={{marginBottom: 10}}
                value={task.status}
            />
        <Button title="Remove" onPress={()=>this.deletePerson(task)}/>
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

function mapStateToProps (state,props) {
  return {
    ...props,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchdeletePerson: (person) => dispatch(deletePerson(person)),
    dispatchchangeStatus: (index) => dispatch(changeStatus(index))
}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskActions)