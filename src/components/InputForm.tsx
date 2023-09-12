import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

interface TProps {
    placeholder:string
}

const InputForm = (props:TProps) => {
    const {placeholder} = props
  return (
   <TextInput placeholder={placeholder} style={styles.input}/>
  )
}

export default InputForm

const styles = StyleSheet.create({
    input:{
        height:45,
        backgroundColor:"#D9D9D9",
        borderRadius:45,
        paddingLeft:15,
        paddingRight:15,
        fontSize:20,
        textAlign:"center"
    }
})