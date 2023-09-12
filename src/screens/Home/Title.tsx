import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import TitleText from '../../components/Title';

interface TProps {
  children: React.ReactNode;
}
const Title = ({children}: TProps) => {
  return (
    <View
      style={{
        width: 92,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {children}
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({});
