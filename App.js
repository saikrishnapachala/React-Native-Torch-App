import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';

class App extends React.Component {
  TorchOn = () => {
    Torch.switchState(true);
  };
  TorchOff = () => {
    Torch.switchState(false);
  };

  render() {
    return (
      <View style={styles.Container}>
        <Text>Torch</Text>
        <TouchableOpacity style={styles.button} onPress={this.TorchOn}>
          <Text>ON</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.TorchOff}>
          <Text>OFF</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
