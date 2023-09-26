import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import ZegoUIKitPrebuiltLiveStreaming, {
  AUDIENCE_DEFAULT_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-live-streaming-rn';
import {useNavigation, useRoute} from '@react-navigation/native';
import credentials from '../../../credentials';
import CustomAudientPage from './CustomAudientPage';
import ModalPrivateLive from './ModalPrivateLive';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {
  BottomSheetRefProps,
} from '../../../components/BottomSheet';
import BottomSheetContent from './Partials/BottomSheetContent';

const AudiencePage = () => {
  const route = useRoute();
  const navigation: any = useNavigation();

  const refBottomSheet = useRef<BottomSheetRefProps>(null);

  const onShowBottomSheet = useCallback(() => {
    const isActive = refBottomSheet?.current?.isActive();
    if (isActive) {
      refBottomSheet?.current?.scrollTo(0);
    } else {
      refBottomSheet?.current?.scrollTo(-500);
    }
    refBottomSheet?.current?.scrollTo(-500);
  }, []);

  const {userId, username, liveId}: any = route.params;

  return (
    <GestureHandlerRootView style={{flex: 1}}>
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
          }}
        />
        <CustomAudientPage onPress={onShowBottomSheet} />
        <ModalPrivateLive />
      </View>
      <BottomSheet ref={refBottomSheet}>
        <BottomSheetContent />
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default AudiencePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
