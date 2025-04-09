import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// ייבוא מסכים
import HomeScreen from './src/screens/HomeScreen';
import PlanMeetup from './src/screens/PlanMeetup';
import ChooseLocation from './src/screens/ChooseLocation';
import ReviewConfirm from './src/screens/ReviewConfirm';
import GroupsScreen from './src/screens/GroupsScreen';
import GroupDetails from './src/screens/GroupDetails';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PlanMeetup" component={PlanMeetup} />
          <Stack.Screen name="ChooseLocation" component={ChooseLocation} />
          <Stack.Screen name="ReviewConfirm" component={ReviewConfirm} />
          <Stack.Screen name="Groups" component={GroupsScreen} />
          <Stack.Screen name="GroupDetails" component={GroupDetails} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
