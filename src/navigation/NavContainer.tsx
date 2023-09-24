import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import {Context} from '../context/authContext';
import AuthNavigation from './AuthNavigation';
import ModalLive from '../components/ModalLive';

const NavContainer = () => {
  const {isLogin,visibleModalLive,setVisibleModalLive}:any = useContext(Context);
  
  return (
    <NavigationContainer>
      <ModalLive visible={visibleModalLive} setVisible={setVisibleModalLive}/>
      {isLogin === false ? <AuthNavigation /> : <AppNavigation />}
    </NavigationContainer>
  );
};

export default NavContainer;
