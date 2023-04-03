import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, TextInput, Button, Text, Avatar } from 'react-native-paper';
import Navigation from './src/Pages/Navigation';



import Container from './src/Components/Container';
import Header from './src/Components/Header';
import Body from './src/Components/Body';
import Input from './src/Components/Input';
import Logomarca from './src/Img/ponto all LOGOTIPO3.png';
import Login from './src/Pages/Login';
import Home from './src/Pages/Home';

const App = () => {
  const [gas, setGas] = React.useState('');
  const [eta, setEta] = React.useState('');
  const [res, setRes] = React.useState('');

  return (
    <Container>
      <Avatar.Image size={180} source={Logomarca} />

      <Header title={'Ponto All'} subtitle={'Ponto Digital'} />
      <Body>
        
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Login
        </Button>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Cadastre-se
        </Button>
        <Text style={styles.text}> </Text>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
