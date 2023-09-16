import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const CustomPrivateLive = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate:any = useNavigation()
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
              onPress={()=>navigate.replace("Home")}>
              <Icon name="close-circle" size={40} color={'white'} />
            </TouchableOpacity>
          </View>
        </SafeAreaProvider>
      )}
    </>
  );
};

export default CustomPrivateLive;

const styles = StyleSheet.create({});
