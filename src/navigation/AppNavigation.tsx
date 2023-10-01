import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  Games,
  Balance,
  Chat,
  ProfilTalent,
  Following,
  Follower,
  Withdraw,
  Deposit,
  Live,
} from '../screens';

import Tabs from './Tabs';
import {Button, Image, Text, View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HostPage from '../screens/Live/Host/HostPage';
import AudiencePage from '../screens/Live/Audient/AudientPage';
import TopTabs from './TopTabsFollower';
import {Context} from '../context/authContext';
import COLORS from '../components/Colors';
import Icons from '../components/Icons';
import LayoutIcon from '../components/LayoutIcon';
import TopTabsDeposit from './TopTabsDeposit';
import TopTabsWithdraw from './TopTabsWithdraw';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const {data} = useContext(Context);

  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
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
      <Stack.Screen
        name={'Following'}
        options={{
          headerTitle: data?.username,
          headerStyle: {
            elevation: 0,
          },
        }}
        component={TopTabs}
      />

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
      <Stack.Screen
        name="ProfilTalent"
        component={ProfilTalent}
        options={{
          headerTitle: '',
          headerStyle: {
            elevation: 0,
            backgroundColor: COLORS.primary,
          },
          headerRight: () => {
            return (
              <LayoutIcon bg="transparent">
                <Icons name={'menu'} size={30} color={'black'} />
              </LayoutIcon>
            );
          },
        }}
      />
      <Stack.Screen name='Withdraw' component={TopTabsWithdraw}/>
      <Stack.Screen name='Deposit' component={TopTabsDeposit}/>
    </Stack.Navigator>
  );
};

export default AppNavigation;
