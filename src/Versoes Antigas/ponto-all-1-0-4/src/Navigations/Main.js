import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Cadastramento from '../pages/Cadastramento';
import Perfil3 from '../pages/Perfil3';
import Relatorio from '../pages/Relatorio';
import Registro2 from '../pages/Registro2';
import Colabs4 from '../pages/Colabs4';
import Login from '../pages/Login';



const Stack = createNativeStackNavigator();

const Main = () => {
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
        name="Cadastramento"
        component={Cadastramento}
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
        name="Perfil3"
        component={Perfil3}
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
        name="Registro2"
        component={Registro2}
        options={{
          header: () => null,
        }}
      />
       <Stack.Screen
        name="Colabs4"
        component={Colabs4}
        options={{
          header: () => null,
        }}
      />
      
    </Stack.Navigator>
  );
};

export default Main;
