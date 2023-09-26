import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

// import {SvgXml} from 'react-native-svg'; <--- For svg

interface IconsProps {
  svgXmlData: string;
  width?: number;
  height?: number;
  color?: string;
}

// For svg
// export const GiftIcon = (props: IconsProps) => {
//   const {svgXmlData, color, height, width} = props;
//   return <SvgXml xml={svgXmlData} width={width} height={height} fill={color} />;
// };

export const GiftIcon = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/icons/gift.png')}
        style={{width: 40, height: 40}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  giftIcon: {},
});
