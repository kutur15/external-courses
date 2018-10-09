var n = 18
function MyFuncSimple () {

if (n <= 1000) {
if ( n % 2 !== 0 ){
    console.log( "число " + n + " - простое число");
  }

  else (console.log( "число " + n + " - составное число"));

}
    else { console.log("данные неверны");}
}
    module.exports = MyFuncSimple ();