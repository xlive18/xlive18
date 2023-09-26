import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Image, TouchableOpacity, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Chat, Games, Home, Live, Profil} from '../screens';
import Search from '../components/Search';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Context} from '../context/authContext';
import Icons from '../components/Icons';
import COLORS from '../components/Colors';

const Tabs = createBottomTabNavigator();

const LiveButton = ({onPress}: any) => {
  const [data, setData]: any = useState(null);
  const {setVisibleModalLive} = useContext(Context);

  const navigation: any = useNavigation();

  const getDataUser = async () => {
    const getData = await AsyncStorage.getItem('user_');
    setData(JSON.parse(getData));
  };
  useEffect(() => {
    getDataUser();
  }, []);
  console.log(data);

  const onPressLive = () => {
    navigation.navigate('Live');
    if (data?.isHost == true) {
      setVisibleModalLive(true);
    } else {
      alert('Hanya Host Yang bisa Live!');
    }
  };

  return (
    <TouchableOpacity
      onPress={onPressLive}
      style={{
        backgroundColor: COLORS.primary,
        width: 65,
        height: 65,
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
      <Icons name="camera" />
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
          backgroundColor: 'white',
        },
      }}>
      <Tabs.Screen
        options={{
          headerLeft: () => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 10,
                }}>
                <View
                  style={{
                    width: 50,
                    height: 7,
                    borderRadius: 40,
                    backgroundColor: '#ECAF13',
                    position: 'absolute',
                    right: -67,
                    bottom: -20,
                  }}
                />
              </View>
            );
          },
          headerRight: () => {
            return (
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <TouchableOpacity>
                  <Icons name="notifikasi" size={30} />
                </TouchableOpacity>
                <Image source={require('../../assets/icons/top.png')} />
              </View>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <Icons name="home" color={focused ? COLORS.primary : 'gray'} />
            );
          },
        }}
        name="Beranda"
        component={Home}
      />
      <Tabs.Screen
        options={{
          headerStyle: {backgroundColor: '#ECAF13'},
          headerLeft: () => {
            return (
              <View style={{marginLeft: 10}}>
                <View
                  style={{
                    width: 45,
                    height: 45,
                    backgroundColor: 'gray',
                    borderRadius: 100,
                  }}
                />
              </View>
            );
          },
          headerRight: () => {
            return (
              <View style={{marginRight: 10}}>
                <Search style={{width: 150}} />
              </View>
            );
          },
          tabBarIcon: ({focused}) => {
            return (
              <Icons name="chat" color={focused ? COLORS.primary : 'gray'} />
            );
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
          headerTitle: 'ALL GAMES',
          headerTitleStyle: {fontWeight: '800', fontSize: 17},
          headerLeft: () => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 10,
                }}>
                <Image
                  source={require('../../assets/icons/game-console.png')}
                  style={{top: 3}}
                />
                <View
                  style={{
                    width: 60,
                    height: 7,
                    borderRadius: 40,
                    backgroundColor: '#ECAF13',
                    position: 'absolute',
                    right: -75,
                    bottom: 0,
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
          tabBarIcon: ({focused}) => {
            return (
              <Icons name="game" color={focused ? COLORS.primary : 'gray'} />
            );
          },
        }}
        name="Games"
        component={Games}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <Icons color={focused ? COLORS.primary : 'gray'} name="profil" />
            );
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
