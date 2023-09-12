import React,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './navigation/Stack';
import TabsNavigation from './navigation/Tabs';
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
