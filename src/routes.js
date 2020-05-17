import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import DrawInfo from './pages/DrawInfo';
import NewDraw from './pages/NewDraw';
import JoinDraw from './pages/JoinDraw';
import AuthRoute from './components/AuthRoute';
import GuestRoute from './components/GuestRoute';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path='/' exact Component={Home} />
        <GuestRoute path='/register' Component={Register} />
        <GuestRoute path='/login' Component={Login} />
        <AuthRoute path='/draw/info/:draw_id' exact Component={DrawInfo} />
        <AuthRoute path='/draw/new' exact Component={NewDraw} />
        <AuthRoute path='/draw/join' Component={JoinDraw} />
      </Switch>
    </BrowserRouter>
  );
}