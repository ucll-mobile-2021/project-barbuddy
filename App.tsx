import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthFlowNavigator from './AuthFlowScreen';

export default function App() {
  return (
    <NavigationContainer>
      <AuthFlowNavigator/>
    </NavigationContainer>
  );
}

