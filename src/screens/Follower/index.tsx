import {StyleSheet, Text, View} from 'react-native';
import React, { useContext } from 'react';
import Search from '../../components/Search';
import CardFollower from '../../components/CardFollower';
import { Context } from '../../context/authContext';

const Follower = () => {
  const {data} = useContext(Context);

  return (
    <View style={styles.container}>
      <Search style={{width: '85%'}} />
      <View style={styles.containerCard}>
        {data?.follower.map((el, idx) => {
          return <CardFollower data={el} key={idx} />;
        })}
      </View>
    </View>
  );
};

export default Follower;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  containerCard: {
    marginTop: 20,
  },
});
