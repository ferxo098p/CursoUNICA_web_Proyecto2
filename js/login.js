$(document).ready(function(argument) {
	$(document).on("click", "#iniciar", function(){
		var password = $("#password").val();
		var url = "../Principal.html";
		if(password == ""){
			alert("Ingrese password");
		}else{
			//alert("Welcome");
			$(location).href=url;
		}
	});
});