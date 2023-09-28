import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CardLive = ({dataLive}:any) => {
  const width = (Dimensions.get('window').width - 50) / 2;
  const height = (Dimensions.get('window').width - 150) / 2;

  const navigation: any = useNavigation();
  const [data, setData] = useState({});

  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  // const [liveId, setLiveId] = useState(dataLive.liveId);

  const getDataUser = async () => {
    const getData = await AsyncStorage.getItem('user_');
    const result = JSON.parse(getData)
    setData(result);
    setUserId(result.id)
    setUserId(result.username)
  };
  useEffect(() => {
    getDataUser();
  }, []);

  const buttonHandler = () => {
    if (dataLive.liveId != '') {
      navigation.navigate('AudiencePage', {userId, username, liveId:dataLive?.liveId});
    }
  };

  
  return (
    <TouchableOpacity
      onPress={buttonHandler}
      style={{
        borderRadius: 10,
        overflow: 'hidden',
        width: width,
        height: height,
      }}>
      <ImageBackground
        source={{
          uri: 'https://www.socialflyny.com/wp-content/uploads/2020/05/Live-Streaming-Best-Practices-scaled.jpg',
        }}
        style={{width: '100%', height: '100%'}}>
        <Image
          source={require('../../../assets/icons/liveIcon.png')}
          style={{width: 50, height: 50, top: -10, left: -5}}
        />
        <View
          style={{
            width: '100%',
            padding: 10,
            backgroundColor: 'rgba(0, 0, 0, 0.69)',
            position: 'absolute',
            bottom: 0,
          }}>
          <Text style={{color: 'white'}}>Kuwan</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CardLive;
