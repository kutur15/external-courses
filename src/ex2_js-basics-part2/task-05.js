var array
var max
function getMaxValue ()
{

array = [2, 5, 6];
max = array[0];
for (var i = 0; i < array.length; i++)
{
    if (max < array[i]) max = array[i];
}
return console.log(max);
}
module.exports = getMaxValue ();