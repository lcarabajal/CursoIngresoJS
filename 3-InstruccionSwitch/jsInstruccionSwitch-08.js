/*
lucas carabajal damian silva 
switch-08-
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Ushuaia":
		case "Bariloche":
			alert("FRIO");
			break;
		default:
			alert("CALOR");
			break;
	}
}

