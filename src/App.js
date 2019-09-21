/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import ListaComponent from './components/lista_Cep_Components';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  UNSAFE_componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <ScrollView style={{backgroundColor: 'grey'}}>
        <ListaComponent />
      </ScrollView>
    );
  }
}
