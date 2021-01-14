import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

const Test = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Let’s start</Header>
  
     <Paragraph>Test</Paragraph> 
  </Background>
);

export default memo(Test);
