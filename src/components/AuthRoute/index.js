import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export default function AuthRoute({ Component, ...rest }) {
  const { auth } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={() => {
        return auth.isAuth ? <Component {...rest} /> :
          <Redirect to='/login' />
      }
      }
    />
  )

} 