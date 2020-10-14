import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Login from './Containers/Login';
import Register from './Containers/Register';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
          </Stack.Navigator>
    </NavigationContainer>
  );
}

