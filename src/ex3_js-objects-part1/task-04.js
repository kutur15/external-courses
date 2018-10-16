
function MyFunc1 (n,obj){
var result = obj;
if(n in result) {return result;}
result[n] = 'new';
return result;
}
module.exports = MyFunc1;