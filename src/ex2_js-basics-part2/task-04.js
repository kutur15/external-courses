var i
var j
function FuncUnic () {
    var NumberArr4 = [1, 2];
    var n = NumberArr4.length;
    for (i = 0; i < n-1; i++)
    {for (j = i+1; j < n; j++)
 { if (NumberArr4[i] === NumberArr4[j]) {
    
    return console.log(true); }
    }
    
    return console.log(false);
    console.log(n);
}
module.exports = FuncUnic ();}