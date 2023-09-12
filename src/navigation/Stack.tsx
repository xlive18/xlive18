import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  Login,
  SignUp,
  MenuLogin,
  Profil,
  Live,
  Games,
  Balance,
  Chat,
  ProfilTalent,
} from '../screens';

import Tabs from './Tabs';
import {Button, Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Search from '../components/Search';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="MenuLogin" component={MenuLogin} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ProfilTalent" component={ProfilTalent} />
      </Stack.Group>
      <Stack.Screen
        name="Balance"
        component={Balance}
        options={{
          headerStyle:{backgroundColor:'#ECAF13'},
          headerRight: () => {
            return (
              <View style={{
                flexDirection:'row',
                alignItems:'center',
                marginRight:10,
                gap:20
              }}>
                <Image source={require('../../assets/icons/support.png')} />
                <Icon name="ellipsis-v" size={20} color={'black'}/>
              </View>
            );
          },
        }}
      />
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={Tabs}
      />
      <Stack.Screen name="Games" component={Games} />
      <Stack.Screen name="Chat" component={Chat}/>
    </Stack.Navigator>
  );
};

export default StackNavigation;
