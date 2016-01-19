/**
 * Created by Yuriy on 1/18/2016.
 */
import React from 'react-native'
import Screen from './components/screen'

var {
  StyleSheet,
  View,
  } = React;

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      screenInfo: {
        bpm: 120,
        downbeat: "4 / 4"
      }
    }
  }
  render(){
    return (
      <View style={styles.mainScreen}>
        <Screen data={this.state.screenInfo} />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

export default App;