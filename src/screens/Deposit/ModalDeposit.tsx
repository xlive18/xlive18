import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import ModalComponent from '../../components/Modal'
import { Context } from '../../context/authContext';

const ModalDeposit = ({visible,setVisible}) => {


  return (
    <ModalComponent visible={visible} setVisible={setVisible}>
        <View>
            <Text>test</Text>
        </View>
    </ModalComponent>
  )
}

export default ModalDeposit

const styles = StyleSheet.create({})