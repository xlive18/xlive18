import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import React, { useState } from 'react'

import { WebView } from 'react-native-webview';
import Button from '../../components/Button';
import data from '../../dataDummy/dataTopup';
import { Context } from '../../context/authContext';
import ModalDeposit from './ModalDeposit';

const Deposit = () => {

  const [visibleModal,setVisibleModal] = useState(false)

  return (
    <SafeAreaView style={{width:'100%',height:'100%',paddingLeft:20,paddingRight:20}}>
      <ModalDeposit visible={visibleModal} setVisible={setVisibleModal}/>
      <View style={{flexDirection:'row',flexWrap:"wrap",width:"100%",gap:10, marginBottom:20,marginTop:20}}>
        {data.map((el,idx)=>{
          return(
            <Button label={el.price} key={idx}/>
          )
        })}
      </View>
      
      <Button label={"Lanjutkan pembayaran"} primary onPress={()=>setVisibleModal(true)}/>
    </SafeAreaView>
  )
}

export default Deposit

const styles = StyleSheet.create({})