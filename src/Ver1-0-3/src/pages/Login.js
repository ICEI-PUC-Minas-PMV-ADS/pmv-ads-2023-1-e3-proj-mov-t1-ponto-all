import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleLogin = () => {
    // Lógica para fazer login
     navigation.navigate('Home');
    console.log('Fazendo login...');
  };

  const handleForgotPassword = () => {
    // Lógica para recuperar a senha
    console.log('Recuperando senha...');
  };

  return (
    <View>
      <Text>Faca o seu Login2w</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Esqueceu a senha?" onPress={handleForgotPassword} />
    </View>
  );
};

export default Login;