var i
var j
var NumberArr4 = [0, 1];
//var n
function FuncUnic () {
       //n = NumberArr4.length;
    for (i = 0; i < NumberArr4.length-1; i++)
    {for (j = i+1; j < NumberArr4.length; j++)
 { if (NumberArr4[i] === NumberArr4[j]) {
    
    return true; }
    }
    
    return false;
    console.log(NumberArr4.length);
}

};
module.exports = FuncUnic ();