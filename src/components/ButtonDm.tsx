import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React, { useState } from 'react'
import Icons from './Icons'
import COLORS from './Colors'

const ButtonDm = (props:any) => {
  return (
    <Pressable
    style={[
      styles.containerDm,
      {backgroundColor: props.isActive ? COLORS.primary:'rgba(255,255,255,.3)'},
    ]}
    onPress={props.handler}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}>
     <Image source={require('../../assets/icons/dm.webp')} style={{width:15,height:15}}/>
      <Text style={[styles.textDmStyle,
      {color: props.isActive ? 'white':'gray'},
    ]}>{props.label}</Text>
    </View>
  </Pressable>
  )
}

export default ButtonDm

const styles = StyleSheet.create({
    textDmStyle: {
        fontWeight: 'bold',
        color: '#7B7B7B',
      },
      containerDm: {
        backgroundColor: 'rgba(255,255,255,.3)',
        paddingLeft: 10,
        paddingRight: 10,
        padding: 3,
        borderRadius: 100,
      },
})