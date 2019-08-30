import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const StartGameScreen = props => {
  return(
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select A Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button 
            title="Reset"
            onPress={()=>{}}
          />
          <Button
            title ="Confirm"
            onPress={()=>{}}
          />
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10,

  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,

// Shadow only works on iOS

    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowRadius: 6,

// Elevation only works on Android

    elevation: 10
  }
});

export default StartGameScreen;