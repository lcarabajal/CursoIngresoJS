/*
lucas carabajal damian silva 
switch-07-
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("Oeste");
			break;
		case "Cataratas":
		    alert("Norte");
		    break;
		case "Mar del plata":
		    alert("Este");
		    break;
		case "Ushuaia":
		    alert("Sur");
		    break;    	
	}
}