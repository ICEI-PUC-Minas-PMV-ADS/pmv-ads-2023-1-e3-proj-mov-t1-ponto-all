import React from 'react';
import {View, Image, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 60, 
    marginVertical:8,
    marginTop:8,
    height:89
  },
  tinyLogo: {
    width: 250,
    height: 250,
  },
 
});

const Redefinir = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('src/mf-e-pontoall/src/Img/LOGOMARCA_200_Branca.png')}
      />
      <separador/>
      <Button
        title="trocar Senha"
        onPress={() => Alert.alert('Simple Button pressed')}
      />      'Redefinir ou trocar senha'
       <Button
        title="Cancelar cadastro"
        onPress={() => Alert.alert('Simple Button pressed')}
      />' Remover cadestro'
     <Button
        title="Voltar "
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    
    </View>
  );
};

export default Redefinir;