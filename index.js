import React from "react"
import { Provider } from 'react-native-paper';
import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import { theme } from './src/core/theme';
import { NavigationContainer } from '@react-navigation/native';



export default function Main() {
    return (
      <NavigationContainer>
      <Provider theme={theme}>
        <App />
      </Provider>
      </NavigationContainer>
      
      
    );
  }

AppRegistry.registerComponent(appName, () => Main);
