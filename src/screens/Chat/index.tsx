import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import datas from '../../dataDummy';
import ChatPeople from './ChatPeople';

const Chat = () => {
  
  return (
    <ScrollView>
      <View style={{gap:10, padding:10}}>
      {[1,2,3,4,5].map(el=>{
        return(
          <ChatPeople key={el}/>
          )
        })}
        </View>
    </ScrollView>
  )
}

export default Chat

const styles = StyleSheet.create({})