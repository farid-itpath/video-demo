import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StackNavigation from './src/navigations/StackNavigation';

const App = () => {
  return <StackNavigation />;
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
