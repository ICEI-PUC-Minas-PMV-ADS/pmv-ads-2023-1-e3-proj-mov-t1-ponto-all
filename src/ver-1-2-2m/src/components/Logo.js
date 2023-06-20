import React from 'react';
import {StyleSheet, Image} from 'react-native';

const Logo = () =>{
  return <Image style={styles.image} source={require('../Midia/LOGOTIPO_50.png')} />
};

const styles = StyleSheet.create({
 image:{
    width: 180,
    height: 70,
    borderRadius: 1
  },
});

export default Logo;