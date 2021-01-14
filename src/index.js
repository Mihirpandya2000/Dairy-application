//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
  SettingScreen,
  Test
} from './screens';
import RootNavigator from "./Navigation/DrawerContent";
const Router=()=>{
 return (
  
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: 'My app' }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        
      />
      <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
     
    />
    <Stack.Screen
      name="ForgotPasswordScreen"
      component={ForgotPasswordScreen}
    />
    <Stack.Screen
      name="Dashboard"
      component={Dashboard}
    />
    
    
    </Stack.Navigator>
    
  );
}

/*const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);*/

export default /*createAppContainer*/Router;