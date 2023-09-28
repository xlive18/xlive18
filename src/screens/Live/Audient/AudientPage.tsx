import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ZegoUIKitPrebuiltLiveStreaming, {
  AUDIENCE_DEFAULT_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';
import {useNavigation, useRoute} from '@react-navigation/native';
import credentials from '../../../credentials';
import CustomAudientPage from './CustomAudientPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalPrivateLive from './ModalPrivateLive';

const AudiencePage = () => {
  const route = useRoute();
  const navigation: any = useNavigation();

  const {userId, username, liveId}: any = route.params;

  return (
    <View style={styles.container}>
      <ZegoUIKitPrebuiltLiveStreaming
        appID={credentials.appId}
        appSign={credentials.appSign}
        userID={userId}
        userName={username}
        liveID={liveId}
        config={{
          ...AUDIENCE_DEFAULT_CONFIG,
          onLeaveLiveStreaming: () => {
            navigation.navigate('Home');
          },
          bottomMenuBarConfig: {},
          translationText: {
            noHostOnline: 'Live Telah Selesai',
          },
        }}
      />
      <CustomAudientPage />
      <ModalPrivateLive />
    </View>
  );
};

export default AudiencePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
  },
});
