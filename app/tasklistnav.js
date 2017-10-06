import React from 'react';
import { 
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import TaskList from './tasklist';
import TaskDetails from './taskDetails';

export const TaskListNav = StackNavigator({
    Home: { screen: TaskList },
    TaskDetails: { screen: TaskList },
});

export default TaskListNav;