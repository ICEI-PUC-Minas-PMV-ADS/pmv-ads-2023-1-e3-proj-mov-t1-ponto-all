import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { List, Text, FAB } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    tipo: 0,
    data: '01/01/2022',
    preco: 6.77,
    valor: 100,
    odometro: 22000,
    nome: 'joao',
    cpf: 10000,
    rg: 'MG10101010',
    nasc: '27/04/1988',
    cargo: 'supervisor',
    jornada: 44,
    admissao: '12/05/2008',
    senha: 9999,
    
    
  },
  {
    id: 1,
    tipo: 1,
    data: '15/01/2022',
    preco: 4.77,
    valor: 150,
    odometro: 25000,
    nome: 'joao',
    cpf: 10000,
    rg: 'MG10101010',
    nasc: '27/04/1988',
    cargo: 'supervisor',
    jornada: 44,
    admissao: '12/05/2008',
    senha: 9999,
  },
];

const Gastos = () => {

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <List.Item
      title={
        'R$' + item.valor.toFixed(2) + ' (R$' + item.preco.toFixed(2) + ')'
      }
      description={item.odometro + ' km'}
      left={(props) => (
        <List.Icon
          {...props}
          color={item.tipo == 0 ? 'blue' : 'green'}
          icon="account"
        />
      )}
      right={(props) => (
        <Text {...props} style={{ alignSelf: 'center' }}>
          {' '}
          {item.data}{' '}
        </Text>
      )}
      onPress={() => navigation.navigate('Cadastramento', {item})}
    />
  );

  return (
    <Container>
      <Header 
      goBack={REACT_NAVIGATION_DEVTOOLS} //investigar como ativar
      title={'Ponto ALL - Perfil'} />
      <Body>
      <Text> Tela para apresentar as informações para usuario logado</Text>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <FAB
          style={styles.fab}
          small
          icon="account-plus"
          onPress={() => navigation.navigate('Cadastramento')}
        />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Gastos;
