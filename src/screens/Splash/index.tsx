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
    <SafeAreaView >
      <View style={{justifyContent:"center",alignItems:"center",height:"100%"}}>

      <ImageBackground
        source={require('../../../assets/logo/logo.png')}
        style={{width: 100, height: 100}}
      />
      <View style={{position:"absolute",bottom:20,}}>
      <Text style={{fontWeight:"normal",textAlign:"center",fontSize:15}}>From</Text>
      <Text style={{fontWeight:"700",textAlign:"center",fontSize:25,color:"red"}}>BUFT</Text>
      </View>
        </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({});
