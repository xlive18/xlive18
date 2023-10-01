import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {data} from './dummy/GiftData';

const BottomSheetContent = () => {
  return (
    <View style={styles.cardContainer}>
      <Text
        style={{
          textAlign: 'center',
          marginBottom: 20,
          fontSize: 24,
          fontWeight: '700',
        }}>
        Gift
      </Text>
      <View style={styles.row}>
        {data.map(el => {
          return (
            <TouchableOpacity style={styles.giftCard}>
              <Image
                source={require('../../../../../assets/icons/gift.png')}
                style={{width: 55, height: 55, borderWidth: 1}}
              />
              <Text style={{fontWeight: '800', textAlign: 'center'}}>
                {el.gift}
              </Text>
              <Text style={{fontSize: 13}}>{el.price}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomSheetContent;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 5,
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  giftCard: {
    width: 100,
    alignItems: 'center',
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: '#3e5c76',
    padding: 10,
    borderRadius: 15,
  },
});
