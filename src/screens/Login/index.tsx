import React, {useState, useContext} from 'react';
import {ImageBackground, StyleSheet, View, Text,Image,TextInput} from 'react-native';
import Button from '../../components/Button';
import InputPhoneNumber from '../../components/InputPhoneNumber';
import datas from '../../dataDummy';
import {Context} from '../../context/authContext';
import InputForm from '../../components/InputForm';

const Login = ({navigation}: {navigation: any}) => {
  const [username, setUsername]: any = useState('');
  const [password, setPassword]: any = useState('');

  const {login} = useContext(Context);
  
  return (
    <ImageBackground
      source={require('../../../assets/images/background.png')}
      resizeMode="cover"
      style={styles.background}>
      <View style={styles.containerForm}>
        <Image source={require('../../../assets/images/logo.png')} style={{width:70,height:70}}/>
        {/* <Text style={styles.textStyle}>Login</Text> */}
        {/* <InputPhoneNumber value={phoneNumber} setValue={setPhoneNumber} /> */}
        <InputForm placeholder="Username" onChange={setUsername} value={username}/>
        <InputForm placeholder="Password" secure={true} onChange={setPassword} value={password}/>

       
        <Button label="LOGIN" onPress={()=>login(username,password)} />
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
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    alignItems:"center"
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color:'black'
  },
});
