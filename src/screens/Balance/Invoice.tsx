import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Invoice = (props: any) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingTop: 10,
        paddingBottom: 10,
        gap: 10,
        paddingLeft: 10,
        paddingRight: 10,
      }}>
      <View
        style={{
          backgroundColor: '#ECAF13',
          borderRadius: 50,
          overflow: 'hidden',
          padding: 10,
        }}>
        {props.data.isWd ? (
          <Image
            source={require('../../../assets/icons/wd.png')}
            width={80}
            height={80}
          />
        ) : (
          <Image
            source={require('../../../assets/icons/depo.png')}
            width={80}
            height={80}
          />
        )}
      </View>

      <View>
        <Text style={{fontWeight: 'bold', color: 'black'}}>
          {props.data.isWd ? 'Withdraw' : 'Deposite'}
        </Text>
        <Text style={{fontWeight: 'bold', color: 'black'}}>
          {props.data.date}
        </Text>
      </View>
      <Text style={{position: 'absolute', right: 10, color: 'black'}}>
        {props.data.isWd && '-'} Rp {props.data.saldo}
      </Text>
    </View>
  );
};

export default Invoice;

const styles = StyleSheet.create({});
