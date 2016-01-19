/**
 * Created by Yuriy on 1/19/2016.
 */
import React from 'react-native'

var { Text, StyleSheet } = React;

export default (props)=> {
  var show = props.screenInfo;
  return (
      <Text style={styles.text}>
        { show.bpm + " : " + show.downbeat }
      </Text>
    )
}

var styles = StyleSheet.create({
  text: {
    fontSize: 34,
    textAlign: 'center',
    margin: 10
  }
});