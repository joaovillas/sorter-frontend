module.exports.parseToHumanDate = (date) => {
  const humanDate = new Date(date).toLocaleDateString() + ' às 23:59';
  return humanDate;
}


module.exports.formatDate = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2)
    month = '0' + month;
  if (day.length < 2)
    day = '0' + day;

  return [year, month, day].join('-');
}