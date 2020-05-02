import React from 'react';
import { Card, CardContent, Typography, Divider } from '@material-ui/core';
import './style.css'
import { Link } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditIcon from '@material-ui/icons/Edit';

const styles = {
  title: {
    textAlign: 'center'
  },
  divider: {
    marginBottom: '20px'
  },
}


export default function CardDraw({ draw_code, participants, end_date, prize, max_participants }) {
  const draw_link = `/draw/info/${draw_code}`;
  return (
    <Card>
      <CardContent>
        <div className="card-tools">
          <Link className="card-icon">
            <EditIcon />
          </Link>
          <Link className="card-icon">
            <DeleteOutlineOutlinedIcon />
          </Link>
        </div>
        <Typography style={styles.title}>
          <Link to={draw_link}> {draw_code} </Link>
        </Typography>
        <Divider style={styles.divider} />
        <Typography>
          Participantes: {participants}
        </Typography>
        <Typography>
          Data término: {end_date}
        </Typography>
        <Typography>
          Prêmio: {prize}
        </Typography>
        <Typography>
          Quantidade Máxima: {max_participants}
        </Typography>
      </CardContent>
    </Card>
  );
}