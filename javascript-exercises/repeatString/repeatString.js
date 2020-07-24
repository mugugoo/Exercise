const repeatString = function(str,n) {
    if (n<0) return 'ERROR';
  let repeat="";
    for  (i=0;i<n;i++){
        repeat += str;
    }
return repeat;
}
module.exports = repeatString
