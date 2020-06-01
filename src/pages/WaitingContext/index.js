import React from 'react';
import './style.css';
import { CircularProgress } from '@material-ui/core';

export default function WaitingContext() {
  return(
    <div className="waiting-root">
      <CircularProgress className="spinner" color="white" />
      <p>Aguarde um instante</p>
    </div>
  )
}