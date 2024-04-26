import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  console.log('home screen');
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RecordVideo')}>
        <Text style={styles.buttonText}>Record Video</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SystemVideos')}>
        <Text style={styles.buttonText}>Select Video from System</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009688',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '80%',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#009688',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
