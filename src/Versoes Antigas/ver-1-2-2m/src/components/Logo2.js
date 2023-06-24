import React from 'react';
import {StyleSheet, Image} from 'react-native';

const Logo2 = () =>{
  return <Image style={styles.image} source={require('../Midia/dedinho.png')} />
};

const styles = StyleSheet.create({
 image:{
    width: 180,
    height: 70,
    borderRadius: 1
  },
});

export default Logo2;