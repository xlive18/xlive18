import { StyleSheet,Image, Text, View,TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'

const Games = ({image}:{image:string}) => {

  const width = (Dimensions.get('window').width - 70) / 4;

  return (
    <TouchableOpacity>
      <Image source={{uri:image}} width={width} height={width} style={{borderRadius:20}}/>
    </TouchableOpacity>
  )
}

export default Games

const styles = StyleSheet.create({})