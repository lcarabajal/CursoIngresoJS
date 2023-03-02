/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
function mostrar()
{
	var productosIngresados;
	var precioIngresado;
	var cantidadIngresada; 
    var contador=0;
	var marcaIngresada;	
	var fabricanteIngresado;
	var banderaAlcoholMasBarato=false;
	var precioAlcoholMasBarato;
	var fabricanteAlcoholBarato; 
	var cantidadUnidadesAlcoholBarato;
	var acumuladorDeJabon=0;
	var contadorDeJabon=0;
	var acumuladorDeAlcohol=0;
	var contadorDeAlcohol=0;
	var acumuladorDeBarbijo=0;
	var contadorDeBarbijo=0;
	var promedioTipoConMasUnidades;

	while(contador<5)
	{
		productosIngresados=prompt("Ingrese un tipo de producto: barbijo, jabon o alcohol").toLowerCase(productosIngresados);
		while(productosIngresados!="barbijo" && productosIngresados!="jabon" && productosIngresados!="alcohol")
        {
			productosIngresados=prompt("ERROR, porfavor Ingrese un tipo de producto: barbijo, jabon o alcohol").toLowerCase(productosIngresados);
		}
		
		precioIngresado=prompt("Ingrese un valor entre 100 y 300");
		precioIngresado=parseInt(precioIngresado);
		while(precioIngresado<100 || precioIngresado>300)
		{
			precioIngresado=prompt("ERROR, porfavor Ingrese un valor entre 100 y 300");
			precioIngresado=parseInt(precioIngresado);
		}
		
		cantidadIngresada=prompt("Ingrese una cantidad de unidades entre el 0 y 1000");
		cantidadIngresada=parseInt(cantidadIngresada);
		while(cantidadIngresada<1 || cantidadIngresada>1000)
		{
			cantidadIngresada=prompt("ERROR, porfavor Ingrese una cantidad de unidades entre el 0 y 1000");
			cantidadIngresada=parseInt(cantidadIngresada);
		}
		marcaIngresada=prompt("Ingrese marca deseada: Solana, mesquil, lanber").toLowerCase(marcaIngresada);
		fabricanteIngresado=prompt("Ingrese fabricante deseado: Vandoni, Bramiel o pompa").toLocaleLowerCase(fabricanteIngresado);
        
        //a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
		switch(productosIngresados)
		{
			case "alcohol":
				if(banderaAlcoholMasBarato==false)
				{
					banderaAlcoholMasBarato= true; 
					precioAlcoholMasBarato=precioIngresado;
					fabricanteAlcoholBarato= fabricanteIngresado;
                	cantidadUnidadesAlcoholBarato= cantidadIngresada;
				}
				else
				{	
					if(precioAlcoholMasBarato>precioIngresado)
					{
						precioAlcoholMasBarato=precioIngresado;
						fabricanteAlcoholBarato= fabricanteIngresado;
                		cantidadUnidadesAlcoholBarato= cantidadIngresada;
					}

				}
				acumuladorDeAlcohol+= cantidadIngresada;
				contadorDeAlcohol++;
			break;
		    //Aca ya hice el C por el acumulador de jabon
			case "jabon":
				acumuladorDeJabon+= cantidadIngresada;
				contadorDeJabon++;
			break;
			case "barbijo":
				acumuladorDeBarbijo+= cantidadIngresada;
				contadorDeBarbijo++;
			break;
		}
		contador=contador+1;
	}
   // b) Del tipo con mas unidades, el promedio por compra
	if(acumuladorDeAlcohol> acumuladorDeBarbijo && acumuladorDeAlcohol> acumuladorDeJabon)
	{
		promedioTipoConMasUnidades = acumuladorDeAlcohol / contadorDeAlcohol;
	}
	else
	{
		if(acumuladorDeBarbijo>acumuladorDeJabon)
		{
			promedioTipoConMasUnidades=acumuladorDeBarbijo/ contadorDeBarbijo;
		}
		else
		{
			promedioTipoConMasUnidades= acumuladorDeJabon/ contadorDeJabon;
		}
	}
	mensaje+= "De los alcoholes mas baratos el fabricante es: "+fabricanteAlcoholBarato+" con un cantidad de: "+ cantidadUnidadesAlcoholBarato;
    mensaje+= "Del tipo de producto con mayor cantidad de unidades el promedio de compra es: "+promedioTipoConMasUnidades;
	mensaje+= "La cantidad total de Jabones son: "+acumuladorDeJabon
}


/*
if(contadorDeAlcohol>0)
		{
			promedioTipoConMasUnidades = acumuladorDeAlcohol / contadorDeAlcohol;
		}
		else
		{

			promedioTipoConMasUnidades=

		}
*/

/* esto es otra forma de hacer el A pero solo el A, con el switch puedo hacer de todos en uno solo.
   if(productosIngresados== "alcohol")
		{
			if(banderaAlcoholMasBarato==false)
			{
				banderaAlcoholMasBarato= true; 
				precioAlcoholMasBarato=precioIngresado;
				fabricanteAlcoholBarato= fabricanteIngresado;
                cantidadUnidadesAlcoholBarato= cantidadIngresada;
			}
			else
			{
				if(precioAlcoholMasBarato>precioIngresado)
				{
					precioAlcoholMasBarato=precioIngresado;
				}

			}
		}
*/
