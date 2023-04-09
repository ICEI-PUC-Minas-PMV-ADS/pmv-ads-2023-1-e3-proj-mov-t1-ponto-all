import React from 'react';
import { StyleSheet, View } from 'react-native';

const Container = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // este conteudo aqui ta refletindo na logo mas ta puxando tudo, temos que corrigir,//
    color: 'red',
    backgroundColor: '#FFF',
    colorFont: '#DCDCDC',
    textAlign: 'center',
    margin: 0,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    fontSize: 20,
    textShadowColor: '#708090',
  },
    
});

export default Container;
