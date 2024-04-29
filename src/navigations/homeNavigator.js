import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RecordVideo from '../screens/RecordVideo';
import SystemVideos from '../screens/SystemVideos';
import EditorScreen from '../screens/EditorScreen';

const HomeNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RecordVideo" component={RecordVideo} />
      <Stack.Screen name="SystemVideos" component={SystemVideos} />
      <Stack.Screen name="Editor" component={EditorScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
