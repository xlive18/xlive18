import React,{useState} from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import InputForm from '../../components/InputForm';
import Button from '../../components/Button';
import InputPhoneNumber from '../../components/InputPhoneNumber';

const SignUp = () => {
  const [phoneNumber,setPhoneNumber] = useState('')
  return (
    <ImageBackground
      source={require('../../../assets/images/background.png')}
      resizeMode="cover"
      style={styles.background}>
      <View style={styles.containerForm}>
        <InputForm placeholder="YOUR NAME"/>
        <InputForm placeholder="YOUR EMAIL"/>
        <InputForm placeholder="PASSWORD"/>
        <InputPhoneNumber value={phoneNumber} setValue={setPhoneNumber}/>
        <Button label="REGISTER"/>
      </View>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  containerForm: {
    marginLeft: 30,
    marginRight: 30,
    gap:20
  },
});
