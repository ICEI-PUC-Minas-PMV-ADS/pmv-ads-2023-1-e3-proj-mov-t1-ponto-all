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

import { useNavigation } from '@react-navigation/native';

const Cadastramento = ({ route }) => {
  //const Abastecimento = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params ? route.params : {};

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [tipo, setTipo] = useState('adm');
  const [nome, setNome] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [rg, setRg] = useState(null);
  const [nasc, setNasc] = useState(null);
  const [cargo, setCargo] = useState(null);
  const [jornada, setJornada] = useState(null);
  const [admissao, setAdmissao] = useState(null);
  const [senha, setSenha] = useState(null);
  const [preco, setPreco] = useState(null);
  const [valor, setValor] = useState(null);
  const [odometro, setOdometro] = useState(null);
  const [data, setData] = useState(moment(new Date()).format('DD/MM/YYYY'));

 

  const handleSalvar = () => {
    console.log('Salvar');
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

        <TouchableOpacity onPress={() => setShow(true)}>
          <Input
            label="Data Cadastro"
            value={data}
            left={<TextInput.Icon name="calendar" />}
            editable={false}
          />
        </TouchableOpacity>

        <Input
          label="Nome Completo"
          value={nome}
          onChangeText={(text) => setNome(text)}
          left={<TextInput.Icon name="account" />}
        />

        <Input
          label="Cpf"
          value={cpf}
          onChangeText={(text) => setCpf(text)}
          left={<TextInput.Icon name="file-document-multiple" />}
        />
        <Input
          label="RG"
          value={rg}
          onChangeText={(text) => setRg(text)}
          left={<TextInput.Icon name="file-document" />}
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
          left={<TextInput.Icon name="currency-brl" />}
        />
        <Input
          label="Jornada"
          value={jornada}
          onChangeText={(text) => setJornada(text)}
          left={<TextInput.Icon name="timetable" />}
        />
        <Input
          label="Admissao"
          value={admissao}
          onChangeText={(text) => setAdmissao(text)}
          left={<TextInput.Icon name="timetable" />}
        />

        <Input
          label="Odomêtro"
          value={odometro}
          onChangeText={(text) => setOdometro(text)}
          left={<TextInput.Icon name="camera-timer" />}
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
//export default Abastecimento;
