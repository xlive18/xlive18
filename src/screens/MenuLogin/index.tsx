import React,{useContext} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import Button from '../../components/Button';

const MenuLogin = ({navigation}:{navigation:any}) => {

  return (
    <ImageBackground
      source={require('../../../assets/images/background.png')}
      resizeMode="cover"
      style={styles.background}>
      <View style={styles.containerForm}>
        <Button label="LOGIN" onPress={()=>navigation.navigate('Login')}/>
        <Button label="REGISTER" onPress={()=>navigation.navigate('SignUp')}/>
      </View>
    </ImageBackground>
  );
};

export default MenuLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom:150
  },
  containerForm: {
    marginLeft: 30,
    marginRight: 30,
    gap:20
  },
});
