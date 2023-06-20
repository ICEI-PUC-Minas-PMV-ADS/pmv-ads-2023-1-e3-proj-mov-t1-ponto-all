import React, { useState } from 'react';
import { StyleSheet, View, Alert, Keyboard } from 'react-native';
import {
  Appbar,
  TextInput,
  Button,
  Text,
  RadioButton,
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Logo from '../components/Logo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Container from './../components/Container';
import Header from './../components/Header';
import Body from './../components/Body';
import Input from './../components/Input';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Redefinir = () => {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const recover = () => {
    if (email !== ' ') {
      console.log(email);
      AsyncStorage()
      .sendPsswordResetEmail(email)
    }
  };
  const navigation = useNavigation();

  return (
    <Container>
      <Header title={'Recuperar Senha'} />
      <Body>
        <Input
          label="Digite seu e-mail para recuperar a senha:"
          keyboardType="  "
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Button icon="email" onPress={() => console.log(recover)}>
          Recuperar Senha
        </Button>
        <Button icon="arrow-u-left-top" onPress={() => navigation.goBack()}>
          Voltar
        </Button>
        <Text style={styles.text}> {''} </Text>
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

export default Redefinir;
