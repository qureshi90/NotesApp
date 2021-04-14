import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';
import Notes from '../screens/notesScreen';
import Note from '../screens/singleNote';
import NewNote from '../screens/newNote';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigator = () => {
  LogBox.ignoreLogs([
    "Can't perform a React state update on an unmounted component",
    'Possible Unhandled Promise Rejection',
  ]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="notes" component={Notes} />
        <Stack.Screen name="note" component={Note} />
        <Stack.Screen name="new-note" component={NewNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
