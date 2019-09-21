import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ItensComponent = props => {
  return (
    <View style={estilo.container}>
      <View style={estilo.cep}>
        <Text style={estilo.cep}>{props.cep}</Text>
        <Text style={estilo.logradouro}>{props.logradouro}</Text>
        <Text style={estilo.complemento}> {props.complemento}</Text>
        <Text style={estilo.bairro}>{props.bairro}</Text>
        <Text style={estilo.localidade}>{props.localidade}</Text>
        <Text style={estilo.uf}>{props.uf}</Text>
      </View>
    </View>
  );
};

const estilo = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },

  cep: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5,
  },

  logradouro: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5,
  },

  complemento: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5,
  },

  bairro: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5,
  },

  localidade: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5,
  },

  uf: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5,
  },
});

export default ItensComponent;
