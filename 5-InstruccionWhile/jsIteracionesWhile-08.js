/*
Al presionar el botón pedir números hasta que el usuario quiera 
sumar los que son positivos y multiplicar los negativos.
*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';
    
	while(respuesta=="si")
	{
		respuesta=prompt("Si quieres sumar ingrese: 1, si quiere multiplicar los negativos ingrese: 0, y si quieres parar ingrese: no");		
	}
    while(respuesta==1)
	{
		numeroIngresado=prompt("Ingrese un numero positivo");
		numeroIngresado=parseInt(numeroIngresado);
		sumaPositivos=numeroIngresado+sumaPositivos;
		sumaPositivos=parseInt(sumaPositivos);
		respuesta=prompt("Si quieres sumar ingrese: 1, si quiere multiplicar los negativos ingrese: 0, y si quieres parar ingrese: no");
	}
	while(respuesta==0)
	{
		numeroIngresado=prompt("Ingrese un numero negativo");
		numeroIngresado=parseInt(numeroIngresado);
		multiplicacionNegativos=numeroIngresado*multiplicacionNegativos;
		multiplicacionNegativos=parseInt(multiplicacionNegativos);
		respuesta=prompt("Si quieres sumar ingrese: 1, si quiere multiplicar los negativos ingrese: 0, y si quieres parar ingrese: no");
	}
	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;
}