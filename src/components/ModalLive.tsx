import {StyleSheet, Text, View, Modal, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';
import Icons from './Icons';
import LayoutIcon from './LayoutIcon';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {Context} from '../context/authContext';
import Icon from './Icons';
import COLORS from './Colors';
import ButtonIcon from './ButtonIcon';
import ButtonDm from './ButtonDm';

interface TProps {
  visible: boolean;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalLive = ({visible, setVisible}: TProps) => {
  const {data, setVisibleModalLive,visibleHandler}: any = useContext(Context);
  const [buttonLiveActive, setButtonLiveActive] = useState(-1);
  const [buttonDmActive, setButtonDmActive] = useState(0);

  const [selectedDm, setSelectedDm] = useState(1000);
  const [selectedRoom, setSelectedRoom] = useState('');

  const navigation: any = useNavigation();

  const startHandler = () => {
    if(buttonLiveActive != -1){
      navigation.navigate('HostPage', {
      userId: String(data.id),
      username: data.username,
      liveId: data.liveId,
    });
    setVisibleModalLive(false);
    
    
  }
  };
  const dataButtonLive = [
    {
      iconName: 'person',
      label: 'Live Publik',
      handler: () => {
        setButtonLiveActive(0);
        setSelectedRoom('live publik')
      },
    },
    {
      iconName: 'lock-closed',
      label: 'Private Room',
      handler: () => {
        setButtonLiveActive(1);
        setSelectedRoom('private room')
      },
    },
  ];

  const dataDm = [
    {
      label: '1000',
      handler: () => {
        setButtonDmActive(0);
        setSelectedDm(1000)
      },
    },
    {
      label: '2000',
      handler: () => {
        setButtonDmActive(1);
        setSelectedDm(2000)

      },
    },
    {
      label: '3000',
      handler: () => {
        setButtonDmActive(2);
        setSelectedDm(3000)
      },
    },
  ];
  return (
    <GestureHandlerRootView>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
          onRequestClose={visibleHandler}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable
                style={styles.buttonClose}
                onPress={visibleHandler}>
                <LayoutIcon bg='red'>
                  <Icons name="close" />
                </LayoutIcon>
              </Pressable>
              <View>
                {buttonLiveActive == 1 && (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      gap: 10,
                    }}>
                    {dataDm.map((el, idx) => {
                      return (
                        <ButtonDm
                          key={idx}
                          label={el.label}
                          handler={el.handler}
                          isActive={idx == buttonDmActive ? true : false}
                        />
                      );
                    })}
                  </View>
                )}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 10,
                    marginTop: 20,
                  }}>
                  {dataButtonLive.map((el, idx) => {
                    return (
                      <ButtonIcon
                        key={idx}
                        iconName={el.iconName}
                        label={el.label}
                        handler={el.handler}
                        isActive={idx == buttonLiveActive ? true : false}
                      />
                    );
                  })}
                </View>
                <View></View>
              </View>

              <Pressable style={[styles.buttonOk,{backgroundColor:buttonLiveActive == -1 ?'gray':COLORS.primary}]} onPress={startHandler}>
                <Text style={styles.textButton}>Go Live</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </GestureHandlerRootView>
  );
};

export default ModalLive;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
  buttonClose: {
    position: 'absolute',
    right: -10,
    top: -10,
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
  textDmStyle: {
    fontWeight: 'bold',
    color: '#7B7B7B',
  },
  containerDm: {
    backgroundColor: 'rgba(255,255,255,.3)',
    paddingLeft: 10,
    paddingRight: 10,
    padding: 3,
    borderRadius: 100,
  },
});
