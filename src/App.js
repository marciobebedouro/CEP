/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import {ScrollView} from 'react-native';
// import ListaComponent from './components/lista_Cep_Components';

import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import axios from 'axios';

const App = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});
  const [erro, setError] = useState('');

  useEffect(() => {
    console.log('useEffect');
    if (cep.length === 8) {
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      axios
        .get(url)
        .then(response => {
          if (response.data && response.status === 200) {
            setEndereco(response.data);
          }
        })
        .catch(e => {
          setError('Endereço não exite');
        });
    }
  }, [cep]);

  const onchangeTextHandler = texto => {
    const regex = /^[0-9\b]+$/;
    if (regex.test(texto)) {
      setCep(texto);
    }
  };

  const exibirEndereco = () => {
    if (endereco && endereco.logradouro) {
      return (
        <View>
          <Text>{endereco.logradouro}</Text>
        </View>
      );
    } else if (erro) {
      return (
        <View>
          <Text>{erro}</Text>
        </View>
      );
    }
  };

  return (
    <View>
      <Text>Digite seu CEP</Text>
      <TextInput
        value={cep}
        keyboardType="numeric"
        maxLength={8}
        onChangeText={texto => onchangeTextHandler(texto)}
      />
      {exibirEndereco()}
    </View>
  );
};

export default App;

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log('constructor');
//   }

//   UNSAFE_componentWillMount() {
//     console.log('componentWillMount');
//   }

//   componentDidMount() {
//     console.log('componentDidMount');
//   }

//   render() {
//     console.log('render');
//     return (
//       // eslint-disable-next-line react-native/no-inline-styles
//       <ScrollView style={{backgroundColor: 'grey'}}>
//         <ListaComponent />
//       </ScrollView>
//     );
//   }
// }
