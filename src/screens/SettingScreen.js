import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

const SettingScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Let’s start</Header>
  
     <Paragraph>Settings</Paragraph> 
  </Background>
);

export default memo(SettingScreen);
