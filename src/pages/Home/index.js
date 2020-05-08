import React from 'react';
import PageRoot from '../PageRoot';
import { Grid, Typography, Button, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import CardDraw from '../../components/CardDraw';
import './style.css';

const array = [
  { draw_code: 'ASN-DBF', status: 1, end_date: '30/04/2020', participants: 60, prize: 'AK 47 Stat Trek', max_participants: 70 },
  { draw_code: 'ASN-OHN', status: 2, end_date: '31/04/2020', participants: 30, prize: 'M4a4 How StatTrek', max_participants: 70 },
  { draw_code: 'HLT-V18', status: 3, end_date: '02/05/2020', participants: 24, prize: 'Desert Eagle Naga', max_participants: 70 },
  { draw_code: 'OKL-1576', status: 1, end_date: '15/05/2020', participants: 39, prize: 'Iphone X 64 GB', max_participants: 70 },
  { draw_code: 'ZXJ-DBF', status: 3, end_date: '20/05/2020', participants: 11, prize: 'HB20 2015', max_participants: 70 },
  { draw_code: 'JKL-DBF', status: 2, end_date: '27/05/2020', participants: 0, prize: 'Faca Baioneta FN', max_participants: 70 },
  { draw_code: 'ASN-DBF', status: 1, end_date: '30/04/2020', participants: 60, prize: 'AK 47 Stat Trek', max_participants: 70 },
  { draw_code: 'ASN-OHN', status: 3, end_date: '31/04/2020', participants: 30, prize: 'M4a4 How StatTrek', max_participants: 70 },
  { draw_code: 'HLT-V18', status: 3, end_date: '02/05/2020', participants: 24, prize: 'Desert Eagle Naga', max_participants: 70 },

];
export default function Home() {
  return (
    <PageRoot>
      <Grid container alignItems="center" spacing={6}>
        <Grid item xs={8} sm={6} >
          <Typography variant="h3">Sorteios em execução:</Typography>
        </Grid>
        <Grid item xs={6} sm={6} >
          <Button color='primary' href="/draw/new" variant="contained" size="large">
            Cadastrar Sorteio
          </Button>
        </Grid>
        {array.map((a, key) => {
          return (
            <Grid key={key} item xs={12} sm={3} >
              <CardDraw key={key} draw_code={a.draw_code} end_date={a.end_date} status={a.status} participants={a.participants} prize={a.prize} max_participants={a.max_participants} />
            </Grid>
          );
        })}
      </Grid>
    </PageRoot>
  );
}