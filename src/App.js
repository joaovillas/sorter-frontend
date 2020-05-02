import React from 'react';
import './globals.css';
import Routes from './routes';
import defaultTheme from './theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <Routes />
    </MuiThemeProvider>
  );
}

export default App;
