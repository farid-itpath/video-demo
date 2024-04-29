import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import Video from 'react-native-video';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const {height} = Dimensions.get('window');

const ShuttleScreen = () => (
  <View style={styles.tabContent}>
    <Text>Shuttle Screen</Text>
  </View>
);

const AngleScreen = () => (
  <View style={styles.tabContent}>
    <Text>Angle Screen</Text>
  </View>
);

const TrimScreen = () => (
  <View style={styles.tabContent}>
    <Text>Trim Screen</Text>
  </View>
);

const FilterScreen = () => (
  <View style={styles.tabContent}>
    <Text>Filter Screen</Text>
  </View>
);

const EditorScreen = ({route}) => {
  const {videoUri} = route.params;
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          source={{uri: videoUri}}
          style={styles.videoPreview}
          resizeMode="cover"
          repeat={true}
          controls={true}
          filterEnabled={true}
        />
      </View>
      <Tab.Navigator tabBarOptions={{style: styles.tabBar}}>
        <Tab.Screen name="Shuttle" component={ShuttleScreen} />
        <Tab.Screen name="Angle" component={AngleScreen} />
        <Tab.Screen name="Trim" component={TrimScreen} />
        <Tab.Screen name="Filter" component={FilterScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    height: height * 0.4,
  },
  videoPreview: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#fff',
    borderTopColor: 'transparent',
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EditorScreen;
