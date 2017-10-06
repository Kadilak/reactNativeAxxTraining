import React from 'react';
import { connect } from 'react-redux';
import { addPerson} from './actions/actions';
import Task from './task';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  FlatList,
  Switch
} from 'react-native';

class TaskList extends React.Component {
  static navigationOptions = {
    title: 'TaskList Welcome',
  };
  state = {
    inputValue: '',
  }
  addPerson = () => {
    if (this.state.inputValue === '') return;
    maxId = this.props.people.length != 0 ? (this.props.people[this.props.people.length-1].id + 1) : 1;
    this.props.dispatchAddPerson(
      { name: this.state.inputValue },
      maxId
    );
    this.setState({ inputValue: '' });
  }
  updateInput = (inputValue) => {
    this.setState({ inputValue })
  }

  _keyExtractor = (item, index) => item.id;

  render() {
   
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TaskList</Text>
        <Text style={styles.title}>Are Awesome</Text>
        <TextInput
          onChangeText={text => this.updateInput(text)}
          style={styles.input}
          value={this.state.inputValue}
          placeholder="Name"
        />
        <TouchableHighlight
          underlayColor="#ffa012"
          style={styles.button}
          onPress={this.addPerson}
        >
          <Text style={styles.buttonText}>Add Person</Text>
        </TouchableHighlight>
        <FlatList
        inverted={true}
        data={this.props.people}
        keyExtractor={item => item.id}
        renderItem={({item}) =>{
        return (
            <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
                <Task navigation={this.props.navigation} task={item}/>
            </View>
        )
        }
        }
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
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#e4e4e4',
    height: 55,
    borderRadius: 3,
    padding: 5,
    marginTop: 12,
  },
  button: {
    backgroundColor: '#ff9900',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
  },
  person: {
    marginTop: 12,
  },
});

function mapStateToProps (state,props) {
  return {
    ...props,
    people: state.people.people
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchAddPerson: (person,maxId) => dispatch(addPerson(person,maxId))
}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList)