import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Live = () => {
  const navigation= useNavigation()
  return (
    <View>
      <Button
        title="start live"
        onPress={() => navigation.navigate('LivePage', {isHost: true})}
      />
      <Button
        title="join live"
        onPress={() => navigation.navigate('LivePage', {isHost: false})}
      />
    </View>
  );
};

import ZegoUiKitPrebuiltLiveStreaming, {
  HOST_DEFAULT_CONFIG,
  AUDIENCE_DEFAULT_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';
import { useNavigation } from '@react-navigation/native';

function LivePage(props: any) {
  let randomUserId = String(Math.floor(Math.random() * 10000));
  let isHost =props.route.params.isHost
  return (
    <View>
      <ZegoUiKitPrebuiltLiveStreaming 
      appID={1800633482}
      appSign='fe59a6298553228297ac30441ddf314e96519d9c60e5970b4d115e024f1a7c16'
      userName={'user_'+randomUserId} 
      liveID="testLiveID"

      config={{
        ...(isHost==true?HOST_DEFAULT_CONFIG:AUDIENCE_DEFAULT_CONFIG),
        onLeaveLiveStreaming:()=>{props.navigation.navigate('Live')}
      }}
      />
    </View>
  );
}

export default Live;
