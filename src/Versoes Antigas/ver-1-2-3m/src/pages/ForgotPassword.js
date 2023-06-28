import React, { useState } from 'react';
import { StyleSheet, View, Alert, Image } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import Container from '../components/Container';
import Logo from '../components/Logo';
import Login from './Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { forgotPassword } from '../services/auth.services';

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    forgotPassword(email)
      .then(() => {
        Alert.alert('Sucesso', 'Um e-mail de recuperação de senha foi enviado para o seu endereço de e-mail.');
        navigation.navigate('Login');
      })
      .catch((error) => {
        Alert.alert('Erro', 'Não foi possível enviar o e-mail de recuperação de senha. Por favor, verifique o endereço de e-mail e tente novamente.');
        console.error(error);
      });
  };

  return (
    <Container>
      <Image style={styles.logo2} source={require('../Midia/fundo.jpg')} />
      <Image style={styles.logo3} source={require('../Midia/dedinho.png')} />
      <View style={styles.header}>
        <Logo />
      </View>

      <Headline style={styles.textHeader}>Recuperar Senha</Headline>

      <View style={styles.form}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          style={styles.input}
        />

        <Button
          style={styles.button}
          mode="contained"
          onPress={handleForgotPassword}
        >
          Enviar Email de Recuperação
        </Button>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => navigation.goBack()}>
          Cancelar
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  form: {
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
  },
  logo2: {
    position: 'absolute',
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  logo3: {
    position: 'absolute',
    resizeMode: 'center',
    width: '80%',
    height: '100%',
    opacity: 0.1,
  },
});

export default ForgotPassword;
