import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextTicker from 'react-native-text-ticker';
import Icon from 'react-native-vector-icons/Ionicons'

const WarningText = () => {
  return (
    <TextTicker
      style={{marginTop:10}}
      duration={8000}
      loop
      bounce={false}
      repeatSpacer={10}
      marqueeDelay={0}>
      <Text style={{fontSize:15,backgroundColor:'#D9D9D9',color:'black'}}>
      <Icon name='warning' size={20} color={'#ECAF13'}/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, magnam!
      </Text>
    </TextTicker>
  );
};

export default WarningText;

const styles = StyleSheet.create({});
