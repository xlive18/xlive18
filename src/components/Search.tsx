import {StyleSheet, StyleProp, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Icons from './Icons';
import LayoutIcon from './LayoutIcon';
import {SafeAreaView} from 'react-native-safe-area-context';

interface TProps {
  style?: StyleProp<ViewStyle>;
}

const Search = ({style}: TProps) => {
  const [search, setSearch] = useState('');

  const clearHandler = () => {
    setSearch('');
  };

  console.log(search);
  
  return (
    <SafeAreaView style={styles.container}>
      <Icons name="search" size={20} color='black' />
      <TextInput
      editable
        placeholder="Search"
        style={[style, {height: 50}]}
        value={search}
        onChangeText={(val) => setSearch(val)}
      />
      {search.length > 0 && (
        <LayoutIcon
          bg="rgba(0,0,0,.5)"
          style={{padding: 2}}
          onPress={clearHandler}>
          <Icons name="close" color="white" size={10} />
        </LayoutIcon>
      )}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    gap: 5,
    paddingLeft: 5,
    paddingRight: 5,
    height: 40,
  },
});
