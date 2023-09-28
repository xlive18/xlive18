import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from './Button';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

interface TProps{
  data:any,
  labelButton:string
}

const CardFollower = ({data,labelButton}:TProps) => {
  const navigation:any = useNavigation();

  const pressHandler = () => {
    navigation.navigate('ProfilTalent',{data:data});
  };

  return (
    <TouchableOpacity onPress={pressHandler}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
          borderBottomWidth: 2,
          borderColor: '#e7e7e7',
          paddingBottom: 10,
          paddingTop: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Image
            source={{
              uri: 'https://tse1.mm.bing.net/th?id=OIP.aDmpHyEDKyy4uni9Su9qQAHaJQ&pid=Api&P=0&h=180',
            }}
            width={55}
            height={55}
            style={{borderRadius: 100}}
          />
          <Text style={styles.textStyle}>{data?.username}</Text>
        </View>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={{color: 'black'}}>{labelButton}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default CardFollower;

const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
    fontSize: 15,
  },
  buttonStyle: {
    backgroundColor: '#e7e7e7',
    paddingTop: 5,
    paddingBottom: 5,
    padding: 30,
    borderRadius: 8,
  },
});
