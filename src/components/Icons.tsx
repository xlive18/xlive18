import { StyleSheet, Text, View } from 'react-native'
import type {PropsWithChildren} from 'react'
import Icon from "react-native-vector-icons/FontAwesome"

interface TProps{
    name:string
}

const Icons = ({name}:TProps) => {
 switch (name) {
    case 'house':
        return <Icon name="house" size={20} color="black"/>
        break;
 
    default:
        break;
 }
}

export default Icons
