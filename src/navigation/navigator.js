import 'react-native-gesture-handler';
import React from 'react';
import Notes from '../screens/notesScreen';
import Note from '../screens/singleNote';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="notes" component={Notes} />
        <Stack.Screen name="note" component={Note} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
