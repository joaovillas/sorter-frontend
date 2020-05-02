import React from 'react';
import { TextField, Button } from '@material-ui/core';
import './style.css';
import welcomeImg from '../../assets/welcome.svg';

export default function Register() {
  return (
    <div className="register-container">
      <img className="register-container-img" src={welcomeImg} alt='welcome' />
      <div className="register-with-container">
        <button>Integracao Steam</button>
        <button>Integracao Facebook</button>
        <button>Integracao Sei la</button>
      </div>
      <form className="form-container" noValidate autoComplete="off">
        <TextField id="name" size="small" label="Nome" variant="outlined" />
        <TextField id="email" size="small" label="Email" variant="outlined" />
        <TextField id="password" size="small" label="Senha" variant="outlined" />
        <TextField id="confirm_password" size="small" label="Confirme a senha" variant="outlined" />
        <Button variant="outlined" href="/register" color="primary">
          Registrar
        </Button>
      </form>
    </div>
  )
}