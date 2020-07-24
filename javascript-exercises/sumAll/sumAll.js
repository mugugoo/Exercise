const sumAll = function(num1,num2) {
    let _ispositive, _isanumber;_sum=0;
    _notpositive=(num1<0 || num2<0);
    _notanumber=!(typeof num2 ==="number" || typeof num2==='number');
    if (_notpositive || _notanumber) return  'ERROR';

for (i=Math.min(num1,num2);i<Math.max(num1,num2)+1;i++)
_sum+=i;

return _sum;
}

module.exports = sumAll
