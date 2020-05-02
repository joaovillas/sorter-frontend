import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import DrawInfo from './pages/DrawInfo';
import NewDraw from './pages/NewDraw';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/draw/info/:draw_id' exact component={DrawInfo} />
        <Route path='/draw/new' exact component={NewDraw} />
      </Switch>
    </BrowserRouter>
  );
}