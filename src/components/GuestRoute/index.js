import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function GuestRoute({ Component, ...rest }) {

  const isGuest = !!(!localStorage.getItem('user_token') || !localStorage.getItem('user'));
  return (
    <Route
      {...rest}
      render={() => {
        if (isGuest) {
          return <Component {...rest} />;
        }
        return <Redirect to="/" />
      }
      }
    />
  )

}