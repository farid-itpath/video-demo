import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
const RecordVideo = () => {
  const device = useCameraDevice('back');
  const {hasPermission} = useCameraPermission();

  useEffect(() => {
    async function getPermission() {
      const newCameraPermission = await Camera.requestCameraPermission();
      console.log('newCameraPermission: ', newCameraPermission);
    }
    getPermission();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </SafeAreaView>
  );
};

export default RecordVideo;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
