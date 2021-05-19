import React from 'react';
import './App.css';

import { Container, Typography } from '@material-ui/core';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import 'fontsource-roboto'

function App() {
  return (
    <Container component="article" maxWidth="sm">
    <Typography variant="h4" component="h1" align="center">Formulario de Cadastro</Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm}/>
    </Container>
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;
