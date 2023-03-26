import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, Avatar } from 'react-native-paper';

const Logomarca = (props) => {
  return <TextInput style={styles.avatar} {...props} />;
};

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    marginBottom: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItens:'center',
    
  },
});

export default Logomarca;
