import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const StartGameScreen = props => {
  return(
    <View style={StyleSheet.screen}>
      <Text>This is the start game screen</Text>
    </View>
  )
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',

  }
});

export default StartGameScreen;