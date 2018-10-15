
function MyFunc1 (n,obj){

if(n in obj) return obj;
obj.n = 'new';
return obj;
};
module.exports = MyFunc1;