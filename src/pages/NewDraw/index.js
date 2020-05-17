import React, { useState } from 'react';
import Pageroot from '../PageRoot';
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CardDraw from '../../components/CardDraw';
import { codeGenerate } from '../../helpers/codeHelper';
import './style.css';

export default function NewDraw() {
  const [value, setValue] = useState('free');
  const [date, setSelectedDate] = useState(new Date().toLocaleString());
  const [drawCode, setDrawCode] = useState('');
  const [prize, setPrize] = useState('');
  const [imgUrl, setImgUrl] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Flag_of_None.svg/1280px-Flag_of_None.svg.png')
  const [maxParticipants, setMaxParticipants] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleGenerateButton = (event) => {
    event.preventDefault();

    if (value === "free") {
      return alert('Selecione um método para geração do código');
    }

    setDrawCode(codeGenerate(value));
  }

  return (
    <Pageroot>
      <Grid container spacing={2}>
        <Grid className="new-draw-root" item xs={12} sm={6}>
          <Grid className="form-container" item xs={12} sm={12} >
            <form>
              <Typography variant="h4" >
                Cadastro de um novo sorteio
              </Typography>
              <TextField label="Código do Sorteio" onChange={evt => setDrawCode(evt.target.value)} value={drawCode} variant="outlined" size="small" />
              <FormControl component="fieldset" >
                <RadioGroup className="form-radio-container" value={value} onChange={handleChange} aria-label="quiz" name="quiz" >
                  <FormControlLabel value="separated" control={<Radio />} label="Formato: ASD-0X8Z" />
                  <FormControlLabel value="plain" control={<Radio />} label="Formato: ASD0X8Z" />
                  <FormControlLabel value="free" control={<Radio />} label="Sem formato" />
                  <Button onClick={handleGenerateButton} type="submit" variant="outlined" color="primary" >
                    Gerar Código
                  </Button>
                </RadioGroup>
              </FormControl>
              <TextField label="Premiação" onChange={evt => setPrize(evt.target.value)} variant="outlined" size="small" />
              <TextField label="Quantidade Máxima" onChange={evt => setMaxParticipants(evt.target.value)} type="number" variant="outlined" size="small" />
              <TextField
                id="date"
                label="Prazo de Término"
                defaultValue="2020-01-01"
                type="date"
                variant="outlined"
                onChange={evt => setSelectedDate(evt.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField label="Imagem de exibição" onChange={evt => setImgUrl(evt.target.value)} variant="outlined" />
              <Button type="submit" variant="outlined" color="primary" >
                Criar Sorteio
              </Button>
            </form>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" >
            Previsualização
          </Typography>
          <div className="draw-preview ">
            <CardDraw draw_code={drawCode} end_date={date} participants={0} max_participants={maxParticipants} prize={prize} img_url={imgUrl} status={1} />
          </div>
        </Grid>
      </Grid>
    </Pageroot>
  );
}
