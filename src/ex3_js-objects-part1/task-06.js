function cloneObject(obj) {  
    var newObj = {};  
    var prop
    for (prop in obj) {  
        if (typeof obj[prop] == 'object') {  
          newObj[prop] = cloneObject(obj[prop]);  
        } else {
          newObj[prop] = obj[prop];
        }
    } 

    //return newObj;  
};
module.exports = cloneObject ();