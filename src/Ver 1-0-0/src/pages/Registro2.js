import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';
import moment from 'moment';

const Registro2 = () => {
  const [gas, setGas] = useState('');
  const [eta, setEta] = useState('');
  const [res, setRes] = useState('');

  return (
    <Container>
      <Header 
      
      goBack={REACT_NAVIGATION_DEVTOOLS} //investigar como ativar
      title={'Ponto ALL - Registro de Ponto'}  />

      <Body>
        <Input
          label="Registrar Ponto"
          value={gas}
          onChangeText={(text) => setGas(text)}
        />
        <Input
          label="Data do Sistema"
          value={eta}
          onChangeText={(text) => setEta(text)}
        />
        <Button color='#198124' mode="contained" onPress={() => console.log('Pressed')}>
          Registrar Ponto
        </Button>
        <Text style={styles.text}> {res}</Text>
                

        
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    margin: 8,
  },
});

export default Registro2;