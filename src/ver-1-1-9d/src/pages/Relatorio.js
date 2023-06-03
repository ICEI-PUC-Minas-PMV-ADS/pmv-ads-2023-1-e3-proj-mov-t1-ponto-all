import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Appbar, TextInput, Button, Text, Checkbox, RadioButton } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';
import Input from '../components/Input';


const usersDatabase = [
  {
    name: "João",
    pontos: [
      {
        day: "01/05/2023",
        fristShiftTime: '8:00 -> 12:00',
        secondShiftTime: '13:00 -> 17:00',
        totalShift: "8:00hs"
      },
      {
        day: "02/05/2023",
        fristShiftTime: '8:20 -> 12:20',
        secondShiftTime: '13:20 -> 17:20',
        totalShift: "8:00hs"
      },
      {
        day: "03/05/2023",
        fristShiftTime: '8:23 -> 11: 23',
        secondShiftTime: '13:23 -> 17:23',
        totalShift: "7:00hs"
      },
      {
        day: "04/05/2023",
        fristShiftTime: '8:22 -> 12:22',
        secondShiftTime: '13:22 -> 16:22',
        totalShift: "7:00hs"
      },
      {
        day: "05/05/2023",
        fristShiftTime: '8:01 -> 12:01',
        secondShiftTime: '13:01 -> 18:01',
        totalShift: "9:00hrs"
      },
      {
        day: "06/05/2023",
        fristShiftTime: '8:12 -> 12: 12',
        secondShiftTime: '13:12 -> 17:12',
        totalShift: "8:00hs"
      },
      {
        day: "07/05/2023",
        fristShiftTime: '8:07 -> 12:07',
        secondShiftTime: '13:07 -> 17:07',
        totalShift: "8:00hrs"
      },
      {
        day: "08/05/2023",
        fristShiftTime: '8:00 -> 12:00',
        secondShiftTime: '13:00 -> 17:00',
        totalShift: "8:00hs"
      },
      {
        day: "09/05/2023",
        fristShiftTime: '8:00 -> 12:00',
        secondShiftTime: '13:00 -> 17:00',
        totalShift: "8:00hs"
      },
      {
        day: "10/05/2023",
        fristShiftTime: '8:00 -> 12:00',
        secondShiftTime: '13:00 -> 17:00',
        totalShift: "8:00hs"
      },
      {
        day: "1/05/2023",
        fristShiftTime: '8:00 -> 12:00',
        secondShiftTime: '13:00 -> 17:00',
        totalShift: "8:00hs"
      },
      {
        day: "12/05/2023",
        fristShiftTime: '8:00 -> 12:00',
        secondShiftTime: '13:00 -> 17:00',
        totalShift: "8:00hs"
      }
    ]
  }
]

const Relatorio = () => {
  const [gas, setGas] = useState('');
  const [eta, setEta] = useState('');
  const [res, setRes] = useState('');
  const [user, setUser] = useState(null)
  const [type, setType] = useState()
  const [error, setError] = useState(null)

  const [checked, setChecked] = React.useState(false);

  const findUser = () => {
    let user = usersDatabase.find(user => user.name === gas)
    
    if(user) {
      setError(null)
      setUser(user)
    } else {
      setUser(null)
      setError("usuário não encontrado")
    }
  }

  return (
    <Container>
      <Header
        goBack={REACT_NAVIGATION_DEVTOOLS} //investigar como ativar
        title={'Ponto ALL - Relatorio'}
      />

      <Body>
        <Input
          label="Usuario"
          value={gas}
          onChangeText={(text) => setGas(text)}
        />
        {/*<Input
          label="Periodo"
          value={eta}
          onChangeText={(text) => setEta(text)}
        />
       */}
        <View style={styles.containerRadio}>
          <View style={styles.containerRadioItem}>
            <RadioButton
              value="7days"
              status={type === 7 ? 'checked' : 'unchecked'}
              color={'green'}
              onPress={() => setType(7)}
            />
            <Text>7 dias</Text>
          </View>

          <View style={styles.containerRadioItem}>
            <RadioButton
              value="15days"
              status={type === 15 ? 'checked' : 'unchecked'}
              color={'green'}
              onPress={() => setType(15)}
            />
            <Text>15 dias</Text>
          </View>

           <View style={styles.containerRadioItem}>
            <RadioButton
              value="30days"
              status={type === 30 ? 'checked' : 'unchecked'}
              color={'green'}
              onPress={() => setType(30)}
            />
            <Text>30 dias</Text>
          </View>
        </View>
        <Button color='#198124' mode="contained" onPress={() => findUser()}>
          Emitir Relatorio
        </Button>


        { user && 
          <View style={styles.relatorioContainer}>
              <Text style={{fontWeight: 300}}>Funcionário Selecionado: {<b>{user.name}</b>}</Text>
              <View style={styles.listsContainer}>
                {user.pontos.slice(0, type).map(ponto => {
                  return <View style={styles.listContainer}>
                    <View style={styles.pontoInfo}>
                      <Text style={{fontWeight: 400}}>{ponto.day}</Text>
                      <Text style={{fontWeight: 300}}>{ponto.fristShiftTime}</Text>
                      <Text style={{fontWeight: 300}}>{ponto.secondShiftTime}</Text>
                    </View>
                    <View style={styles.pontoTotal}>
                      <Text style={{fontWeight: 400}}>{ponto.totalShift}</Text>
                    </View>
                  </View>
                })}
              </View>
              
          </View>
          
        }

        { error &&
            
            <View style={{display: "flex", justifyContent: "center", alignItems: 'center', margin: 10}}>
                {error}
            </View>
        }
         
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
  relatorioContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    margin: "10px 0",
    padding: 10,
    borderRadius: 5,
  
  },
  listsContainer: {
    display: 'flex',
    flexDirection: "column",
    gap: 10
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
    boxShadow: "1px 1px 5px #00000054",
    padding: 10,
  },
  pontoInfo: {
     display: "flex",
    flexDirection: "column",
    gap: 3,
  }


  
});

export default Relatorio;