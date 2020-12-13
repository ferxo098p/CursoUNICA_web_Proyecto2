function ocultar(){
	$('#anuncios').remove();
}
function tog(contenido){
	$('#'+contenido).toggle();
	if(contenido == 'cont1'){
		$('#cont2,#cont3,#cont4,#cont5').hide(); 
	}else if(contenido == 'cont2'){
		$('#cont1,#cont3,#cont4,#cont5').hide();
	}else if(contenido == 'cont3'){
		$('#cont1,#cont2,#cont4,#cont5').hide();
	}else if(contenido == 'cont4'){
		$('#cont1,#cont2,#cont3,#cont5').hide();
	}else if(contenido == 'cont5'){
		$('#cont1,#cont2,#cont3,#cont4').hide();
	}
};
function play(video){
	if(video == 'v1'){
		$('#'+video).get(0).play();
	}
}