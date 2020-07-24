const removeFromArray = function(array,...arg) {
    let newArray=[];
    let nomatch;
for (i=0;i<array.length;i++)
{
 nomatch=true;
 for (j=0;j<arg.length;j++)
  if (array[i]===arg[j]) {
    nomatch=false;
    break;
  }
if (nomatch) newArray.push(array[i]);
}

return newArray;

}

module.exports = removeFromArray
