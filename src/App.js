import React from 'react';
import './App.css';

import { Container, Typography } from '@material-ui/core';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import 'fontsource-roboto'

function App() {
  return (
    <Container component="article" maxWidth="sm">
    <Typography variant="h4" component="h1" align="center">Formulario de Cadastro</Typography>
      <FormularioCadastro enviarForm={enviarForm} validarCPF={validarCPF}/>
    </Container>
  );
}

function enviarForm(dados){
  console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido: false, texto: "CPF deve ter 11 digitos"}
  } else {
    return {valido: true, texto: ""}
  }
}

export default App;
