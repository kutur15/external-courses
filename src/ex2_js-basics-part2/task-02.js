var NumberArr = [1, 2, 3];
var n = 0
function MyFuncSprint (){ 
    
    for (var i = 0; i < NumberArr.length; i++) {
        if (i % 2 == 0) {
        n = n + 1
        console.log( NumberArr [i] + " Число элементов: " + NumberArr.length);
            }
    }
    module.exports = MyFuncSprint;
}