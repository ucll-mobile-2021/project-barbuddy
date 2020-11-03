import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from './Containers/Login';
import HomePage, { HomeScreenParams } from "./Containers/HomePage";
import Register from './Containers/Register';
import ScanningPage from "./Containers/ScanningPage";
import FriendList from "./Containers/FriendList";

export enum AppScreens {
    Login = "Login",
    Register = "Register",
    HomePage = "HomePage",
    ScanningPage = "ScanningPage",
    FriendList = "FriendList"
  }
  
  export type AuthStackParamList =  {
    Login: undefined,
    Register: undefined,
    HomePage: HomeScreenParams,
    ScanningPage: undefined,
    FriendList : undefined
  }

  const Stack = createStackNavigator<AuthStackParamList>();

  const AuthFlowNavigator: React.FunctionComponent = () => {
      return (
            <Stack.Navigator headerMode="none" initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="HomePage" component={HomePage}/>
                <Stack.Screen name="ScanningPage" component={ScanningPage}/>
                <Stack.Screen name="FriendList" component={FriendList}/>
            </Stack.Navigator>
      );
  }

  export default AuthFlowNavigator;