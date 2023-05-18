import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';

const Colabs4 = () => {
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
          label="0212 - João Augusto Lima Santos" 
          value={matr}
          onChangeText={(text) => setEta(text)}
        />
        <Input
          label="0213 - Mauricio de Souza"
          value={nome}
          onChangeText={(text) => setGas(text)}
        />
        <Input
         label="1145 - Pablo Silveira"
          value={cpf}
          onChangeText={(text) => setEta(text)}
        />
         <Input
          label="1147 - Sergio de Alcantara"
          value={rg}
          onChangeText={(text) => setEta(text)}
        />
        <Input
          label="0874 - Mariana Almeida silva"
          value={nasc}
          onChangeText={(text) => setEta(text)}
        />
          <Input
          label="2201 - Jean Max Bartoldo"
          value={carg}
          onChangeText={(text) => setEta(text)}
        />
        <Input
          label="3398 - Marcia Rodrigues Guedes"
          value={jorn}
          onChangeText={(text) => setEta(text)}
        />
        <Input
          label="3399 - Isabela Yamakoto"
          value={adms}
          onChangeText={(text) => setEta(text)}
        />
        
          
         
        <Button color='#198124' mode="contained" onPress={() => console.log('Pressed')}>
          Adicionar Colaboradores
        </Button>
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

export default Colabs4;