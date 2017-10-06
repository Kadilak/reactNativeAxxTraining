import React from 'react';
import{
    ActivityIndicator,
    Text,
    View
} from 'react-native';

class Spinner extends React.Component {
  render() {
    return (
      <View>
          <ActivityIndicator/>
      </View>
    )
  }
}

export default Spinner;