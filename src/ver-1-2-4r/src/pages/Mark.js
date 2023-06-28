import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Provider as PaperProvider, Headline, BottomNavigation } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import fingerprint from '../Midia/regs.png';
import {
  Container,
  Content,
  HoraAtual,
  Logo,  
  ImageWrapper,
} from '../components/Styles';

import Login from './Login';
import Register from './Register';
import Relatorio from './Relatorio';
import Users from './Users';



import { useUser } from '../contexts/UserContext';
import { getGastos } from '../services/gastos.services';

import { useIsFocused } from '@react-navigation/native';

const Mark = () => {
  const navigation = useNavigation();
  const { name } = useUser();

  const [horaAtual, setHoraAtual] = React.useState(
    new Date().toLocaleTimeString()
  );

  const currentTime = new Date().toLocaleTimeString();

  const registroPonto = () => {
    console.log(`Registro realizado! ${currentTime}`);
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setHoraAtual(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    
    { key: 'login', title: 'Login', icon: 'home' },
    { key: 'relatorio', title: 'Relatorio', icon: 'file-document-outline' },
    { key: 'users', title: 'Colaboradores', icon: 'account-supervisor' },
    { key: 'mark', title: 'Marcador', icon: '' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    
    login: Login,
    relatorio: Relatorio,
    users: Users,
    mark: Mark,
  });
  

  return (
    
    <SafeAreaProvider>
      <PaperProvider>
        <Container>
        <Image style={styles.logo2} source={require('../Midia/fundo.jpg')} />
        <Image style={styles.fundo} source={require('../Midia/dedinho.png')} />
          <Content>
          <Headline style={styles.textHeader}>Ponto All</Headline>
          <Text>Registre o seu ponto</Text>
            <TouchableOpacity onPress={registroPonto}>
              <ImageWrapper>
                <Logo source={fingerprint} />
              </ImageWrapper>
              
            </TouchableOpacity>
            
            <HoraAtual>{horaAtual}</HoraAtual>
            <Text style={styles.textH} >Hora do Sistema</Text>
          </Content>
        </Container>
        
      </PaperProvider>
     
    </SafeAreaProvider>
   
  
    
  );
};


const styles = StyleSheet.create({ 

  textH: {
    textAlign: 'center',    
    color: '#FFF'
  },
  
  textHeader: {
    textAlign: 'center',
    backgroundColor: 'invisible',
  },
   logo2: {
    position: 'absolute',
    resizeMode: 'cover',
    height: 800,
  },
  fundo: {
    position: 'absolute',
    resizeMode: 'center',
    width: '80%',
    height: 1250,
    opacity: 0.1,
  },
  

});

export default Mark;
