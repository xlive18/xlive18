import React, {useContext} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../../components/Button';
import COLORS from '../../components/Colors';

const MenuLogin = ({navigation}: {navigation: any}) => {
  return (
      // <ImageBackground
      //   blurRadius={10}
      //   source={require('../../../assets/images/background.png')}
      //   resizeMode="cover"
      //   style={{width: '100%', height: '100%',justifyContent:"flex-end"}}>
      //   <View style={[styles.form,{backgroundColor:"transparent"}]}>
      //     <Text style={[styles.formTitle,]}>Welcome</Text>
      //     <Text style={styles.formDesc}>To xlive18 live streaming apk</Text>

      //     <View style={{gap: 8, marginTop: 10}}>
      //       <Button
      //         label="Sign In"
      //         primary
      //         onPress={() => navigation.navigate('Login')}
      //       />
      //       <Button
      //         label="Sign Up"
      //         onPress={() => navigation.navigate('SignUp')}
      //       />
      //     </View>
      //   </View>
      // </ImageBackground>

     <SafeAreaView style={styles.container}>
       <View style={styles.header}>
         <Image source={require('../../../assets/images/logo.png')} style={{width:120,height:120}}/>
       </View>
       <View style={styles.form}>
         <Text style={styles.formTitle}>Welcome</Text>
         <Text style={styles.formDesc}>To xlive18 live streaming apk</Text>

         <View style={{gap:8,marginTop:10}}>
           <Button
             label="Sign In"
             primary
             onPress={() => navigation.navigate('Login')}
           />
           <Button
             label="Sign Up"
             onPress={() => navigation.navigate('SignUp')}
           />
         </View>
       </View>
     </SafeAreaView>
  );
};

export default MenuLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: '50%',
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    marginLeft: 30,
    marginRight: 30,
    gap: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    top: -50,
  },
  formTitle: {
    fontWeight: '800',
    fontSize: 30,
    color: 'black',
  },
  formDesc: {
    fontSize: 15,
    marginTop: -20,
    color: 'black',
  },
});
