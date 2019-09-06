import React from 'react'
import {View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText'

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over!</BodyText>
      <View style={styles.imageContainer}>
        <Image
          // source={require('../assets/success.png')}  //Local Image
          source={{uri: 'https://image.shutterstock.com/image-photo/hiker-backpacks-reaches-summit-mountain-260nw-1233415504.jpg'}}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button
        title="New Game"
        onPress={props.onRestart}
      />
    </View>
  )
}

export default GameOverScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  }
})