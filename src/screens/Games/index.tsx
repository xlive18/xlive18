import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Game from './Game';

const Games = () => {
  return (
    <ScrollView style={{padding:20}}>
      <View style={{flexDirection:"row",flexWrap:'wrap',justifyContent:"space-between",gap:20,paddingBottom:120}}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 10].map(el => {
          return <Game key={el} />;
        })}
        {[1, 2, 3, 4, 5, 6, 7, 8, 10].map(el => {
          return <Game key={el} />;
        })}
        {[1, 2, 3, 4, 5, 6, 7, 8, 10].map(el => {
          return <Game key={el} />;
        })}
        {[1, 2, 3, 4, 5, 6, 7, 8, 10].map(el => {
          return <Game key={el} />;
        })}
      </View>
    </ScrollView>
  );
};

export default Games;

const styles = StyleSheet.create({});
