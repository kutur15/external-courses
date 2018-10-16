function cloneObject(obj) {  
    var newObj = {};  
       for (var prop in obj) {  
        if (typeof obj[prop] === 'object') {  
          newObj[prop] = cloneObject(obj[prop]);  
        } else {

            if (Array.isArray (obj)) {
                newObj{prop} = obj{prop};

            };
          newObj[prop] = obj[prop];
         };
    }; 
return newObj;
    };
module.exports = cloneObject;