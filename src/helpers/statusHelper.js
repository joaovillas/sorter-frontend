module.exports.statusHelper = (number) => {
  switch(number) {
    case 1: 
      return "Ativo"
      break;
    case 2:
      return "Finalizado"
      break;
    case 3:
      return "Deletado"
      break;
  }
}