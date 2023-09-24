import { StyleSheet, Text, View,Pressable } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import COLORS from './Colors'

const ButtonIcon = (props:any) => {
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
      <Icon name={props.iconName} size={20} color={props.isActive ? 'white':'gray'}/>
      <Text style={[styles.textDmStyle,
      {color: props.isActive ? 'white':'gray'},
    ]}>{props.label}</Text>
    </View>
  </Pressable>
  )
}

export default ButtonIcon

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