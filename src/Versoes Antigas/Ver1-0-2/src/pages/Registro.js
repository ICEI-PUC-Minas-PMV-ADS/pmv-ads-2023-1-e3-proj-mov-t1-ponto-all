import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  Appbar,
  TextInput,
  Button,
  Provider as PaperProvider,
  Menu,
} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';
import fingerprint2 from '../Midia/LOGOTIPO_50.png';

const Registro = () => {
  //const [gas, setGas] = useState('');
  //const [eta, setEta] = useState('');
  // const [res, setRes] = useState('');

  return (
    <Container>
      <Header
      goBack={REACT_NAVIGATION_DEVTOOLS} //investigar como ativar
       title={'Ponto ALL'} />

      <Body>
                
        <Input
          label="Registrar Ponto"
          value={eta}
          onChangeText={(text) => setEta(text)}
        />
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Registrar
        </Button>
        <Text style={styles.text}> {res}</Text>
        
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

export default Registro;
