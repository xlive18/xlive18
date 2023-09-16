import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Login, MenuLogin, SignUp } from '../screens';

const Stack = createStackNavigator();


const AuthNavigation = () => {
  return (
   <Stack.Navigator>
    <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="MenuLogin" component={MenuLogin} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Group>
   </Stack.Navigator>
  )
}

export default AuthNavigation