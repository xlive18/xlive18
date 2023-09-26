import {Pressable, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import LayoutIcon from '../../../components/LayoutIcon';
import Icons from '../../../components/Icons';
import {GiftIcon} from '../../../components/Icons/Gift';

interface CustomAudientProps {
  onPress: () => void;
}

const CustomAudientPage = (props: CustomAudientProps) => {
  const {onPress} = props;

  const [modalPrivate, setModalPrivate] = useState(false);

  const chatHandler = () => {
    alert('Coming soon');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonRight}>
        <LayoutIcon onPress={chatHandler} bg="rgba(255,255,255,.2)">
          <Icons name="chat" color="white" size={17} />
        </LayoutIcon>
      </View>
      <View style={styles.buttonBottom}>
        <Pressable onPress={onPress}>
          <LayoutIcon bg="rgba(255,255,255,.2)">
            <GiftIcon />
          </LayoutIcon>
        </Pressable>
      </View>
    </View>
  );
};

export default CustomAudientPage;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 100,
    paddingRight: 10,
  },
  buttonRight: {
    alignItems: 'flex-end',
  },
  buttonBottom: {
    width: 50,
    height: 100,
    position: 'absolute',
    right: 20,
    bottom: 90,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    width: 100,
  },
});
