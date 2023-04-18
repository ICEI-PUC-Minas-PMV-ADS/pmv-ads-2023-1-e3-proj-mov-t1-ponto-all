import React, { useState } from 'react';
import { BottomNavigation, Text, Menu, Appbar, Provider as PaperProvider } from 'react-native-paper';
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import fingerprint2 from "../Midia/LOGOTIPO_50.png";

import Gastos from './Gastos';
import Calculadora from './Calculadora';
import Perfil3 from './Perfil3';
import Relatorio from './Relatorio';
import Registro2 from './Registro2';
import Registrar from './Home';
import Colabs4 from './Colabs4';


const Home = () => {  
  
const _goBack = () => console.log('Went back');

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'calculadora', title: 'Home', icon: 'calculator' },
    { key: 'gastos', title: 'Gastos', icon: 'gas-station' },        
    { key: 'perfil3', title: 'Perfil', icon: 'account' },
    { key: 'relatorio', title: 'Relatorio', icon: 'file-document-outline' },
    { key: 'registro2', title: 'Registrar', icon: 'fingerprint' },
    { key: 'colabs4', title: 'Colaboradores', icon: 'account-supervisor' },
    //{ key: 'registrar', title: 'Marc', icon: 'fingerprint' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    gastos: Gastos,
    calculadora: Calculadora,
    perfil3: Perfil3,
    relatorio: Relatorio,
    registro2: Registro2,
    registrar: Registrar,
    colabs4: Colabs4,
    
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
