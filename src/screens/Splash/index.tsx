import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect,useContext} from 'react';
import { Context } from '../../context/authContext';

const Splash = ({navigation}:any) => {
  const {isLogin} = useContext(Context)
console.log(isLogin);

  useEffect(() => {
    setTimeout(() => {
      if(isLogin){
        navigation.replace('Home');
      }else{
        navigation.replace('MenuLogin');
      }
    }, 3000);
  }, []);
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={{width: '100%', height: '100%'}}
      />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({});
