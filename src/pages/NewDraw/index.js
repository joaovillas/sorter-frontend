import React from 'react';
import Pageroot from '../PageRoot';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import './style.css'
export default function NewDraw() {



  return (
    <Pageroot>
      <Grid container >
        <Grid className="new-draw-root" xs={12}>
          <Grid className="form-container" >

          </Grid>
        </Grid>
      </Grid>
    </Pageroot>
  );
}