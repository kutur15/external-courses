function MyFuncNul () 
{
	var h = 0
	var g = 0
	var y = 0
	var NumberArr3 = [];
	var NumberArr2 = [1, 2, 3, 4];
	for (var i = 0; i <= ( NumberArr2.length - 1); i++) {
	if ( NumberArr2 [i]  !== 0 ) {
	
		if (( NumberArr2 [i] % 2 ) == 0 )  {
		h = h + 1
			
		}
		else {
		g = g + 1
		}
				
		}
		else 
		{y = y + 1
			}
			
	}
					
		  console.log ( "четных: " + h + " нечетных: " + g + " нулей: " + y );
	  console.log (NumberArr3 = [h, g, y]);	
 };
 module.exports = MyFuncNul ();