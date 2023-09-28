import {StyleSheet, Text, View} from 'react-native';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface TProps {
  name: string;
  color?: string;
  size?:number
}

const Icons = ({name,color,size}: TProps) => {
  switch (name) {
    case 'lock':
      return <Icon name="lock-closed" size={size||20} color={color||'black'} />;
      break;

    case 'no-lock':
      return <Icon name="lock-open" size={size||20} color={color||'black'} />;
      break;

    case 'menu':
      return <Icon name="ellipsis-vertical" size={size||20} color={color||'black'} />;
      break;

    case 'close':
      return <Icon name="close" size={size||20} color={color||"white"} />;
      break;

    case 'person':
      return <Icon name="person" size={size||20} color={color||"black"} />;
      break;

    case 'chat':
      return <Icon name="chatbubble-ellipses" size={size||25} color={color||'black'} />;
      break;

    case 'profil':
      return <Icon name="person-circle" size={size||25} color={color} />;
      break;

    case 'home':
      return <Icon name="home" size={size||25} color={color||"black"} />;
      break;

    case 'game':
      return <Icon name="game-controller" size={size||25} color={color||"black"} />;
      break;

    case 'notifikasi':
      return <Icon name="notifications-circle-outline" size={size||25} color={color||"black"} />;
      break;

    case 'camera':
      return <Icon name="videocam" size={size||30} color="white" />;
      break;

    case 'search':
      return <Icon name="search-outline" size={size||30} color={color||"white"} />;
      break;

    default:
      break;
  }
};

export default Icons;
