import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Container from '../Components/Container';
import Header from '../Components/Header';
import Body from '../Components/Body';
import Input from '../Components/Input';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // lógica de autenticação
    console.log('Usuário:', usuario, 'Senha:', senha);
  };

  return (
    <Container>
      
      <Body>
        <Input
          label="Usuário"
          value={usuario}
          onChangeText={setUsuario}
        />
        <Input
          label="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <Button mode="contained" onPress={handleLogin}>
          Entrar
        </Button>
        <Text style={styles.text}> </Text>
        <Button mode="contained" onPress={() => console.log('Cadastrar')}>
          Cadastrar
        </Button>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default Login;