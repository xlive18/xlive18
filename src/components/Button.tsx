import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode, useContext} from 'react';
import COLORS from './Colors';
import {Context} from '../context/authContext';

interface TProps {
  label: ReactNode;
  onPress?: any;
  primary?: boolean;
}

const Button = (props: TProps) => {
  const {label, onPress, primary} = props;

  const {isLoading}:any = useContext(Context);

  return (
    <TouchableOpacity
      style={[
        primary
          ? {backgroundColor: COLORS.primary}
          : {
              backgroundColor: 'white',
              borderWidth: 2,
              borderColor: COLORS.primary,
            },
        ,
        {borderRadius: 17, width: '100%',padding:10},
      ]}
      activeOpacity={0.8}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size={'small'} color={!primary?COLORS.primary:"white"} />
      ) : (
        <Text
          style={[styles.text, {color: primary ? 'white' : COLORS.primary}]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    textAlign: 'center',
    // lineHeight: 40,
    fontWeight: 'bold',
  },
});
