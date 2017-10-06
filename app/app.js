import React from 'react';
import { 
  StyleSheet, 
  Text,
  View
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import TaskListNav from './tasklistnav';
import Spinner from './spinner';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loadingTasks: true};
  }

  componentWillMount(){
    setTimeout(() => {
        this.setState({loadingTasks: false})
        console.log('Timeout ended after 3sec');      
      }, 200
    );
  }

  renderMainApp(){
    if(!this.state.loadingTasks){
      return (<TaskListNav/>)      
    } else {
      return (<Spinner/>);
    }
  }
  render() {
    return this.renderMainApp()
  }
}



export default App;