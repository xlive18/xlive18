import {StyleSheet, Text, Modal, View} from 'react-native';
import React, {ReactNode, useContext} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Context} from '../context/authContext';
import { SafeAreaView } from 'react-native-safe-area-context';

interface TProps{
  children:ReactNode
}

const ModalComponent = (props:TProps) => {
const {children} = props

  const {data, setVisibleModalLive, visibleHandler, visible}: any =
    useContext(Context);

  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={visibleHandler}>
            <SafeAreaView style={styles.centeredView}>
            <View style={styles.modalView}>
             {children}
            </View>
          </SafeAreaView>
      </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor:"black"
      },
      modalView: {
        margin: 20,
        backgroundColor: 'rgba(196, 196, 196,.9)',
        borderRadius: 15,
        padding: 25,
        gap: 20,
        width: '90%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
});
