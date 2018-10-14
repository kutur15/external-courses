var obj = {};
var key
obj.a = 1;
obj.b = "phone";
obj.c = null;
function MyFunc1 (obj){

    for (key in obj) {
        console.log("Ключ: " + key + " значение: " + obj[key]);
    }

};
module.exports = MyFunc1 ();