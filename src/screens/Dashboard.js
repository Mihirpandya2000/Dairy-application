import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import {View,Text} from 'react-native';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from "../Navigation/DrawerContent";
import BottomTab from "../Navigation/BottomTab";

const Drawer = createDrawerNavigator();



const DashboardContent = ({ navigation }) => (
 
  <Background>
  
    <Logo />
    <Header>Let’s start</Header>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
 
  </Background>
  
);
const Dashboard = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Dashboard" component={DashboardContent} />
    </Drawer.Navigator>


  );
};

export default memo(Dashboard);
