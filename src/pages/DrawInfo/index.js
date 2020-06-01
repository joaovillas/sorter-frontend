import React, { useState, useEffect } from 'react';
import PageRoot from '../PageRoot';
import Table from '../../components/Table';
import { Grid } from '@material-ui/core';
import api from '../../api';

export default function DrawInfo({ computedMatch: { params } }) {
  const { draw_id } = params;
  const [draw, setDraw] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/draws/detailed/${draw_id}`);
      setDraw(response.data);
    }
    fetchData();
  }, []);

  const headers = ['Nome', 'Email', 'Sexo'];
  return (
    <PageRoot>
      <Grid container spacing={4} >
        
        <Grid item xs={12}>
          <Table headers={headers} rows={draw.participants_joined} />
        </Grid>
      </Grid>
    </PageRoot>
  );
}