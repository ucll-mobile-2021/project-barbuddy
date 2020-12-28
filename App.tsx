import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect} from 'react';
import AuthFlowNavigator from './AuthFlowScreen';
import { initialise } from './Database';
import { LogBox } from 'react-native';
import { Root } from 'native-base';

LogBox.ignoreAllLogs();

export default function App() {
  const [isLoaded, setLoaded] = React.useState(false);
  useEffect(() => {
    initialise().then(() => {
      setLoaded(true);
    })
  })
  if(isLoaded)
  {
    return (
      <Root>
        <NavigationContainer>
          <AuthFlowNavigator/>
        </NavigationContainer>
      </Root>
    );
  }
  else return null //Maybe a loading screen?
}

