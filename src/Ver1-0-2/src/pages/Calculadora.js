import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';

const Calculadora = () => {
  
   const goBack = () => console.log('Last Page');



  const [gas, setGas] = useState('');
  const [eta, setEta] = useState('');
  const [res, setRes] = useState('');

  return (  
     
    <Container>
      <Header 
      
      goBack={REACT_NAVIGATION_DEVTOOLS} //investigar como ativar
      title={'Ponto ALL - Home'} 
       />      

      <Body>
        <Input
          label="Usuario"
          value={gas}
          onChangeText={(text) => setGas(text)}
        />
        
        <Input
          label="Senha"
          value={eta}
          onChangeText={(text) => setEta(text)}
        />
        <Button color='#00a6ff' mode="contained" onPress={() => console.log('Pressed')}>
          Entrar
        </Button>
        
        <Text style={styles.text}> {res}</Text>

        <Text> Reservado para Home Page ou Index Logado...</Text>      

        
           

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

export default Calculadora;