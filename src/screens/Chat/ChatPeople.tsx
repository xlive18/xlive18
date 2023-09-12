import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ChatPeople = () => {
  const navigation:any = useNavigation()
  return (
    <TouchableOpacity
    onPress={()=>navigation.navigate('ProfilTalent')}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        paddingBottom: 10,
      }}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'gray',
          borderRadius: 50,
        }}
      />
      <View style={{marginLeft: 10}}>
        <Text style={{fontWeight: 'bold', color: 'black'}}>Name User</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="checkmark" size={20} color={'black'} />
          <Text>Hallo</Text>
        </View>
      </View>
      <Text style={{textAlign: 'right', position: 'absolute', right: 0}}>
        00.00
      </Text>
    </TouchableOpacity>
  );
};

export default ChatPeople;

const styles = StyleSheet.create({});
