import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Invoice from './Invoice';

const Balance = () => {
  const datas = [
    {
      id:1,
      saldo: '1.000.000',
      isWd: true,
      date: '10-5-2023',
    },
    {
      id:2,
      saldo: '500.000',
      isWd: false,
      date: '13-5-2023',
    },
    {
      id:3,
      saldo: '200.000',
      isWd: false,
      date: '16-5-2023',
    },
    {
      id:4,
      saldo: '2.000.000',
      isWd: true,
      date: '20-5-2023',
    },
  ];

  return (
    <View>
      <View
        style={{
          backgroundColor: '#ECAF13',
          paddingLeft: 30,
          paddingRight: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Rp.
          </Text>
          <Text
            style={{
              fontSize: 50,
              fontWeight: 'bold',
              color: 'black',
            }}>
            5.000.000
          </Text>

          <Icon
            name="chevron-down"
            size={40}
            color={'black'}
            style={{marginLeft: 10}}
          />
        </View>

        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 20,
            top: 50,
            alignItems: 'flex-start',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#ECAF13',
                borderRadius: 50,
                overflow: 'hidden',
                padding: 10,
              }}>
              <Image
                source={require('../../../assets/icons/depo.png')}
                width={80}
                height={80}
              />
            </View>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '600'}}>
              Deposite
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              right: -10,
            }}>
            <View
              style={{
                backgroundColor: '#ECAF13',
                borderRadius: 50,
                overflow: 'hidden',
                padding: 10,
              }}>
              <Image
                source={require('../../../assets/icons/wd.png')}
                width={80}
                height={80}
              />
            </View>
            <Text style={{color: 'black', fontSize: 15, fontWeight: '600'}}>
              Withdraw
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#ECAF13',
                borderRadius: 50,
                overflow: 'hidden',
                padding: 10,
              }}>
              <Image
                source={require('../../../assets/icons/tf.png')}
                width={80}
                height={80}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: 'black', fontSize: 15, fontWeight: '600'}}>
                Quota
              </Text>
              <Text style={{color: 'black', fontSize: 15, fontWeight: '600'}}>
                conversion
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{paddingTop: 100}}>
        {datas.map(el => {
          return <Invoice key={el.id} data={el}/>;
        })}
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({});
