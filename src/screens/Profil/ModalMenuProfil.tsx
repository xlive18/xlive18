import {StyleSheet, Text, View, Modal, Pressable} from 'react-native';
import React from 'react';
import LayoutIcon from '../../components/LayoutIcon';
import Icons from '../../components/Icons';
import COLORS from '../../components/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface TProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalMenu = ({visible, setVisible}: TProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}>
      <SafeAreaView onTouchStart={()=>setVisible(false)} style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>
            Are you sure you want to change your private room to a public live?
          </Text>
          <Pressable onPress={() => alert('hai')} style={styles.buttonOk}>
            <Text style={styles.textButton}>OKE</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ModalMenu;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    position:'absolute',
    top:30,
    right:-10
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    gap: 20,
    width: '80%',
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
  buttonClose: {
    position: 'absolute',
    right: -15,
    top: -15,
  },
  buttonOk: {
    width: '100%',
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 6,
  },
  textButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
