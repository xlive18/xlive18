import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import TitleText from '../../components/Title';
import Carousels from './Carousel';
import Title from './Title';
import Games from './Games';
import WarningText from './WarningText';

const Home = () => {
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

  return (
    <ScrollView style={{padding: 20}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{width: 63}}>
          <TitleText>POPULER</TitleText>
          <View
            style={{
              width: 40,
              height: 5,
              borderRadius: 5,
              alignSelf: 'flex-end',
              backgroundColor: '#ECAF13',
            }}
          />
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
          <TouchableOpacity>
            <Image source={require('../../../assets/icons/notif.png')} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={require('../../../assets/icons/top.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <Carousels />
      <WarningText/>

      <Title>
        <Image source={require('../../../assets/icons/game-console.png')} />
        <View>
          <TitleText>Populer Game</TitleText>
          <View
            style={{
              width: 40,
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
              width: 40,
              height: 5,
              borderRadius: 5,
              alignSelf: 'flex-end',
              backgroundColor: '#ECAF13',
            }}
          />
        </View>
      </Title>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
