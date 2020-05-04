import React from 'react';
import Pageroot from '../PageRoot';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import './style.css'
export default function NewDraw() {
  const [value, setValue] = React.useState('free');
  const [date, setSelectedDate] = React.useState(new Date().toLocaleString());
  console.log(new Date());

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };


  const handleDateChange = (evnt) => {
    console.log(date);
  };

  return (
    <Pageroot>
      <Grid container >
        <Grid className="new-draw-root" item xs={12}>
          <Grid className="form-container" item xs={12} >
            <form>
              <TextField label="Código do Sorteio" variant="outlined" size="small" />
              <FormControl component="fieldset" >
                <RadioGroup className="form-radio-container" value={value} onChange={handleChange} aria-label="quiz" name="quiz" >
                  <FormControlLabel value="separated" control={<Radio />} label="Formato: ASD-0X8Z" />
                  <FormControlLabel value="plain" control={<Radio />} label="Formato: ASD0X8Z" />
                  <FormControlLabel value="free" control={<Radio />} label="Sem formato" />
                  <Button type="submit" variant="outlined" color="primary" >
                    Gerar Código
                  </Button>
                </RadioGroup>
              </FormControl>
              <TextField label="Premiação" variant="outlined" size="small" />
              <TextField label="Quantidade Máxima" type="number" variant="outlined" size="small" />
              <TextField
                id="date"
                label="Prazo de Término"
                type="date"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Pageroot>
  );
}