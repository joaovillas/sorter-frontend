import React from 'react';
import { Card, CardContent, Typography, Divider } from '@material-ui/core';
import './style.css'
import { Link } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import CheckIcon from '@material-ui/icons/Check';
import { Tooltip } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import { Alert, AlertTitle } from '@material-ui/lab';
import { statusHelper } from '../../helpers/statusHelper';
import { parseToHumanDate } from '../../helpers/dateHelper';

const styles = {
  title: {
    textAlign: 'center'
  },
  divider: {
    marginBottom: '10px'
  }
}

export default function CardDraw({ draw_code, participants, img_url, end_date, prize, max_participants, status }) {

  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  function criteriaLink() {
    if (copied) {
      return <Grow {...(copied ? { timeout: 2000 } : {})} in={copied} collapsedHeight={40}>
        <CheckIcon />
      </Grow >
    }

    return (
      <Grow in={true} {...(copied ? { timeout: 2000 } : {})} collapsedHeight={40}>
        <ShareIcon />
      </Grow>
    );
  }

  function displayAlert() {
    if (copied) {
      return (
        <Grow {...(copied ? { timeout: 1000 } : {})} in={copied} out={copied} collapsedHeight={40}>
          <Alert style={{ marginTop: '2vh' }} severity="success">
            <AlertTitle>Link do sorteio: {draw_code} Copiado com sucesso</AlertTitle>
          </Alert>
        </Grow >
      );
    }
  }

  function generateSharableLink() {
    const sharableLink = document.location.href + 'draw/join?draw_id=' + draw_code;
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 4000)
    navigator.clipboard.writeText(sharableLink);
  }

  const draw_link = `/draw/info/${draw_code}`;
  return (
    <Card className="card-root" style={styles.cardRoot}>
      <CardContent>
        <div className="card-tools">
          <Tooltip title="Gerar código compartilhável">
            <Link to="#" onClick={generateSharableLink} className="card-icon">
              {criteriaLink()}
            </Link>
          </Tooltip>
          <Tooltip title="Editar Sorteio">
            <Link to={`/draw/edit/${draw_code}`} className="card-icon">
              <EditIcon />
            </Link>
          </Tooltip>
          <Tooltip title="Apagar Sorteio">
            <Link to="#" className="card-icon">
              <DeleteOutlineOutlinedIcon />
            </Link>
          </Tooltip>
        </div>
        <Typography style={styles.title}>
          <Link to={draw_link}> {draw_code} </Link>
        </Typography>
        <Divider style={styles.divider} />
        <img className="card-draw-img" src={img_url} />
        <Divider />
        <Typography>
          Participantes: {participants}
        </Typography>
        <Typography>
          Data término: {parseToHumanDate(end_date)}
        </Typography>
        <Typography>
          Prêmio: {prize}
        </Typography>
        <Typography>
          Quantidade Máxima: {max_participants}
        </Typography>
        <Typography>
          Status: {statusHelper(status)}
        </Typography>

        {displayAlert()}
      </CardContent>
    </Card>
  );
}