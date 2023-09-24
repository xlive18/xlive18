import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import TitleText from '../../components/Title';
import Carousels from './Carousel';
import Title from './Title';
import Games from './Games';
import WarningText from './WarningText';
import AsyncStorage from '@react-native-async-storage/async-storage';
import datas from '../../dataDummy';
import CardLive from './CardLive';

const Home = () => {
  // const [value,setValue] = useState()

  // const getStorage = async ()=>{
  //   const get = await AsyncStorage.getItem('tes')
  //   setValue(get)
  // }
  // useEffect(()=>{
  // getStorage()
  // },[])
  // console.log(value);

  const images = [
    {
      url: 'https://img.freepik.com/free-vector/skull-gaming-with-joy-stick-emblem-modern-style_32991-492.jpg',
    },
    {
      url: 'https://img.freepik.com/free-vector/skull-gaming-with-joy-stick-emblem-modern-style_32991-492.jpg',
    },
    {
      url: 'https://img.freepik.com/free-vector/skull-gaming-with-joy-stick-emblem-modern-style_32991-492.jpg',
    },
    {
      url: 'https://img.freepik.com/free-vector/skull-gaming-with-joy-stick-emblem-modern-style_32991-492.jpg',
    },
    {
      url: 'https://img.freepik.com/free-vector/skull-gaming-with-joy-stick-emblem-modern-style_32991-492.jpg',
    },
    {
      url: 'https://img.freepik.com/free-vector/skull-gaming-with-joy-stick-emblem-modern-style_32991-492.jpg',
    },
    {
      url: 'https://img.freepik.com/free-vector/skull-gaming-with-joy-stick-emblem-modern-style_32991-492.jpg',
    },
    {
      url: 'https://img.freepik.com/free-vector/skull-gaming-with-joy-stick-emblem-modern-style_32991-492.jpg',
    },
  ];

  const liveFilter = datas?.filter(el => {
    return el.isLive == true;
  });


  return (
    <ScrollView style={{padding: 20}}>

      <Carousels />
      <WarningText />

      <Title>
        <Image source={require('../../../assets/icons/game-console.png')} />
        <View>
          <TitleText>Populer Game</TitleText>
          <View
            style={{
              width: '100%',
              height: 5,
              borderRadius: 5,
              alignSelf: 'flex-end',
              backgroundColor: '#ECAF13',
            }}
          />
        </View>
      </Title>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 10,
          marginBottom:20
        }}>
        {images.map(el => {
          return <Games image={el.url} />;
        })}
      </View>
      <Title>
        <Image source={require('../../../assets/icons/camera-icon.png')} />
        <View>
          <TitleText>Populer Live</TitleText>
          <View
            style={{
              width: '100%',
              height: 5,
              borderRadius: 5,
              alignSelf: 'flex-end',
              backgroundColor: '#ECAF13',
            }}
          />
        </View>
      </Title>

      <View style={{
        marginTop:20,
        marginBottom:120,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
      }}>
        {liveFilter?.map((el, idx) => {
          return <CardLive key={idx} dataLive={el}/>;
        })}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
