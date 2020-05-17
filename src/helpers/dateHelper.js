module.exports.parseToHumanDate = (date) => {
  const humanDate = new Date(date).toLocaleDateString() + ' às 23:59';
  return humanDate;
}
