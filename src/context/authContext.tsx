import {useNavigation} from '@react-navigation/native';
import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import datas from '../dataDummy';

const Context: any = createContext();

const AuthContext = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState(null);

  const getDataUser = async () => {
    const getData = await AsyncStorage.getItem('user_');
    setData(JSON.parse(getData));
  };
  useEffect(() => {
    getDataUser();
  }, []);

  useEffect(() => {
    if (data === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [data]);

  const login = async (username, password) => {
    if (username == datas[0].username && password == datas[0].password) {
      await AsyncStorage.setItem('user_', JSON.stringify(datas[0]));
      setIsLogin(true);
    } else if (username == datas[1].username && password == datas[1].password) {
      await AsyncStorage.setItem('user_', JSON.stringify(datas[1]));
      setIsLogin(true);
    } else {
      alert('error');
    }
  };
  const logout = async () => {
    await AsyncStorage.removeItem('user_');
    setIsLogin(false);
  };

  return (
    <Context.Provider
      value={{isLoading, setIsLoading, isLogin, setIsLogin, login, logout}}>
      {props.children}
    </Context.Provider>
  );
};

export {Context, AuthContext};
