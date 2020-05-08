import React from 'react';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import './style.css';

export default function JoinDraw({ location }) {
  const search = location.search;
  const params = new URLSearchParams(search);

  return (
    <Grid className="join-draw-container" container>
      <Grid item xs={6}>
        <Paper className="form-container">
          <form>
            <TextField disabled={params.get('draw_id') ? true : false} value={params.get('draw_id') || null } variant="outlined" label="Código do Sorteio" size="small" />
            <h3 style={{ display: params.get('draw_id') ? 'inline-block' : 'none' }}>Parece que você foi indicado por alguem, boa sorte no seu sorteio!</h3>
            <Button variant="outlined" size="small" color="primary">Entrar no Sorteio</Button>
          </form >
        </Paper>
      </Grid>
    </Grid>
  )
}