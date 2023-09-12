import React, {useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import Button from '../../components/Button';
import InputPhoneNumber from '../../components/InputPhoneNumber';

const Login = ({navigation}: {navigation: any}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <ImageBackground
      source={require('../../../assets/images/background.png')}
      resizeMode="cover"
      style={styles.background}>
      <View style={styles.containerForm}>
        <InputPhoneNumber value={phoneNumber} setValue={setPhoneNumber} />
        <Button label="LOGIN" onPress={()=>navigation.navigate('Home')} />
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 150,
  },
  containerForm: {
    marginLeft: 30,
    marginRight: 30,
    gap: 20,
  },
});
