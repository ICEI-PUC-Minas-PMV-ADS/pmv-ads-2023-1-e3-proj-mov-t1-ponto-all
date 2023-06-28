import React, { useState } from 'react';
import { StyleSheet, View, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput, Button, Headline, Text } from 'react-native-paper';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';
import Logo from '../components/Logo';

import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';

import { login, forgotPassword } from '../services/auth.services';

const Login = () => {
  const navigation = useNavigation();
  const { setSigned, setName } = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login({
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);

      if (res && res.user) {
        setSigned(true);
        setName(res.user.name);
        AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
      } else {
        Alert.alert('Atenção', 'Usuário ou senha inválidos!');
      }
    });
  };

  const handleForgotPassword = () => {
    forgotPassword(email)
      .then(() => {
        Alert.alert('Sucesso', 'Um e-mail de recuperação de senha foi enviado para o seu endereço de e-mail.');
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

      <Headline style={styles.textHeader}>Ponto All</Headline>

      <Body>
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          left={<TextInput.Icon name="account" />}
        />
        <Input
          label="Senha"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          left={<TextInput.Icon name="key" />}
        />
        <Button
          style={styles.buttonLogin}
          mode="contained"
          onPress={handleLogin}
        >
          Acessar Sistema
        </Button>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => navigation.navigate('Register')}
        >
          Cadastrar no Sistema
        </Button>
        <Button
          style={styles.buttonLogin}
          mode="text"
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          Esqueceu a senha?
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  
  button: {
    backgroundColor: 'transparent',
    marginBottom: 8,
    
   
  },
  buttonLogin: {
    marginBottom: 8,
    backgroundColor: 'transparent',
    shadowColor: 'lightgray',
    shadowRadius: 5,
  },
   textHeader: {
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: 'white',
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 30,
    marginBottom: 30,
  },
   logo2: {
    position: 'absolute',
    resizeMode: 'cover',
    height: 800,
  },
  logo3: {
    position: 'absolute',
    resizeMode: 'center',
    width: '80%',
    height: 1250,
    opacity: 0.1,
  },
});

export default Login;
