import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const Header = ({ title,subtitle }) => {
  return (
    <Appbar.Header>
      <Appbar.Content title={title} subtitle={subtitle} />
    </Appbar.Header>
  );
  
};



export default Header;
