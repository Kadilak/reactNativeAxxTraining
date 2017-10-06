import React from 'react';
import { 
  StyleSheet, 
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import TaskList from './tasklist';
import Spinner from './spinner'
//import People from './people';
import { StackNavigator } from 'react-navigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loadingTasks: true};
  }

  componentWillMount(){
    setTimeout(() => {
        this.setState({loadingTasks: false})
        console.log('Timeout ended after 3sec');      
      }, 3000
    );
  }

  renderMainApp(){
    if(!this.state.loadingTasks){
      return (<TaskList/>);
    } else {
      return (<Spinner/>);
    }
  }
  render() {
    debugger;
    return (
      <View>
        {
          this.renderMainApp()
        }
      </View>
    )
  }
}



export default App;