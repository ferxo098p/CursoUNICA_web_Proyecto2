$(document).ready(function(){
	/*var v1 = document.getElementById('v1');
	var v2 = document.getElementById('v2');

	v1.onclick = function(){
		$('.contenido').get("Proyecto2/v1.html")
	}*/
	$(document).on("click", "#v1",function(){
		$(".contenido").load("v1.html");
	});
});
