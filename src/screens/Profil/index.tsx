import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconV6 from 'react-native-vector-icons/FontAwesome6';
import MenuProfil from '../../components/MenuProfil';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Context} from '../../context/authContext';
import COLORS from '../../components/Colors';
import Icons from '../../components/Icons';

export type TabNavigatorParams = {
  Tab1: undefined;
  Tab2: undefined;
};

const Profil = () => {
  const [image, setImage] = useState('');
  const [data, setData] = useState({});
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);

  const {logout} = useContext(Context);
  const navigation = useNavigation();

  const getDataUser = async () => {
    const getData = await AsyncStorage.getItem('user_');
    setData(JSON.parse(getData));
  };
  useEffect(() => {
    getDataUser();
  }, []);

  const imagePicker = async () => {
    let options: any = {
      storageOptions: {
        path: 'image',
      },
    };
    await launchImageLibrary(options, (res: any) => {
      setImage(res.assets[0].uri);
    });
  };

  return (
    <ScrollView style={{marginBottom: 50}}>
      <View
        style={{
          backgroundColor: COLORS.primary,
          padding: 10,
          paddingRight: 20,
          paddingTop: 20,
        }}>
        <TouchableOpacity onPress={() => setIsVisibleMenu(true)}>
          <Icon
            name={'ellipsis-v'}
            size={25}
            color={'black'}
            style={{textAlign: 'right'}}
          />
        </TouchableOpacity>

        <View style={{alignItems: 'center', marginTop: 20}}>
          <View>
            <View>
              {image == '' ? (
                <View
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 120,
                    backgroundColor: '#D9D9D9',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icons name="person" size={60} color="gray" />
                </View>
              ) : (
                <Image
                  source={{uri: image}}
                  width={120}
                  height={120}
                  style={{borderRadius: 120}}
                />
              )}
              <TouchableOpacity
                onPress={() => imagePicker()}
                style={{
                  backgroundColor: 'white',
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 50,
                  position: 'absolute',
                  right: 0,
                  bottom: 0,
                }}>
                <Image
                  source={require('../../../assets/icons/editImage.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#FCF8F8',
              padding: 5,
              paddingLeft: 30,
              paddingRight: 30,
              borderRadius: 30,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              marginTop: 20,
            }}>
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 15}}>
              {data?.username}
            </Text>
            <Icon name="mars" size={20} color={'black'} />
          </View>
          <Text style={{color: 'black', fontWeight: '500', marginTop: 10}}>
            ID: {data?.id}
          </Text>
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Icon name="instagram-square" size={20} color={'black'} />
          <Icon name="facebook-square" size={20} color={'black'} />
          <Icon name="twitter-square" size={20} color={'black'} />
        </View>
      </View>

      <View style={{padding: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() =>
              navigation.navigate('Following', { screen: 'Pengikut' })
            }>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              {data?.follower?.length}
            </Text>
            <Text
              style={{
                borderTopWidth: 1,
                color: 'black',
                fontSize: 20,
              }}>
              Pengikut
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => navigation.navigate('Following', { screen: 'Diikuti' })}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              {data?.following?.length}
            </Text>
            <Text
              style={{
                borderTopWidth: 1,
                color: 'black',
                fontSize: 20,
              }}>
              Mengikuti
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity style={{alignItems: 'center', marginTop: 20}} onPress={()=>navigation.navigate("Deposit")}>
            <View
              style={{
                backgroundColor: COLORS.primary,
                width: 70,
                height: 70,
                borderRadius: 70,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <IconV6 name="circle-dollar-to-slot" size={30} color={'white'} />
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
              Deposit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{alignItems: 'center', marginTop: 20, right: -10}} onPress={()=>navigation.navigate('Withdraw')}>
            <View
              style={{
                backgroundColor: COLORS.primary,
                width: 70,
                height: 70,
                borderRadius: 70,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/icons/wd.png')}
                resizeMode="contain"
              />
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
              Withdraw
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{alignItems: 'center', marginTop: 20}}>
            <View
              style={{
                backgroundColor: COLORS.primary,
                width: 70,
                height: 70,
                borderRadius: 70,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/icons/tf.png')}
                resizeMode="contain"
              />
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
              Quota
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
              Convension
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{padding: 10}}>
        <MenuProfil
          img={require('../../../assets/icons/dolar.png')}
          isCount={true}
          label="Top Up"
        />
        <MenuProfil
          img={require('../../../assets/icons/walet.png')}
          label="Balance"
        />
        <MenuProfil
          img={require('../../../assets/icons/setting.png')}
          label="Setting"
        />
        <TouchableOpacity onPress={logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profil;

const styles = StyleSheet.create({});
