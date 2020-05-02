import React from 'react';
import { TextField, Button } from '@material-ui/core';
import './style.css';
import signInImg from '../../assets/sign_in.svg';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <form>
          <TextField size="small" variant="outlined" label="Email"/>
          <TextField size="small" variant="outlined" type="password" label="Senha"/>
          <Button variant="outlined" href="/" color="primary">Login</Button>
          <Link to='/register'><ExitToAppIcon/> Registre-se </Link>
        </form>
      </div>
      <img className="login-container-img" src={signInImg} alt='signInImg' />
    </div>
  )
}