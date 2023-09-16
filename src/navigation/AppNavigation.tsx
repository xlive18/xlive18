import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Games, Balance, Chat, ProfilTalent} from '../screens';

import Tabs from './Tabs';
import {Button, Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HostPage from '../screens/Live/HostPage';
import AudiencePage from '../screens/Live/AudientPage';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="ProfilTalent" component={ProfilTalent} />
      </Stack.Group>
      <Stack.Screen
        name="Balance"
        component={Balance}
        options={{
          headerStyle: {backgroundColor: '#ECAF13'},
          headerRight: () => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 10,
                  gap: 20,
                }}>
                <Image source={require('../../assets/icons/support.png')} />
                <Icon name="ellipsis-v" size={20} color={'black'} />
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
      <Stack.Screen name="Chat" component={Chat} />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="HostPage"
        component={HostPage}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="AudiencePage"
        component={AudiencePage}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
