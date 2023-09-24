import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Icons from '../../../components/Icons';
import COLORS from '../../../components/Colors';
import LayoutIcon from '../../../components/LayoutIcon';
import ButtonDm from '../../../components/ButtonDm';

const ModalPrivateLive = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate: any = useNavigation();
  return (
    <>
      {isVisible && (
        <SafeAreaProvider
          style={{
            height: '100%',
            width: '100%',
          }}>
          <View
            style={{
              height: 380,
              backgroundColor: 'rgba(0, 0, 0, 0.79)',
              width: '100%',
              bottom: 0,
              position: 'absolute',
              borderTopStartRadius: 35,
              borderTopEndRadius: 35,
            }}>
            <TouchableOpacity
              style={{position: 'absolute', right: 10, top: 10}}
              onPress={() => navigate.replace('Home')}>
              <Icon name="close-circle" size={40} color={'white'} />
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'center',
                top: -40,
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 70,
                  height: 70,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 70,
                }}>
                <Icons name="lock" color={'gray'} size={40} />
              </View>
            </View>

            <Text style={{color: 'gray', textAlign: 'center'}}>
              Biaya Tiket
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <ButtonDm label={1000} />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 10,
                alignItems: 'center',
              }}>
              <View>
                <Text style={{color: 'gray', textAlign: 'center'}}>
                  Saldo Anda
                </Text>

                <ButtonDm label={2000} />
              </View>
              <Text style={{color: 'gray'}}>| |</Text>
              <View>
                <Text style={{color: 'gray', textAlign: 'center'}}>
                  Sisa Saldo
                </Text>

                <ButtonDm label={1000} />
              </View>
            </View>

            {/* BUTTON */}
            <TouchableOpacity
              onPress={() => setIsVisible(false)}
              style={{
                backgroundColor: COLORS.primary,
                marginTop: 30,
                padding: 5,
                borderRadius: 100,
                marginLeft: 100,
                marginRight: 100,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                Beli
              </Text>
            </TouchableOpacity>

            <View
              style={{
                backgroundColor: 'gray',
                width: '100%',
                bottom: 0,
                position: 'absolute',
                borderTopStartRadius: 35,
                borderTopEndRadius: 35,
                padding: 20,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                This live is private
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                if you want to continue watching top up first to be able to
                continue.
              </Text>
            </View>
          </View>
        </SafeAreaProvider>
      )}
    </>
  );
};

export default ModalPrivateLive;

const styles = StyleSheet.create({});
