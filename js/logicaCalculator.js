var aux1;
var aux2;
var result;
var vmmas = "0.0"
var addigito = false;
function init(){
	var pantalla = document.getElementById('pantalla');
	var reset = document.getElementById('reset');
	var multiplicacion = document.getElementById('multi');
	var division = document.getElementById('div');
	var resta = document.getElementById('resta');
	var suma = document.getElementById('suma');
	var igual = document.getElementById('igual');
	var n1 = document.getElementById('1');
	var n2 = document.getElementById('2');
	var n3 = document.getElementById('3');
	var n4 = document.getElementById('4');
	var n5 = document.getElementById('5');
	var n6 = document.getElementById('6');
    var n7 = document.getElementById('7');
	var n8 = document.getElementById('8');
	var n9 = document.getElementById('9');
	var n0 = document.getElementById('0');
	var punto = document.getElementById('punto');

	n1.onclick = function(e){
			pantalla.value = pantalla.value == "0.0" || !addigito ? "1" : pantalla.value + "1";
			addigito = true;
		}
	n2.onclick = function(e){
			pantalla.value = pantalla.value == "0.0" || !addigito ? "2" : pantalla.value + "2";
			addigito = true;
		}
	n3.onclick = function(e){
			pantalla.value = pantalla.value == "0.0" || !addigito ? "3" : pantalla.value + "3";
			addigito = true;
		}
	n4.onclick = function(e){
			pantalla.value = pantalla.value == "0.0" || !addigito ? "4" : pantalla.value + "4";
			addigito = true;
		}
	n5.onclick = function(e){
			pantalla.value = pantalla.value == "0.0" || !addigito ? "5" : pantalla.value + "5";
			addigito = true;
		}
	n6.onclick = function(e){
			pantalla.value = pantalla.value == "0.0" || !addigito ? "6" : pantalla.value + "6";
			addigito = true;
		}
	n7.onclick = function(e){
			pantalla.value = pantalla.value == "0.0" || !addigito ? "7" : pantalla.value + "7";
			addigito = true;
		}
	n8.onclick = function(e){
			pantalla.value = pantalla.value == "0.0" || !addigito ? "8" : pantalla.value + "8";
			addigito = true;
		}
	n9.onclick = function(e){
			pantalla.value = pantalla.value == "0.0" || !addigito ? "9" : pantalla.value + "9";
			addigito = true;
		}
	n0.onclick = function(e){
			pantalla.value = pantalla.value == "0.0" || !addigito ? "0" : pantalla.value + "0";
			addigito = true;
		}

	punto.onclick = function(e){
			pantalla.value = pantalla.value == "0.0" || !addigito ? "." : pantalla.value + ".";
			addigito = true;
		}
	reset.onclick = function(e){
		reiniciar();
	    }
	suma.onclick = function(e){
		aux1 = pantalla.value;
		result = "+";
		limpiar();
	    }
	resta.onclick = function(e){
	    	aux1 = pantalla.value;
	    	result = "-";
	    	limpiar();
	    }
	multiplicacion.onclick = function(e){
		aux1 = pantalla.value;
		resul = "*";
		limpiar();
	}
	division.onclick = function(e){
		aux1 = pantalla.value;
		result = "/";
		limpiar();
	}
	igual.onclick = function(e){
	    aux2 = pantalla.value;
	    resolver();
	    addigito = false;

	}
}
function limpiar (){
	pantalla.value = "0.0";
}
function reiniciar(){
	pantalla.value = "0.0";
	aux1 = 0;
	aux2 = 0;
	result = "";
	addigito = false;
}
function resolver(){
	var res = 0;
	switch(result){
		case "+":
			res = parseFloat(aux1) + parseFloat(aux2);
		break;
		case "-":
			res = parseFloat(aux1) - parseFloat(aux2);
		break
		case "*":
			res = parseFloat(aux1) * parseFloat(aux2);
		break
		case "/":
			res = parseFloat(aux1) / parseFloat(aux2);
			res = res== "Infinity" ? "Indefinido" : res;  
		break
	}
	pantalla.value = res;	
}