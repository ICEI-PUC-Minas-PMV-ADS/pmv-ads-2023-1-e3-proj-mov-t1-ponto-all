import React, { useState } from 'react';
import { BottomNavigation, Text, Menu, Appbar, Provider as PaperProvider } from 'react-native-paper';
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import fingerprint2 from "../Midia/LOGOTIPO_50.png";


import Cads from './Cads';
import Calculadora from './Calculadora';
import Relatorio from './Relatorio';
import Registro2 from './Registro2';
import Colabs4 from './Colabs4';
import Login from './Login';
import Login2 from './Login2';


const Home = () => {  
  
const _goBack = () => console.log('Went back');

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'calculadora', title: 'Home', icon: 'home' },
    { key: 'login', title: 'Login', icon: 'fingerprint' },
    { key: 'cads', title: 'Cadastro', icon: 'aaccount' },      
    { key: 'relatorio', title: 'Relatorio', icon: 'file-document-outline' },
    { key: 'registro2', title: 'Registrar', icon: 'fingerprint' },
    { key: 'colabs4', title: 'Colaboradores', icon: 'account-supervisor' },
    
  ]);

  const renderScene = BottomNavigation.SceneMap({
    
    cads: Cads,
    calculadora: Calculadora,    
    relatorio: Relatorio,
    registro2: Registro2,    
    colabs4: Colabs4,
    login: Login,
    //login2: Login2,
    home: Home,
    
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;
