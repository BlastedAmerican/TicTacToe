//Demo function to just test that JS is working.
function myFunction() { 
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
}
//Marks a given canvas with an X or an O.
//Takes two arguments. First is the mark to make.
//If an o, it makes an o mark.
//If an x, makes an x mark.
//If neither, just wipes the square.
//Second argument is the target canvas ID. 
//This allows easy calls, as the clicked canvas can pass its own id.
function makeMark( markType, targetSquare )
{
	var targetCanvas = targetSquare;
	var canvas = document.getElementById(targetCanvas);
	//var canvas = document.getElementById('testCanvas');
	var ctx = canvas.getContext('2d');
	var img = document.getElementById('blank_image')
	ctx.drawImage(img, 0, 0)

	if( markType == 'o' )
	{
		
        
        var img = document.getElementById('o_image')
        
    }
    else if( markType == 'x')
    {
    	
        var img = document.getElementById('x_image')
        
    }
    
    ctx.drawImage(img, 0, 0)



//Secondary simple test function.
}
function testFunction()
{
	 document.getElementById("testText").innerHTML = "Its working."
}
