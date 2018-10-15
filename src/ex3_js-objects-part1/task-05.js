function MyFunc1 (obj){
var clone = []
    for (var key in obj) {
        clone[key] = obj[key];
      }

    return clone;
    }
    module.exports = MyFunc1;