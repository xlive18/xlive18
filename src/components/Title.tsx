import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TitleText = ({children}:any) => {
  return (
    <Text style={{fontWeight:"bold",color:"black"}}>{children}</Text>
  )
}

export default TitleText

const styles = StyleSheet.create({})