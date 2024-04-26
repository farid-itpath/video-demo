import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {IMAGES} from '../../assets';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={IMAGES.splashCar} style={styles.image} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff', // White
    fontSize: 26,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain', // Adjust image to fit container
  },
});

export default SplashScreen;
