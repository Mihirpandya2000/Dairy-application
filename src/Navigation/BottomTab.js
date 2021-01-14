import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme, Portal, FAB } from 'react-native-paper';

import { Dashboard } from '../screens/Dashboard';
import { SettingScreen } from '../screens/SettingScreen';
import { Test } from '../screens/Test';

const Tab = createMaterialBottomTabNavigator();

const BottomTab = () => {
  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Dashboard"
        backBehavior="initialRoute"
        shifting={true}
        sceneAnimationEnabled={false}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: 'home-account',
          }}
        />
        <Tab.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            tabBarIcon: 'bell-outline',
          }}
        />
        <Tab.Screen
          name="Test"
          component={Test}
          options={{
            tabBarIcon: 'message-text-outline',
          }}
        />
      </Tab.Navigator>
      
    </React.Fragment>
  );
};
export default BottomTab;