import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  PermissionsAndroid,
  Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
//import Constants from 'expo-constants';

import Geolocation from 'react-native-geolocation-service';
import { geolocalizacao } from '../services/auth.services';
// Function to get permission for location
const requestLocationPermission = async () => {
   const navigation = useNavigation();
 

  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permissão da Geolocalização',
        message: 'Podemos acessar a localização do dispositivo?',
        buttonNeutral: 'Adiar',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      }
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};
const Geolocalizacao = () => {
  // state to hold location
  const [location, setLocation] = useState(false);
  // function to check permissions and get Location
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then((res) => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
            setLocation(position);
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      }
    });
    console.log(location);
  };
  // Function to Send Location to twitter
  const sendLocation = () => {
    try {
      if (location) {
        const tweet = `latitude is ${location.coords.latitude} and longitude is ${location.coords.longitude}`;
        const url = `https://twitter.com/intent/tweet?text=${tweet}`;
        Linking.openURL(url);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Bem vindo!</Text>
      <Image
        source={{
          uri: 'https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e3-proj-mov-t1-ponto-all/blob/main/docs/img/DNA/LOGOTIPO_200.png?raw=true',
        }}
        style={{ width: 400, height: 150, margin: 15 }}
      />
      {}

      <View
        style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
        <Button title="Receber Localização" onPress={getLocation} />
      </View>
      <Text>Latitude: {location ? location.coords.latitude : null}</Text>
      <Text>Longitude: {location ? location.coords.longitude : null}</Text>
      <View
        style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
        <Button title="Compartilhar Localização" onPress={sendLocation} />
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => navigation.goBack()}>
          Cancelar
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Geolocalizacao;
