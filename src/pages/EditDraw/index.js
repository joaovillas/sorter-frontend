import React, { useState, useEffect } from 'react';
import Pageroot from '../PageRoot';
import { Grid, TextField, Button, Typography, CircularProgress } from '@material-ui/core';
import CardDraw from '../../components/CardDraw';
import { formatDate } from '../../helpers/dateHelper';
import './style.css';
import api from '../../api';
import { isUrl } from '../../helpers/urlHelper';
import { useHistory } from 'react-router-dom';

export default function EditDraw({ computedMatch: { params } }) {
  const search = params.draw_id;
  const history = useHistory();
  const [date, setSelectedDate] = useState('');
  const [drawCode, setDrawCode] = useState('');
  const [prize, setPrize] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [maxParticipants, setMaxParticipants] = useState(0);
  const [waitResponse, setWaitResponse] = useState(false);
  const [founded, setFounded] = useState(false);
  const [status, setStatus] = useState('');
  const [participants, setParticipants] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/draws/get/${search}`);
        const draw = response.data[0];
        setSelectedDate(formatDate(draw.end_date));
        setDrawCode(draw.draw_code);
        setImgUrl(draw.img_url);
        setPrize(draw.prize);
        setMaxParticipants(draw.max_participants);
        setFounded(true);
        setStatus(draw.status);
        setParticipants(draw.participants);
      } catch (e) {
        alert('erro ocorrido! entre em contato com o suporte suporte@sorter.com');
      }
    }
    fetchData();
  }, []);

  const handleEditButton = async (e) => {
    e.preventDefault();

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
      const response = await api.post('/draws/edit', data);

      if (response.status === 201) {
        setWaitResponse(false);
        alert('Editado com sucesso!');
        history.push('/');
      }

    } catch (e) {
      console.log(e);
    }


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


  return founded && (
    <Pageroot>
      <Grid container spacing={6}>
        <Grid className="edit-draw-root" item xs={12} sm={6}>
          <Grid className="form-container" item xs={12} sm={12} >
            <form>
              <Typography variant="h4" >
                Cadastro de um novo sorteio
              </Typography>
              <TextField value={prize} label="Premiação" required onChange={evt => setPrize(evt.target.value)} variant="outlined" size="small" />
              <TextField value={maxParticipants} label="Quantidade Máxima" required onChange={evt => setMaxParticipants(evt.target.value)} type="number" variant="outlined" size="small" />
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
                value={date}
              />
              <TextField value={imgUrl} label="Imagem de exibição" onChange={evt => setImgUrl(evt.target.value)} variant="outlined" />
              <Button type="submit" variant="outlined" color="primary" onClick={handleEditButton}>
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
            <CardDraw draw_code={drawCode} end_date={date} participants={participants} max_participants={maxParticipants} prize={prize} img_url={imgUrl} status={status} />
          </div>
        </Grid>
      </Grid>
    </Pageroot>
  );
}
