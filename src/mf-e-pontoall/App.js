import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, TextInput, Button, Text, Avatar } from 'react-native-paper';

import Container from './src/Components/Container';
import Header from './src/Components/Header';
import Body from './src/Components/Body';
import Input from './src/Components/Input';
import Logomarca from './src/Components/Logomarca';

const App = () => {
  const [gas, setGas] = React.useState('');
  const [eta, setEta] = React.useState('');
  const [res, setRes] = React.useState('');

  return (
    <Container>
      <Avatar.Image size={180} source={require('./src/Img/ponto all LOGOTIPO3.png')} />

      <Header title={'Ponto All'} subtitle={'Ponto Digital'} />
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

        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Login
        </Button>
        <br />
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Cadastre-se
        </Button>
        <Text style={styles.text}> </Text>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default App;
