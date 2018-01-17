// 14 January 2018 - Homework 2

<!DOCTYPE html>
<html>
<head>
  <title>Triangle Calculator</title>
  <meta charset="utf-8">
</head>
<body>
  <script type="text/javascript">var userInput = prompt("Provide values for the three sides of a triangle, separated by commas, e.g.: a,b,c");

	var inputArray = userInput.split(",");
	var sideA = parseInt(inputArray[0]);
	var sideB = parseInt(inputArray[1]);
	var sideC = parseInt(inputArray[2]);

	function isTriangle(a,b,c){
		if( a>0 && b>0 && c>0 ){
			if( a+b > c && b+c > a && a+c > b ){
				return true;
	        }
	    }
		console.log("Not a proper triangle.");
		return false;
	}

	function heronsFormula(a,b,c){
		if(isTriangle(a,b,c)){
	        var s = (a+b+c)/2;
	        return Math.sqrt(s*(s-a)*(s-b)*(s-c));
	    }
		return NaN;
	}

	console.log(heronsFormula(sideA, sideB, sideC));
	console.log(heronsFormula(5, 6, 7));
</script>
</body>
</html>