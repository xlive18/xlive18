import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Image} from 'react-native';

const Game = () => {
  const widthScale = Dimensions.get('screen');
  return (
    <TouchableOpacity>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/skull-gaming-with-joy-stick-emblem-modern-style_32991-492.jpg',
        }}
        width={100}
        height={80}
        style={{borderRadius:20}}
      />
    </TouchableOpacity>
  );
};

export default Game;

const styles = StyleSheet.create({});
