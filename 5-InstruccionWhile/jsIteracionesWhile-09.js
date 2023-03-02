/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero:");
		numeroIngresado=parseInt(numeroIngresado);
		banderaDelPrimero=numeroIngresado;
		respuesta=prompt("desea continuar?");
		if(respuesta=="si")
		{
			numeroIngresado=prompt("ingrese otro numero: ");
		}
	}
	while(banderaDelPrimero>numeroIngresado)
	{
		banderaDelPrimero=numeroMaximo;
	}
	
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN