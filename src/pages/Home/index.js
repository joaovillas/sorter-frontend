import React from 'react';
import PageRoot from '../PageRoot';
import { Grid, Typography, Button, } from '@material-ui/core';
import CardDraw from '../../components/CardDraw';
import './style.css';
import { Link } from 'react-router-dom';

const array = [
  { draw_code: 'ASN-DBF', end_date: '30/04/2020', participants: 60, prize: 'AK 47 Stat Trek', max_participants: 70 },
  { draw_code: 'ASN-OHN', end_date: '31/04/2020', participants: 30, prize: 'M4a4 How StatTrek', max_participants: 70 },
  { draw_code: 'HLT-V18', end_date: '02/05/2020', participants: 24, prize: 'Desert Eagle Naga', max_participants: 70 },
  { draw_code: 'OKL-1576', end_date: '15/05/2020', participants: 39, prize: 'Iphone X 64 GB', max_participants: 70 },
  { draw_code: 'ZXJ-DBF', end_date: '20/05/2020', participants: 11, prize: 'HB20 2015', max_participants: 70 },
  { draw_code: 'JKL-DBF', end_date: '27/05/2020', participants: 0, prize: 'Faca Baioneta FN', max_participants: 70 },
  { draw_code: 'ASN-DBF', end_date: '30/04/2020', participants: 60, prize: 'AK 47 Stat Trek', max_participants: 70 },
  { draw_code: 'ASN-OHN', end_date: '31/04/2020', participants: 30, prize: 'M4a4 How StatTrek', max_participants: 70 },
  { draw_code: 'HLT-V18', end_date: '02/05/2020', participants: 24, prize: 'Desert Eagle Naga', max_participants: 70 },
  { draw_code: 'OKL-1576', end_date: '15/05/2020', participants: 39, prize: 'Iphone X 64 GB', max_participants: 70 },
  { draw_code: 'ZXJ-DBF', end_date: '20/05/2020', participants: 11, prize: 'HB20 2015', max_participants: 70 },
  { draw_code: 'JKL-DBF', end_date: '27/05/2020', participants: 0, prize: 'Faca Baioneta FN', max_participants: 70 },
  { draw_code: 'ASN-DBF', end_date: '30/04/2020', participants: 60, prize: 'AK 47 Stat Trek', max_participants: 70 },
  { draw_code: 'ASN-OHN', end_date: '31/04/2020', participants: 30, prize: 'M4a4 How StatTrek', max_participants: 70 },
  { draw_code: 'HLT-V18', end_date: '02/05/2020', participants: 24, prize: 'Desert Eagle Naga', max_participants: 70 },
  { draw_code: 'OKL-1576', end_date: '15/05/2020', participants: 39, prize: 'Iphone X 64 GB', max_participants: 70 },
  { draw_code: 'ZXJ-DBF', end_date: '20/05/2020', participants: 11, prize: 'HB20 2015', max_participants: 70 },
  { draw_code: 'JKL-DBF', end_date: '27/05/2020', participants: 0, prize: 'Faca Baioneta FN', max_participants: 70 },
  { draw_code: 'ASN-DBF', end_date: '30/04/2020', participants: 60, prize: 'AK 47 Stat Trek', max_participants: 70 },
  { draw_code: 'ASN-OHN', end_date: '31/04/2020', participants: 30, prize: 'M4a4 How StatTrek', max_participants: 70 },
  { draw_code: 'HLT-V18', end_date: '02/05/2020', participants: 24, prize: 'Desert Eagle Naga', max_participants: 70 },
  { draw_code: 'OKL-1576', end_date: '15/05/2020', participants: 39, prize: 'Iphone X 64 GB', max_participants: 70 },
  { draw_code: 'ZXJ-DBF', end_date: '20/05/2020', participants: 11, prize: 'HB20 2015', max_participants: 70 },
  { draw_code: 'JKL-DBF', end_date: '27/05/2020', participants: 0, prize: 'Faca Baioneta FN', max_participants: 70 },
  { draw_code: 'ASN-DBF', end_date: '30/04/2020', participants: 60, prize: 'AK 47 Stat Trek', max_participants: 70 },
  { draw_code: 'ASN-OHN', end_date: '31/04/2020', participants: 30, prize: 'M4a4 How StatTrek', max_participants: 70 },
  { draw_code: 'HLT-V18', end_date: '02/05/2020', participants: 24, prize: 'Desert Eagle Naga', max_participants: 70 },
  { draw_code: 'OKL-1576', end_date: '15/05/2020', participants: 39, prize: 'Iphone X 64 GB', max_participants: 70 },
  { draw_code: 'ZXJ-DBF', end_date: '20/05/2020', participants: 11, prize: 'HB20 2015', max_participants: 70 },
  { draw_code: 'JKL-DBF', end_date: '27/05/2020', participants: 0, prize: 'Faca Baioneta FN', max_participants: 70 },
];
export default function Home() {
  return (
    <PageRoot>
      <Grid container alignItems="center" spacing={6}>
        <Grid item xs={12} sm={6} >
          <Typography variant="h3">Sorteios em execução:</Typography>
        </Grid>
        <Grid item xs={12} sm={6} justify="right" >
          <Button color='primary' href="/draw/new" variant="contained" size="large">
            Cadastrar Sorteio
          </Button>
        </Grid>
        {array.map((a, key) => {
          console.log(a);
          return (
            <Grid item xs={12} sm={3} >
              <CardDraw key={key} draw_code={a.draw_code} end_date={a.end_date} participants={a.participants} prize={a.prize} max_participants={a.max_participants} />
            </Grid>
          );
        })}
      </Grid>
    </PageRoot>
  );
}