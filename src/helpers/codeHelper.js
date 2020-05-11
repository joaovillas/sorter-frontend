module.exports.codeGenerate = (params) => {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  if (params === 'separated') {
    result = result.slice(0, 3) + "-" + result.slice(3);
  }

  console.log(result);
  return result;
}