import React, { useState } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import { Appbar, TextInput, Button, Checkbox } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';

const Perfil3 = () => {
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
        title={'Ponto ALL - Meus Dados'}
      />

      <Body>
        <Input
          label="Matricula"
          value={matr}
          onChangeText={(text) => setEta(text)}
        />
        
        <Input
          label="Nome Completo"
          value={nome}
          onChangeText={(text) => setGas(text)}
        />
        <Input label="CPF" value={cpf} onChangeText={(text) => setEta(text)} />
        <Input label="RG" value={rg} onChangeText={(text) => setEta(text)} />
        <Input
          label="Data de Nascimento"
          value={nasc}
          onChangeText={(text) => setEta(text)}
        />
        <Input
          label="Cargo"
          value={carg}
          onChangeText={(text) => setEta(text)}
        />
        <Input
          label="Jornada Semanal e Codigo"
          value={jorn}
          onChangeText={(text) => setEta(text)}
        />
        <Input
          label="Admissão"
          value={adms}
          onChangeText={(text) => setEta(text)}
        />

        {/*} 
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Registrar Ponto
        </Button>
        <Text style={styles.text}> {res}</Text>
        */}
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

export default Perfil3;
