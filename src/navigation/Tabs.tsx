import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Chat, Games, Home, Live, Profil} from '../screens';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Search from '../components/Search';

const Tabs = createBottomTabNavigator();

const LiveButton = ({onPress}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#00F0FF',
        width: 70,
        height: 70,
        borderRadius: 70,
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
      }}>
      <Image
        source={require('../../assets/icons/camera.png')}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const TabsNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          right: 20,
          left: 20,
          borderRadius: 10,
          backgroundColor: '#ECAF13',
        },
      }}>
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: focused => {
            return <Image source={require('../../assets/icons/Home.png')} />;
          },
        }}
        name="Beranda"
        component={Home}
      />
      <Tabs.Screen
        options={{
          headerStyle:{backgroundColor:'#ECAF13'},
          headerLeft:()=>{
            return(
              <View style={{marginLeft:10}}>
                <View style={{width:45,height:45,backgroundColor:'gray',borderRadius:100}}/>
              </View>
            )
          },
          headerRight:()=>{
            return(
              <Search/>
            )
          },
          tabBarIcon: focused => {
            return <Image source={require('../../assets/icons/chat.png')} />;
          },
        }}
        name="Chat"
        component={Chat}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarButton: props => {
            return <LiveButton {...props} />;
          },
        }}
        name="Live"
        component={Live}
      />
      <Tabs.Screen
        options={{
          headerLeft: () => {
            return (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../assets/icons/game-console.png')}
                  style={{top: 5}}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black',
                    right: -10,
                  }}>
                  All
                </Text>
                <View
                  style={{
                    width: 60,
                    height: 7,
                    borderRadius: 40,
                    backgroundColor: '#ECAF13',
                    position: 'absolute',
                    right:-80,
                    bottom:0
                  }}
                />
              </View>
            );
          },
          headerRight: () => {
            return (
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <Image source={require('../../assets/icons/notif.png')} />
                <Image source={require('../../assets/icons/top.png')} />
              </View>
            );
          },
          tabBarIcon: focused => {
            return <Image source={require('../../assets/icons/game.png')} />;
          },
        }}
        name="Games"
        component={Games}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: focused => {
            return <Image source={require('../../assets/icons/profil.png')} />;
          },
        }}
        name="Profil"
        component={Profil}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigation;

const styles = StyleSheet.create({});
