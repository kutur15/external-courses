var clone = []
var key
function MyFunc1 (obj){

    for (key in obj) {
        clone[key] = obj[key];
      }

    return clone;
    }
    module.exports = MyFunc1;