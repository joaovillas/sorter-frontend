module.exports.statusHelper = (number) => {
  switch(number) {
    case '1': 
      return "Ativo"
    case '2':
      return "Finalizado"
    case '3':
      return "Deletado"
  }
}