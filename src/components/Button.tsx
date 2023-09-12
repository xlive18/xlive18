import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React, { ReactNode } from 'react'

interface TProps{
    label:ReactNode
    onPress?:any
}

const Button = (props:TProps) => {

    const {label,onPress} = props

  return (
  <TouchableOpacity style={styles.button} activeOpacity={.8} onPress={onPress}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        height:45,
        backgroundColor:"#0AE1EF",
        borderRadius:45,
    },
    text:{
        fontSize:20,
        textAlign:"center",
        lineHeight:45,
        color:"black"
    }
})