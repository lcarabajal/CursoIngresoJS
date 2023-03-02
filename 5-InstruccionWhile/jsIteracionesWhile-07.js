/*
lucas carabajal silva damian 
while -07-
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		contador=contador+1;
		acumulador=numeroIngresado+acumulador;
		respuesta=prompt("Si quiere seguir ingrese: si, sino ingrese: no");
	}
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
}