import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';

const Users = () => {
  const [nome, setNome] = useState('');
  const [nasc, setNasc] = useState('');
  const [matr, setMatr] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [carg, setCarg] = useState('');
  const [jorn, setJorn] = useState('');
  const [adms, setAdms] = useState('');
  const [res, setRes] = useState('');

  return (
    <Container>
      <Header 
      goBack={REACT_NAVIGATION_DEVTOOLS} //investigar como ativar
      title={'Ponto ALL - Colaboradores'}  />

      <Body>
            <Input
          label="6000- Daniel Souza" 
          value={matr}
          onChangeText={(text) => setEta(text)}
        />
        <Input
          label="4001 - Maykon"
          value={nome}
          onChangeText={(text) => setGas(text)}
        />
        <Input
         label="2000 - Roger"
          value={cpf}
          onChangeText={(text) => setEta(text)}
        />
         <Input
          label="6003 - Marcolino"
          value={rg}
          onChangeText={(text) => setEta(text)}
        />
    
        
          
         
        
        <Text style={styles.text}> {res}</Text>
        <Button color='#f5762f' mode="contained" onPress={() => console.log('Pressed')}>
          Editar Colaboradores
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

export default Users;