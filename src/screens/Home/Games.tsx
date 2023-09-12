import { StyleSheet,Image, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Games = ({image}:{image:string}) => {
  return (
    <TouchableOpacity>
      <Image source={{uri:image}} width={80} height={80} style={{borderRadius:20}}/>
    </TouchableOpacity>
  )
}

export default Games

const styles = StyleSheet.create({})