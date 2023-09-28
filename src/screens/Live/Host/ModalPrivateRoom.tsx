import {StyleSheet, Text, View, Modal, Pressable} from 'react-native';
import React, {useState} from 'react';
import LayoutIcon from '../../../components/LayoutIcon';
import Icons from '../../../components/Icons';
import COLORS from '../../../components/Colors';
import ButtonDm from '../../../components/ButtonDm';
import dataTiket from '../../../dataDummy/dataTiket';

interface TProps {
  visible: boolean;
  isPrivate: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPrivate: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalPrivateRoom = ({visible, setVisible,isPrivate,setIsPrivate}: TProps) => {
  const [selected, setSelected] = useState(0);
  const [price, setPrice] = useState(1000);

  const buttonHandler = (price:number, selected:number) => {
    setPrice(price);
    setSelected(selected);
  };

  const startHandler = () => {
    setVisible(false)
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.buttonClose}
              onPress={() => {
                setVisible(!visible);
                setSelected(0);
              }}>
              <LayoutIcon bg="red">
                <Icons name="close" />
              </LayoutIcon>
            </Pressable>
            {isPrivate ? (
              <View style={{width:'100%',gap:10}}>
                <View style={{flexDirection: 'row'}}>
                  {dataTiket.map((el:any, idx) => {
                    return (
                      <ButtonDm
                        label={el.Price}
                        handler={() => buttonHandler(el.Price, idx)}
                        isActive={idx == selected ? true : false}
                      />
                    );
                  })}
                </View>
                <Pressable
                  style={
                    styles.buttonOk}
                  onPress={startHandler}>
                  <Text style={styles.textButton}>Go Live</Text>
                </Pressable>
              </View>
            ) : (
              <View style={{width: '100%', gap: 10}}>
                <Text>
                  Are you sure you want to change your private room to a public
                  live?
                </Text>
                <Pressable style={styles.buttonOk}>
                  <Text style={styles.textButton}>OKE</Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalPrivateRoom;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
