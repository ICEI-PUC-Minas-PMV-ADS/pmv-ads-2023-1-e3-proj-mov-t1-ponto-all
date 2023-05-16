import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Appbar, TextInput, Button, Text, Checkbox, RadioButton } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';

const Relatorio = () => {
  const [gas, setGas] = useState('');
  const [eta, setEta] = useState('');
  const [res, setRes] = useState('');

  const [checked, setChecked] = React.useState(false);

  return (
    <Container>
      <Header
        goBack={REACT_NAVIGATION_DEVTOOLS} //investigar como ativar
        title={'Ponto ALL - Relatorio'}
      />

      <Body>
        <Input
          label="Usuario"
          value={gas}
          onChangeText={(text) => setGas(text)}
        />
        {/*<Input
          label="Periodo"
          value={eta}
          onChangeText={(text) => setEta(text)}
        />
       */}
        <View style={styles.containerRadio}>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              //status={tipo === 'gas' ? 'checked' : 'unchecked'}
              color={'red'}
              onPress={() => setTipo('gas')}
            />
            <Text>Ultimo Mês Fechado</Text>
          </View>

          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              //status={tipo === 'eta' ? 'checked' : 'unchecked'}
              color={'green'}
              onPress={() => setTipo('eta')}
            />
            <Text>Mês em Andamento</Text>
          </View>
        </View>
        <Button color='#198124' mode="contained" onPress={() => console.log('Pressed')}>
          Emitir Relatorio
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
   containerRadio: {
    flexDirection: 'row',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  containerRadioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  
});

export default Relatorio;
