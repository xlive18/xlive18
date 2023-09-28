import {StyleSheet, Text, View, } from 'react-native';
import React, {useState} from 'react';
import LayoutIcon from '../../../components/LayoutIcon';
import Icons from '../../../components/Icons';
import ModalPrivateRoom from './ModalPrivateRoom';

const CustomHostPage = () => {
  const [modalPrivate, setModalPrivate] = useState(false);
  const [isPrivate, setIsPrivate] = useState(true);


  const privateRoomButton = () => {
    setModalPrivate(true);
  };

  return (
    <View style={styles.container}>
      <ModalPrivateRoom visible={modalPrivate} setVisible={setModalPrivate} isPrivate={isPrivate} setIsPrivate={setIsPrivate}/>
      <View style={styles.buttonRight}>
        <LayoutIcon onPress={privateRoomButton}>
          <Icons name={isPrivate?"lock":"no-lock"} />
        </LayoutIcon>
      </View>
    </View>
  );
};

export default CustomHostPage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 100,
    paddingRight: 10,
  },
  buttonRight: {
    alignItems: 'flex-end',
  },
  modalContainer:{
    width:100
  },

  
});
