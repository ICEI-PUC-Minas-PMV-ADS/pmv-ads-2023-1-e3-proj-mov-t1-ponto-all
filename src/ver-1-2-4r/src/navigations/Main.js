import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Relatorio from '../pages/Relatorio';
import Users from '../pages/Users';
import Mark from '../pages/Mark';
import Geolocalizacao from '../pages/Geolocalizacao';
const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />      
      <Stack.Screen
        name="Relatorio"
        component={Relatorio}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Mark"
        component={Mark}
        options={{
          header: () => null,
        }}
      />
      

    </Stack.Navigator>
  );
};

export default Main;
