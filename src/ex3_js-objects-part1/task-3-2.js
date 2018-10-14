var obj = {};
obj.a = 1;
obj.b = "phone";
obj.c = null;
function MyFunc1 (obj){

    for (var key in obj) {
        console.log("Ключ: " + key + " значение: " + obj[key]);
    }

};