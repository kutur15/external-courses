
    function MyFunc1 (n,obj){
        var result = obj;
        if(n in result) {return true;}
          return false;
        }
        module.exports = MyFunc1;