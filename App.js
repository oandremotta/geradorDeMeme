import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, Image} from 'react-native';

export default class PrimeiroProjeto extends Component{
  constructor(props){
    super(props);
    this.state = {texto1:'dsadsasa 1', texto2:'Texto2'};
    this.escrever = this.escrever.bind(this);
  }

  mudarVogais(texto){
    let novoTexto = texto.toLowerCase();
    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g, 'i');
    return novoTexto;
  }
  escrever(t){
    let s = this.state;
    s.texto1 = t;
    s.texto2 = this.mudarVogais(t); 
    this.setState(s);
  }

  render(){
    return(
      <View style={styles.body}>
        <View>
          <Text style={styles.titulo}>Criador de MIMIMI</Text>
        </View>
        <View style={styles.inputArea}>
          <TextInput style={styles.input} placeholder="Digite o seu MIMIMI" onChangeText={this.escrever}></TextInput>
        </View>

        <View style={styles.area}>
          <Text style={[styles.texto, styles.texto1]}>{this.state.texto1.toUpperCase()}</Text>
          <Image style={styles.guri}source={require('./images/mimimi.jpg')}/>
          <Text style={[styles.texto, styles.texto2]}>{this.state.texto2.toUpperCase()}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    backgroundColor:'#999',
    paddingTop: 30,
    flex:1,
    flexDirection:'column',
    alignItems: 'center'
  },
  titulo:{
    fontSize: 30,
    color: '#FFF'
  },
  inputArea:{
    alignSelf: 'stretch' //estica de um lado para o outro
  },
  input:{
    borderWidth:1,
    borderColor: '#999',
    backgroundColor: '#EEE',
    color: '#000',
    height:40,
    margin: 20,
    padding: 10
  },
  area:{
    width:300,
    height: 300,
    marginTop: 10,
    zIndex: 0
  },
  guri:{
    width: 300,
    height: 300,
    marginTop: -70
  },
  texto:{
    fontSize:25,
    color:'#FFF',
    padding: 10,
    backgroundColor: 'transparent',
    fontWeight: "bold",
    textAlign: "center",
    height:70
  },
  texto1:{
    zIndex: 1
  },
  texto2:{
    zIndex: 1,
    marginTop: -70
  }
});
