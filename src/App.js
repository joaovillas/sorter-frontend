import React from 'react';
import './globals.css';
import Routes from './routes';
import defaultTheme from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </MuiThemeProvider>
  );
}

export default App;
