import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Container, Content, HoraAtual } from '../components/Styles';

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

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <Container>
          <Content>
            <Text> </Text>
            <HoraAtual>{horaAtual}</HoraAtual>
            <Text> </Text>
            <Text> </Text>
          </Content>
        </Container>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default Mark;
