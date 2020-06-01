import React, { useState } from 'react';
import Pageroot from '../PageRoot';
import { Grid, TextField, Button, Typography, CircularProgress } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CardDraw from '../../components/CardDraw';
import { codeGenerate } from '../../helpers/codeHelper';
import './style.css';
import api from '../../api';
import { isUrl } from '../../helpers/urlHelper';

export default function NewDraw() {
  const [value, setValue] = useState('free');
  const [date, setSelectedDate] = useState('');
  const [drawCode, setDrawCode] = useState('');
  const [prize, setPrize] = useState('');
  const [imgUrl, setImgUrl] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Flag_of_None.svg/1280px-Flag_of_None.svg.png')
  const [maxParticipants, setMaxParticipants] = useState(0);
  const [waitResponse, setWaitResponse] = useState(false);

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

  const validateFields = () => {
    if (date.length === 0) {
      alert('Campo Data é um campo obrigatório');
      return false;
    }

    if (new Date() <= Date(date)) {
      alert('A data não pode ser passada, nem hoje.');
      return false;
    }

    if (prize.length === 0) {
      alert('Campo Prêmio é um campo obrigatório');
      return false;
    }

    if (drawCode.length === 0) {
      alert('Campo Código de sorteio é um campo obrigatório');
      return false;
    }

    if (maxParticipants <= 0) {
      alert('Campo participantes é obrigatório e precisa ser maior que 0 (Zero)');
      return false;
    }

    if (!isUrl(imgUrl)) {
      alert('Campo de link da imagem precisa ser um link');    
      return false;
    }
    return true;
  }

  const handleCreateButton = async (evt) => {
    evt.preventDefault();
    
    const data = {
      end_date: date,
      draw_code: drawCode,
      prize,
      img_url: imgUrl,
      max_participants: maxParticipants,
    }
    
    if (!validateFields()) {
      return false;
    }
    
    setWaitResponse(true);
    try {
      const response = await api.post('/draws/', data);

      if (response.status === 201) {
        setWaitResponse(false);
        alert('Cadastrado com sucesso!');
        window.location = '/';
      }

    } catch (e) {
      console.log(e);
    }

  }

  return (
    <Pageroot>
      <Grid container spacing={6}>
        <Grid className="new-draw-root" item xs={12} sm={6}>
          <Grid className="form-container" item xs={12} sm={12} >
            <form>
              <Typography variant="h4" >
                Cadastro de um novo sorteio
              </Typography>
              <TextField label="Código do Sorteio" required onChange={evt => setDrawCode(evt.target.value)} value={drawCode} variant="outlined" size="small" />
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
              <TextField label="Premiação" required onChange={evt => setPrize(evt.target.value)} variant="outlined" size="small" />
              <TextField label="Quantidade Máxima" required onChange={evt => setMaxParticipants(evt.target.value)} type="number" variant="outlined" size="small" />
              <TextField
                id="date"
                label="Prazo de Término"
                type="date"
                variant="outlined"
                required
                onChange={evt => setSelectedDate(evt.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField label="Imagem de exibição" onChange={evt => setImgUrl(evt.target.value)} variant="outlined" />
              <Button type="submit" variant="outlined" color="primary" onClick={handleCreateButton}>
                {waitResponse ? <CircularProgress /> : 'Criar Sorteio'}
              </Button>
            </form>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} sm={6}>
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
