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
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MenuProfil from '../../components/MenuProfil';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Profil = () => {
  const [image, setImage] = useState('');
console.log(image);


  const imagePicker = async () => {
    let options: any = {
      storageOptions: {
        path: 'image',
      },
    };
    await launchImageLibrary(options, (res: any) => {
      setImage(res.assets[0].uri);
      console.log(res.assets[0].uri);
    });
  };
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
            <View>
              {image == '' ? (
                <View
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 120,
                    backgroundColor: '#D9D9D9',
                  }}
                />
              ) : (
                <Image source={{uri: image}} width={120} height={120} style={{borderRadius:120}}/>
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

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity style={{alignItems: 'center', marginTop: 20}}>
            <View
              style={{
                backgroundColor: '#ECAF13',
                width: 70,
                height: 70,
                borderRadius: 70,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../assets/icons/depo.png')}
                resizeMode="contain"
              />
            </View>
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
              Deposit
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{alignItems: 'center', marginTop: 20, right: -10}}>
            <View
              style={{
                backgroundColor: '#ECAF13',
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
                backgroundColor: '#ECAF13',
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
      </View>
    </ScrollView>
  );
};

export default Profil;

const styles = StyleSheet.create({});
