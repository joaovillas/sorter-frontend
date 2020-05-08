import React from 'react';
import { TextField, Button } from '@material-ui/core';
import './style.css';

export default function Register() {
  return (
    <div className="register-container">
      <div className="register-with-container">
        <Button variant="outlined" size='small'  href="/register" color="secondary">
          Integração Com Steam
        </Button>
        <Button variant="outlined" size='small'  href="/register" color="secondary">
          Integração Com Facebook
        </Button>
        <Button variant="outlined"  size='small' href="/register" color="secondary">
          Integração Com Gmail
        </Button>
      </div>
      <form className="form-container" noValidate autoComplete="off">
        <TextField id="name" size="small" label="Nome" variant="outlined" />
        <TextField id="email" size="small" label="Email" variant="outlined" />
        <TextField id="password" size="small" label="Senha" variant="outlined" />
        <TextField id="confirm_password" size="small" label="Confirme a senha" variant="outlined" />
        <Button variant="outlined" href="/register" color="secondary">
          Registrar
        </Button>
      </form>
    </div>
  )
}