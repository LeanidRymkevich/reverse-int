module.exports = function reverse (n) {

  let numStr = n.toString();
  let result = '';

  if(n < 0){
    numStr = numStr.slice(1, numStr.length);
  }

  for(let i = numStr.length - 1; i >= 0; i--){
    result += numStr[i];
  }

  if(result[0] === 0 && result.length !== 0){
    result = result.slice(1, result.length);
  }

  return parseInt(result);
}

