import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const MenuProfil = ({img,isCount,label}:any) => {
  const navigation:any = useNavigation()
  return (
    <TouchableOpacity
    onPress={()=>{
      navigation.navigate('Balance')
    }}
      style={{
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderTopWidth: 1,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={img} />
        <Text>{label}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
       {isCount && <Text>0</Text>}
        <Icon name="chevron-right" size={30} color={'black'} />
      </View>
    </TouchableOpacity>
  );
};

export default MenuProfil;

const styles = StyleSheet.create({});
