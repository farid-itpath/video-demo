import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import {IMAGES} from '../../assets';
import {height, width} from '../../utills/helper';

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
      <View style={styles.container}>
        <Text style={styles.text}>Take a Video</Text>
        <Camera style={styles.camera} device={device} isActive={true} />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <Image
              source={IMAGES.close}
              style={{
                height: height * 0.08,
                width: height * 0.08,
                resizeMode: 'contain',
                tintColor: 'white',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={IMAGES.camera}
              style={{
                height: height * 0.08,
                width: height * 0.08,
                resizeMode: 'contain',
                tintColor: 'white',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image
              source={IMAGES.gallery}
              style={{
                height: height * 0.08,
                width: height * 0.08,
                resizeMode: 'contain',
                tintColor: 'white',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: height * 0.025,
    color: 'white',
    marginBottom: height * 0.02,
  },
  camera: {
    width: '100%',
    height: height * 0.6,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginTop: height * 0.02,
    width: width * 0.98,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecordVideo;
