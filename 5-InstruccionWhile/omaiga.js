/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
*/
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var suma;
	var cantidadDepositivos; 

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt(
        "1-Suma de los negativos\n2-Suma de los positivos\n3-Cantidad de positivos.\n4-Cantidad de negativos.\n5-Cantidad de ceros.\n6-Cantidad de números pares.\n7-Promedio de positivos.\n8-Promedios de negativos.\n9-Diferencia entre positivos y negativos");
		numeroIngresado=parseInt(numeroIngresado);
		respuesta=prompt("desea continuar?");
	}
	while(respuesta=="no")
	{
		respuesta=prompt("que quiere hacer ahora? "); 
	}
	while(respuesta==1)
	{
		if(numeroIngresado<0)
		{
			sumaNegativos=sumaNegativos+numeroIngresado
		}   
	}

	document.write("la suma de negativos es :"+sumaNegativos);
}//FIN DE LA FUNCIÓN
/*
prompt(
        "1-Suma de los negativos\n2-Suma de los positivos\n3-Cantidad de positivos.\n4-Cantidad de negativos.\n5-Cantidad de ceros.\n6-Cantidad de números pares.\n7-Promedio de positivos.\n8-Promedios de negativos.\n9-Diferencia entre positivos y negativos"\n);
*/