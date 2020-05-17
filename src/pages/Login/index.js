import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import './style.css';
import signInImg from '../../assets/sign_in.svg';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import api from '../../api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      return alert('preencha os campos corretamente!');
    }

    const data = {
      email,
      password
    };

    const response = await api.post('/user/login', data);
    localStorage.setItem('user_token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));

    return window.location = '/';
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <form>
          <TextField size="small" type="email" onChange={evt => setEmail(evt.target.value)} variant="outlined" label="Email" />
          <TextField size="small" variant="outlined" onChange={evt => setPassword(evt.target.value)} type="password" label="Senha" />
          <Button variant="outlined" href="/" onClick={handleLogin} color="primary">Login</Button>
          <Link to='/register'><ExitToAppIcon /> Registre-se </Link>
        </form>
      </div>
      <img className="login-container-img" src={signInImg} alt='signInImg' />
    </div>
  )
}