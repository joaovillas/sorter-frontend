import React from 'react';
import PageRoot from '../PageRoot';
import Table from '../../components/Table';
import { Grid } from '@material-ui/core';
import Chart from '../../components/Chart';
export default function DrawInfo({ match: { params } }) {
  const { draw_id } = params;

  const headers = ['Posição', 'Nome', 'Idade', 'Email', 'Sexo'];
  const rows = [
    {
      "name": "Erma Nash",
      "age": 65,
      "gender": "female",
      "email": "ermanash@dancity.com"
    },
    {
      "name": "Ortega Colon",
      "age": 67,
      "gender": "male",
      "email": "ortegacolon@dancity.com"
    },
    {
      "name": "Roseann Mcgowan",
      "age": 59,
      "gender": "female",
      "email": "roseannmcgowan@dancity.com"
    },
    {
      "name": "Lois Donovan",
      "age": 35,
      "gender": "female",
      "email": "loisdonovan@dancity.com"
    },
    {
      "name": "Erika Price",
      "age": 80,
      "gender": "female",
      "email": "erikaprice@dancity.com"
    },
    {
      "name": "Janice Hall",
      "age": 74,
      "gender": "female",
      "email": "janicehall@dancity.com"
    },
    {
      "name": "Kathy Raymond",
      "age": 55,
      "gender": "female",
      "email": "kathyraymond@dancity.com"
    },
    {
      "name": "Smith Mcbride",
      "age": 58,
      "gender": "male",
      "email": "smithmcbride@dancity.com"
    },
    {
      "name": "Rosales Best",
      "age": 68,
      "gender": "male",
      "email": "rosalesbest@dancity.com"
    },
    {
      "name": "Figueroa Greene",
      "age": 84,
      "gender": "male",
      "email": "figueroagreene@dancity.com"
    },
    {
      "name": "Melendez Jarvis",
      "age": 87,
      "gender": "male",
      "email": "melendezjarvis@dancity.com"
    },
    {
      "name": "Bernadine Albert",
      "age": 25,
      "gender": "female",
      "email": "bernadinealbert@dancity.com"
    },
    {
      "name": "Walter Willis",
      "age": 28,
      "gender": "male",
      "email": "walterwillis@dancity.com"
    },
    {
      "name": "Daphne Pruitt",
      "age": 49,
      "gender": "female",
      "email": "daphnepruitt@dancity.com"
    },
    {
      "name": "Glenna Obrien",
      "age": 61,
      "gender": "female",
      "email": "glennaobrien@dancity.com"
    },
    {
      "name": "Charlotte Estes",
      "age": 19,
      "gender": "female",
      "email": "charlotteestes@dancity.com"
    },
    {
      "name": "Jane Charles",
      "age": 30,
      "gender": "female",
      "email": "janecharles@dancity.com"
    },
    {
      "name": "Louella Christian",
      "age": 38,
      "gender": "female",
      "email": "louellachristian@dancity.com"
    },
    {
      "name": "Hess Massey",
      "age": 42,
      "gender": "male",
      "email": "hessmassey@dancity.com"
    },
    {
      "name": "Cain Cruz",
      "age": 17,
      "gender": "male",
      "email": "caincruz@dancity.com"
    },
    {
      "name": "Sykes Gutierrez",
      "age": 88,
      "gender": "male",
      "email": "sykesgutierrez@dancity.com"
    },
    {
      "name": "Blanche Monroe",
      "age": 89,
      "gender": "female",
      "email": "blanchemonroe@dancity.com"
    },
    {
      "name": "Lorene Haney",
      "age": 24,
      "gender": "female",
      "email": "lorenehaney@dancity.com"
    },
    {
      "name": "Ryan Reilly",
      "age": 24,
      "gender": "male",
      "email": "ryanreilly@dancity.com"
    },
    {
      "name": "Ray Herring",
      "age": 30,
      "gender": "male",
      "email": "rayherring@dancity.com"
    },
    {
      "name": "Conley Hendrix",
      "age": 21,
      "gender": "male",
      "email": "conleyhendrix@dancity.com"
    },
    {
      "name": "Wilkerson Bishop",
      "age": 31,
      "gender": "male",
      "email": "wilkersonbishop@dancity.com"
    },
    {
      "name": "Ramos Evans",
      "age": 33,
      "gender": "male",
      "email": "ramosevans@dancity.com"
    },
    {
      "name": "Talley York",
      "age": 25,
      "gender": "male",
      "email": "talleyyork@dancity.com"
    },
    {
      "name": "Effie Potter",
      "age": 85,
      "gender": "female",
      "email": "effiepotter@dancity.com"
    },
    {
      "name": "Megan Morrison",
      "age": 34,
      "gender": "female",
      "email": "meganmorrison@dancity.com"
    },
    {
      "name": "Cecelia Schmidt",
      "age": 14,
      "gender": "female",
      "email": "ceceliaschmidt@dancity.com"
    },
    {
      "name": "Rowe Ballard",
      "age": 26,
      "gender": "male",
      "email": "roweballard@dancity.com"
    },
    {
      "name": "Lorie Carroll",
      "age": 21,
      "gender": "female",
      "email": "loriecarroll@dancity.com"
    },
    {
      "name": "Lara Murphy",
      "age": 18,
      "gender": "male",
      "email": "laramurphy@dancity.com"
    },
    {
      "name": "Eaton Kirk",
      "age": 41,
      "gender": "male",
      "email": "eatonkirk@dancity.com"
    },
    {
      "name": "Atkinson Wooten",
      "age": 83,
      "gender": "male",
      "email": "atkinsonwooten@dancity.com"
    },
    {
      "name": "Cochran Contreras",
      "age": 57,
      "gender": "male",
      "email": "cochrancontreras@dancity.com"
    },
    {
      "name": "Davis Mcdowell",
      "age": 64,
      "gender": "male",
      "email": "davismcdowell@dancity.com"
    },
    {
      "name": "Pena Golden",
      "age": 30,
      "gender": "male",
      "email": "penagolden@dancity.com"
    }
  ]

  function getAvarageAge(rows) {
    let avarage = 0;
    rows.map((row) => {
      console.log(typeof row.age)
      avarage += row.age;
    });
    return (avarage / rows.length).toFixed(2) ;
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
    avarage: getAvarageAge(rows),
    total: rows.length,
    female,
    male,
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