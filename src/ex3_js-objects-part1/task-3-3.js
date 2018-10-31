var obj = {};
var key
var n = "phone";
obj.a = 1;
obj.b = "phone";
obj.c = null;
function MyFunc1 (n,obj){

    for (key in obj) {
        
        return (obj[key] == n);
    }

};
module.exports = MyFunc1 ();