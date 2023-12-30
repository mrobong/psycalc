function BACKSPC(){
	var a = document.calcul.result.value;
	document.calcul.result.value = a.substr(0, a.length-1);
	}

  function sin(){
  document.calcul.result.value = Math.sin(document.calcul.result.value);
}

	function tan(){
	document.calcul.result.value = Math.tan(document.calcul.result.value);
	}

function cos(){
	document.calcul.result.value = Math.cos(document.calcul.result.value);
	}

function log(){
	document.calcul.result.value = Math.log10(document.calcul.result.value);
	}



	function square(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 2);
	}

	function cubed(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 3);
	}

	function sqrt2(){
	document.calcul.result.value = Math.sqrt(document.calcul.result.value);
	}

	function sqrt3(){
	document.calcul.result.value = Math.cbrt(document.calcul.result.value);
	}

	function number(value){
	document.calcul.result.value += value;
	}

	function remove(){
	document.calcul.result.value=" ";
	}

function factorial(){
  let answer = 1;
  let n = document.calcul.result.value;
  if (n == 0 || n == 1){
    document.calcul.result.value = answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    document.calcul.result.value = answer;
  }  
}

function bracket(){
  var x = document.calcul.result.value;
  if ( x == "(" ){
    document.calcul.result.value = "(";
  }
}


	function equal(){
    try{ //tests eval code for error
        document.calcul.result.value=eval(document.calcul.result.value); //calculates values and assigns to output
        } catch { // handles the errors
          document.calcul.result.value = "ERROR!";
        }
	
	}