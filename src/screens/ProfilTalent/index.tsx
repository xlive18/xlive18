import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  SafeAreaView,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MenuProfil from '../../components/MenuProfil';

import Icons from 'react-native-vector-icons/Ionicons';

const ProfilTalent = () => {
  return (
    <ScrollView style={{marginBottom: 50}}>
      <View
        style={{
          backgroundColor: '#ECAF13',
          padding: 10,
          paddingRight: 20,
          paddingTop: 20,
        }}>
        <Icon
          name={'ellipsis-v'}
          size={30}
          color={'black'}
          style={{textAlign: 'right'}}
        />

        <View style={{alignItems: 'center', marginTop: 20}}>
          <View>
            <View
              style={{
                width: 120,
                height: 120,
                borderRadius: 120,
                backgroundColor: '#D9D9D9',
              }}
            />
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                position:'absolute',
                right:0,
                bottom:0
              }}>
              <Icons name="person-add" size={20} color={'black'} />
            </TouchableOpacity>
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
              Name User
            </Text>
            <Icon name="mars" size={20} color={'black'} />
          </View>
          <Text style={{color: 'black', fontWeight: '500', marginTop: 10}}>
            ID: 12345
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
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              999
            </Text>
            <Text
              style={{
                borderTopWidth: 1,
                color: 'black',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              followers
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              999
            </Text>
            <Text
              style={{
                borderTopWidth: 1,
                color: 'black',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              followers
            </Text>
          </View>
        </View>
      </View>
      <View style={{padding: 10}}>
        <MenuProfil
          img={require('../../../assets/icons/setting.png')}
          label="Setting"
        />

        <MenuProfil
          img={require('../../../assets/icons/walet.png')}
          label="Balance"
        />
      </View>
    </ScrollView>
  );
};

export default ProfilTalent;

const styles = StyleSheet.create({});
