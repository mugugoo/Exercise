function truncating(number,decimals) {
  _tempNum=+number*Math.pow(10,decimals);
  _tempNum=Math.round(_tempNum);
  return _tempNum/Math.pow(10,decimals);
}


const ftoc = function(temp) {

return truncating((temp-32)*5/9,1);
}

const ctof = function(temp) {
return truncating((temp*9/5+32),1);
}

module.exports = {
  ftoc,
  ctof
}
