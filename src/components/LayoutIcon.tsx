import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface TProps {
    children:ReactNode,
    onPress?:()=>void,
    bg?:string
    style?:StyleProp<ViewStyle>
}

const LayoutIcon = ({children,onPress,bg,style}:TProps) => {
  return (
    <TouchableOpacity style={[styles.container,{backgroundColor:bg||'white'},style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}

export default LayoutIcon

const styles = StyleSheet.create({
    container:{
        padding:5,
        borderRadius:50
    }
})