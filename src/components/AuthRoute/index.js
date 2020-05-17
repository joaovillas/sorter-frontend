import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function AuthRoute({ Component, ...rest }) {

  const isAuthenticated = !!(localStorage.getItem('user_token') && localStorage.getItem('user'));
  rest.isAuthenticated = isAuthenticated;
  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticated ? <Component {...rest} /> :
          <Redirect to='/login' />
        }
      }
    />
  )

}