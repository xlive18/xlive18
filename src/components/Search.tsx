import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Search = () => {
  return (
    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:"white",borderRadius:100,gap:5,paddingLeft:5,paddingRight:5,height:'60%',marginRight:10}}>
      <Icon name='search' size={20}/>
      <TextInput placeholder='Search' style={{width:150,height:50}}/>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})