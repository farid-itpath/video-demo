import React from 'react';
import {useEffect, useState} from 'react';
import SplashScreen from '../screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './homeNavigator';

const StackNavigation = () => {
  const [isSplashScreen, setSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
  }, []);

  if (isSplashScreen) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};
export default StackNavigation;
