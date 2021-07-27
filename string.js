function stringLength(string){
  if(string.length < 1 || string.length > 10){
    throw 'The length of the string has to be between 1 and 10.';
  }
  return string.length;

}

module.exports = stringLength;