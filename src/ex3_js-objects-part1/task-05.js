var clone = []
function MyFunc1 (obj){

    for (var key in obj) {
        clone[key] = obj[key];
      }

    return clone;
    }
    module.exports = MyFunc1;