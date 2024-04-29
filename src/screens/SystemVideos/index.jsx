import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';

const SystemVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    openImagePicker();
  }, []); // Trigger on component mount

  const openImagePicker = () => {
    const options = {
      mediaType: 'video',
    };

    launchImageLibrary(options, response => {
      if (!response.didCancel && !response.error) {
        setSelectedVideo(response.assets[0].uri);
      }
    });
  };

  const handleContinue = () => {
    if (selectedVideo) {
      navigation.navigate('Editor', {videoUri: selectedVideo});
    }
  };

  return (
    <View style={styles.container}>
      {selectedVideo && (
        <View style={styles.videoContainer}>
          <Text>Selected Video:</Text>
          <Image source={{uri: selectedVideo}} style={styles.videoPreview} />
        </View>
      )}
      <Button
        title="Continue"
        onPress={handleContinue}
        disabled={!selectedVideo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  videoPreview: {
    width: 300,
    height: 200,
    marginTop: 10,
  },
});

export default SystemVideos;
