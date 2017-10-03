import React from 'react';
import { connect } from 'react-redux';
import { addPerson, deletePerson, changeStatus } from './actions/actions';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  FlatList,
  Switch
} from 'react-native';

class People extends React.Component {
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
  deletePerson = (person) => {
    this.props.dispatchdeletePerson(person)
  }
  changeStatus = (index) => {
    this.props.dispatchchangeStatus(index)
}
  updateInput = (inputValue) => {
    this.setState({ inputValue })
  }

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>People</Text>
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
           // console.log(this.props.people);
        return (
            <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
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
            </View>
        )
        }}
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

function mapStateToProps (state) {
  return {
    people: state.people.people
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchAddPerson: (person,maxId) => dispatch(addPerson(person,maxId)),
    dispatchdeletePerson: (person) => dispatch(deletePerson(person)),
    dispatchchangeStatus: (index) => dispatch(changeStatus(index))
}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(People)
