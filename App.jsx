import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import PermissionsScreen from './src/screens/PermissionScreen';
import NoCameraDeviceErrorScreen from './src/screens/NoCameraDeviceErrorScreen';

const App = () => {
  const device = useCameraDevice('back');
  const {hasPermission} = useCameraPermission();

  if (!hasPermission) return <PermissionsScreen />;
  if (device == null) return <NoCameraDeviceErrorScreen />;
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
