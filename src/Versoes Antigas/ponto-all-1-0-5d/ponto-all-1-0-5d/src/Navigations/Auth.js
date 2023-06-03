import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Calculadora';
import Login from '../pages/Login';
import Register from '../pages/Cadastramento';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
        header: () => null,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
        header: () => null,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
        header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}
