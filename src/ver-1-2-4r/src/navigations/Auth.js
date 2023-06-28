import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword'
import Geolocalizacao from '../pages/Geolocalizacao';
const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
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
       <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          header: () => null,
        }}
      />
       <Stack.Screen
        name="Geolocalizacao"
        component={Geolocalizacao}
        options={{
          header: () => null,
        }}
      />
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
};

export default Auth;
