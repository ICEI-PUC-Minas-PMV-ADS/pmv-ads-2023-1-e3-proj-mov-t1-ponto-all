import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {
  RadioButton,
  Text,
  TextInput,
  Button,
  Appbar,
} from 'react-native-paper';

import moment from 'moment';

import DateTimePicker from '@react-native-community/datetimepicker';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';
import Input from '../components/Input';

import {
  getCadastramento,
  insertCadastramento,
} from '../services/CadastramentoServicesDB';

import { useNavigation } from '@react-navigation/native';

const Cadastramento = ({ route }) => {
  const navigation = useNavigation();

  const [cadastramento, setCadastramento] = useState([]);

  useEffect(() => {
    getCadastramento().then((dados) => {
      setCadastramento(dados);
    });
  }, []);

  const { item } = route.params ? route.params : {};

  const [show, setShow] = useState(false);
  const [tipo, setTipo] = useState('adm');
  const [nome, setNome] = useState(null);
  const [nasc, setNasc] = useState(null);
  const [cargo, setCargo] = useState(null);
  const [jornada, setJornada] = useState(null);
  const [senha, setSenha] = useState(null);

  const [data, setData] = useState(moment(new Date()).format('DD/MM/YYYY'));

  const handleSalvar = () => {

    if (item) {

       insertCadastramento(
      {
        tipo: '0',
        nome: 'Daniel',
        nasc: '27/07/1985',
        cargo: 'gestor',
        jornada: '40',
        senha: '12345',
      }
    ).then((dados)=>{

      console.log(dados);

    });

    } else {
    }
  };

  const handleExcluir = () => {
    console.log('Exluir');
  };

  return (
    <Container>
      <Header title={'Ponto ALL - Logado'}>
        <Appbar.Action icon="check" onPress={handleSalvar} />
        {item && <Appbar.Action icon="trash-can" onPress={handleExcluir} />}
      </Header>

      <Body>
        <View style={styles.containerRadio}>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={tipo === 'adm' ? 'checked' : 'unchecked'}
              color={'blue'}
              onPress={() => setTipo('adm')}
            />
            <Text>Usuario</Text>
          </View>

          <View style={styles.containerRadioItem}>
            <RadioButton
              value="first"
              status={tipo === 'usu' ? 'checked' : 'unchecked'}
              color={'green'}
              onPress={() => setTipo('usu')}
            />
            <Text>Administrador</Text>
          </View>
        </View>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={'date'}
            is24Hour={true}
            display="default"
            onTouchCancel={() => setShow(false)}
            onChange={(event, date) => {
              setShow(false);
              setData(moment(date).format('DD/MM/YYYY'));
            }}
          />
        )}

        <TouchableOpacity onPress={() => setShow(true)}></TouchableOpacity>

        <Input
          label="Nome Completo"
          value={nome}
          onChangeText={(text) => setNome(text)}
          left={<TextInput.Icon name="account" />}
        />

        <Input
          label="Data de Nascimento"
          value={nasc}
          onChangeText={(text) => setNasc(text)}
          left={<TextInput.Icon name="calendar-start" />}
        />
        <Input
          label="Cargo"
          value={cargo}
          onChangeText={(text) => setCargo(text)}
          left={<TextInput.Icon name="account-details-outline" />}
        />
        <Input
          label="Jornada"
          value={jornada}
          onChangeText={(text) => setJornada(text)}
          left={<TextInput.Icon name="timetable" />}
        />
        <Input
          label="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          left={<TextInput.Icon name="cellphone-key" />}
        />

        <Button mode="contained" style={styles.button} onPress={handleSalvar}>
          Salvar
        </Button>

        {item && (
          <Button
            mode="contained"
            color={'red'}
            style={styles.button}
            onPress={handleExcluir}>
            Excluir
          </Button>
        )}
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
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
  button: {
    marginBottom: 8,
  },
});
export default Cadastramento;
