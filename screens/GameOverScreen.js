import React from 'react'
import {View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText'
import Colors from '../constants/colors'

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game is Over!</BodyText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          // source={require('../assets/success.png')}  //Local Image
          source={{uri: 'https://image.shutterstock.com/image-photo/hiker-backpacks-reaches-summit-mountain-260nw-1233415504.jpg'}}
          style={styles.image}
          resizeMode='cover'
        />
      </View>
      <BodyText>Your phone neeeded <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number: <Text style={styles.highlight}>{props.userNumber}</Text>
      </BodyText>
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
  },
  highlight: {
    color: Colors.primary
  }
})