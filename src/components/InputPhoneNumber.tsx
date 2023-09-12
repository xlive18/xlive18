import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useRef, useState} from 'react';
import PhoneInput from 'react-native-phone-number-input';

const InputPhoneNumber = (props:any) => {
  const phoneInput = useRef<PhoneInput>(null);

  const {setValue,value} = props
  return (
      <PhoneInput
        containerStyle={{borderRadius: 45,height:45, overflow: 'hidden', width: '100%'}}
        textInputStyle={{color:"black",height:45,margin:0}}
        codeTextStyle={{height:23}}
        ref={phoneInput}
        defaultValue={value}
        defaultCode="ID"
        layout="first"
        onChangeText={text => {
          setValue(text);
        }}
        onChangeFormattedText={text => {
          setValue(text);
        }}
        withDarkTheme
        // withShadow
        autoFocus
      />
  );
};

export default InputPhoneNumber;

const styles = StyleSheet.create({});


