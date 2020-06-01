import React, { useEffect, useState } from 'react';
import PageRoot from '../PageRoot';
import { Grid, Typography, Button } from '@material-ui/core';
import CardDraw from '../../components/CardDraw';
import './style.css';
import api from '../../api';
import { Link } from 'react-router-dom';

export default function Home() {
  const [draws, setDraws] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let response = await api.get('/draws/');
      setDraws(response.data);
    }
    fetchData();
  }, []);

  return (
    <PageRoot>
      <Grid container alignItems="center" spacing={6}>
        <Grid item xs={8} sm={6} >
          <Typography variant="h3">Sorteios em execução:</Typography>
        </Grid>
        <Grid item xs={6} sm={6} >
          <Link to="/draw/new">
            <Button color='primary' variant="contained" size="large">
              Cadastrar Sorteio
            </Button>
          </Link>
        </Grid>
        {draws.map((draw, key) => {
          return (
            <Grid key={key} item xs={12} spacing={3} md={3} sm={12} >
              <CardDraw key={key} img_url={draw.img_url} draw_code={draw.draw_code} end_date={draw.end_date} status={draw.status} participants={draw.participants} prize={draw.prize} max_participants={draw.max_participants} />
            </Grid>
          );
        })}
      </Grid>
    </PageRoot>
  );
}