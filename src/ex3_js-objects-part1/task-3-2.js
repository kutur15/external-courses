var obj = {};
obj.a = 1;
obj.b = "phone";
obj.c = null;
var key
function MyFunc1 (obj){

    for (key in obj) {
        console.log("Ключ: " + key + " значение: " + obj[key]);
    }

};