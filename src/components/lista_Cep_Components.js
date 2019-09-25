import React, {Component} from 'react';
import {View} from 'react-native';
import axios from 'axios';
import ItensComponent from './itens_Cep_Components';
const url = 'https://viacep.com.br/ws/14700570/json/';
// const url2 = 'https://viacep.com.br/ws/01001000/json/';

export default class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {listaItens: []};
  }

  async UNSAFE_componentWillMount() {
    const itens = await axios.get(url);
    this.setState({listaItens:[itens.data]});
    console.log(itens);
  }

  
  // async UNSAFE_componentWillMount() {
  //   const itens = await axios.get(url2);
  //   this.setState({listaItens:[itens.data]});
  //   console.log(itens);
  // }






  render() {
    return (
      <View>
        {this.state.listaItens.map(item => (
          <ItensComponent
            key={item.cep}
            cep={item.cep}
            logradouro={item.logradouro}
            complemento={item.complemento}
            bairro={item.bairro}
            localidade={item.localidade}
            uf={item.uf}
          />
        ))}
      </View>
    );
  }
}

//   cep: "14700-570",
// logradouro: "Rua Natal Butião",
// complemento: "",
// bairro: "Jardim Ciranda",
// localidade: "Bebedouro",
// uf: "SP",
