import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';


import Login from './Login';
import Register from './Register';
import Relatorio from './Relatorio';
import Users from './Users';
import Mark from './Mark';


import { Container, Content, HoraAtual } from '../components/Styles';

const Home = () => {
  const [horaAtual, setHoraAtual] = React.useState(
    new Date().toLocaleTimeString()
  );

  const currentTime = new Date().toLocaleTimeString();

  const registroPonto = () => {
    console.log(`Registro realizado! ${currentTime}`);
  };

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setHoraAtual(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    
    { key: 'login', title: 'Login', icon: 'home' },
    { key: 'relatorio', title: 'Relatorio', icon: 'file-document-outline' },
    { key: 'users', title: 'Colaboradores', icon: 'account-supervisor' },
    { key: 'mark', title: 'Marcador', icon: 'fingerprint' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    
    login: Login,
    relatorio: Relatorio,
    users: Users,
    mark: Mark,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;
