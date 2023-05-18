import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import Container from '../Components/Container';
import Header from '../Components/Header';
import Body from '../Components/Body';
import Input from '../Components/Input';

const Home = () => {
  return (
    <Container>
      <Header title={'Ponto All'} subtitle={'Ponto Digital'} />
      <Body>
        <Input label="Entrada" />
        <Input label="Saída para almoço" />
        <Input label="Retorno do almoço" />
        <Input label="Saída" />
      </Body>
    </Container>
  );
};

export default Home;

