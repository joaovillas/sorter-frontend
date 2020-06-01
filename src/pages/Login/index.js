import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import './style.css';
import signInImg from '../../assets/sign_in.svg';
import { Link } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { AuthContext } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();


  async function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      return alert('preencha os campos corretamente!');
    }

    const data = {
      email,
      password
    };

    try {
      const response = login(data);
      if (response) {
        history.push('/');
      }
    } catch (e) {
      console.log(` cai aqui`, e);
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <form autoComplete="on">
          <TextField size="small" type="text" onChange={evt => setEmail(evt.target.value)} variant="outlined" label="Email" />
          <TextField size="small" type="text" variant="outlined" onChange={evt => setPassword(evt.target.value)} type="password" label="Senha" />
          <Button variant="outlined" onClick={handleLogin} color="primary">Login</Button>
          <Link to='/register'><ExitToAppIcon /> Registre-se </Link>
        </form>
      </div>
      <img className="login-container-img" src={signInImg} alt='signInImg' />
    </div>
  )
}