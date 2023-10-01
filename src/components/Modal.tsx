import {StyleSheet, Text, Modal, View} from 'react-native';
import React, {ReactNode, useContext, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Context} from '../context/authContext';
import {SafeAreaView} from 'react-native-safe-area-context';

interface TProps {
  children: ReactNode,
  visible: boolean,
  setVisible:  React.Dispatch<React.SetStateAction<boolean>>
}

const ModalComponent = (props: TProps) => {
  const {children, setVisible, visible} = props;

  const hideModal = () => {
    setVisible(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={hideModal}>
      <SafeAreaView style={styles.centeredView}>
        <View style={styles.modalView}>{children}</View>
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
    backgroundColor: 'black',
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
