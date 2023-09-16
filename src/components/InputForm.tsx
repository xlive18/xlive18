import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

interface TProps {
    placeholder:string
    secure?:boolean
    onChange?:any
    value?:string
}

const InputForm = (props:TProps) => {
    const {placeholder,secure=false,value,onChange} = props
  return (
    <TextInput
        editable
        // multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChange(text)}
        value={value}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secure}
      />
  )
}

export default InputForm

const styles = StyleSheet.create({
    input:{
        width:'100%',
        height:45,
        backgroundColor:"#D9D9D9",
        borderRadius:5,
        paddingLeft:15,
        paddingRight:15,
        fontSize:20,
    }
})