import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text>Faca o seu Login.</Text>
      <Text> </Text>
      <Text> </Text>

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
      <Text> </Text>      
      <Text> </Text>
      <Button title="Esqueceu a senha?" onPress={handleForgotPassword} />
    </View>
  );
};

export default Login;