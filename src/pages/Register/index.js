import React from 'react';
import { TextField, Button, Typography, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel } from '@material-ui/core';
import './style.css';

export default function Register() {
  return (
    <div className="register-container">
      <form className="form-container" noValidate autoComplete="off">
        <Typography variant="h4">Registre-se</Typography>
        <TextField id="name" color="primary" size="small" label="Nome" variant="outlined" />
        <TextField id="email" color="primary" size="small" label="Email" variant="outlined" />
        <TextField id="password" color="primary" size="small" label="Senha" variant="outlined" />
        <TextField id="confirm_password" color="primary" size="small" label="Confirme a senha" variant="outlined" />
        <FormControl component="fieldset" >
          <FormLabel component="legend">Gênero</FormLabel>
          <RadioGroup className="radio-group" aria-label="quiz" name="gender" >
            <FormControlLabel color="primary" value="M" control={<Radio />} label="Masculino" />
            <FormControlLabel value="F" control={<Radio />} label="Feminino" />
            <FormControlLabel value="N" control={<Radio />} label="Prefiro não informar" />
          </RadioGroup>
        </FormControl>
        <Button variant="outlined" href="/register" color="primary">
          Registrar
        </Button>
      </form>
    </div>
  )
}