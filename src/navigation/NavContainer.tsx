import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import {Context} from '../context/authContext';
import AuthNavigation from './AuthNavigation';

const NavContainer = () => {
  const {isLogin}:any = useContext(Context);
  
  return (
    <NavigationContainer>
      {isLogin === false ? <AuthNavigation /> : <AppNavigation />}
    </NavigationContainer>
  );
};

export default NavContainer;
