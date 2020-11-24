import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Login from "./Containers/Login";
import HomePage from "./Containers/HomePage";
import Register from './Containers/Register';
import ScanningPage from "./Containers/ScanningPage";
import FriendList from "./Containers/FriendList";
import ProfilePage from "./Containers/ProfilePage";
import ReviewPage from "./Containers/ReviewPage";

export enum AppScreens {
    Login = "Login",
    Register = "Register",
    HomePage = "HomePage",
    ScanningPage = "ScanningPage",
    FriendList = "FriendList",
    ProfilePage = "ProfilePage",
    ReviewPage = "ReviewPage"
  }
  
  export type AuthStackParamList =  {
    Login: undefined,
    Register: undefined,
    HomePage: undefined,
    ScanningPage: undefined,
    FriendList : undefined,
    ProfilePage : undefined,
    ReviewPage : undefined
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
                <Stack.Screen name="ProfilePage" component={ProfilePage}/>
                <Stack.Screen name="ReviewPage" component={ReviewPage}/>
            </Stack.Navigator>
      );
  }

  export default AuthFlowNavigator;