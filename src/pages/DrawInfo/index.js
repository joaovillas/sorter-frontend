import React, { useState, useEffect } from 'react';
import PageRoot from '../PageRoot';
import Table from '../../components/Table';
import { Grid } from '@material-ui/core';
import Chart from '../../components/Chart';
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


  const headers = ['Posição', 'Nome', 'Idade', 'Email', 'Sexo'];
  const rows = [];
  console.log(rows);

  function getAvarageAge(rows) {
    let avarage = 0;
    rows.map((row) => {
      console.log(typeof row.age)
      avarage += row.age;
    });
    return (avarage / rows.length).toFixed(2);
  }

  function getCountByGender(rows) {
    let male = 0;
    let female = 0;

    rows.forEach((row) => {
      if (row.gender === 'F' || row.gender === 'female') {
        female++;
      }

      if (row.gender === 'M' || row.gender === 'male') {
        male++;
      }
    });

    return { male, female };

  }

  const { female, male } = getCountByGender(rows);

  const chartData = {
    total: rows.length,
    female,
    male,
    width: '100%',
    height: '150%'
  }

  return (
    <PageRoot>
      <Grid container spacing={4} >
        <Grid item xs={12}>
          <Chart chartData={chartData} />
        </Grid>
        <Grid item xs={12}>
          <Table headers={headers} rows={rows} />
        </Grid>
      </Grid>
    </PageRoot>
  );
}