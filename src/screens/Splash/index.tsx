import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'

const Splash = ({navigation}) => {
    useEffect(()=>{
setTimeout(() => {
    navigation.replace('MenuLogin')
}, 3000);
    },[])
  return (
    <SafeAreaView>
        <ImageBackground source={require("../../../assets/images/background.png")} style={{width:'100%',height:'100%'}}/>
    </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({})