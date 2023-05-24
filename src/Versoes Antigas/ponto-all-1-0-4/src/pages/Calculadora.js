import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Image,
  TouchableOpacity,
  Text,
  Text2,
} from 'react-native';
import {
  Button,
  Menu,
  Appbar,
  Provider as PaperProvider,
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import fingerprint2 from '../Midia/LOGOTIPO_50.png';

import {
  Container,
  Content,
  ImageWrapper,
  Logo,
  HoraAtual,
} from '../components/styles';

const Calculadora = () => {
  const navigation = useNavigation();

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

  const handleLoginPress = () => {
    // Lógica para fazer login e validar as credenciais
    navigation.navigate('Login'); // Navega para a tela Login
  };

  return (
    <SafeAreaProvider>
      <PaperProvider>
        {/* conteúdo do seu aplicativo */}
        <Container>
          <Content>
            <TouchableOpacity onPress={registroPonto}>
              <ImageWrapper>
                <Logo source={fingerprint2} />
              </ImageWrapper>
            </TouchableOpacity>
            <Text> </Text>
            <Text>O seu Sistema de Ponto Digital!!!</Text>

            <Text> </Text>
            <HoraAtual>{horaAtual}</HoraAtual>
            <Text> </Text>
            <Text> </Text>
            <Button color="#198124" mode="contained" onPress={handleLoginPress}>
              {' '}
              Entrar{' '}
            </Button>
          </Content>
        </Container>
      </PaperProvider>
    </SafeAreaProvider>

    /*
    <View>           
      <Button mode="contained" onPress={handleLoginPress}> Entrar2 </Button>     
    </View>
    */
  );
};




export default Calculadora;
