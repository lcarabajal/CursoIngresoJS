/*
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.//mayortemperaturaCorporal
b) Cuantos mayores de edad estan viudos //contadorMayorViudos
c) La cantidad de hombres que hay solteros o viudos.//contadorSinpareja
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura//cantidadCorporal
e) El promedio de edad entre los hombres solteros.//promedioEdad
*/
function mostrar()
{
	let nombreIngresado;
	let edadIngresada;
	let edadGuardada=0;
	let promedioEdad; 
	let sexoIngresado;
	let estadoCivil;
	let TotalSinPareja=0;
	let contadorViudos=0;
	let contadorMayorViudos=0;
	let contadorSinpareja=0;
	let temperaturaCorporal;
	let cantidadCorporal=0;
	let mayortemperaturaCorporal;
	let mensaje;
	let mensaje2;
	let contador=0;

	while(contador<3)
	{
		nombreIngresado= prompt("Ingrese su nombre: ");
    	
		edadIngresada= prompt("Ingrese su edad: ");
		edadIngresada=parseInt(edadIngresada);
		while(edadIngresada<0 || edadIngresada>100)
		{
			edadIngresada=prompt("porfavor ingresar edad valida: ");
			edadIngresada=parseInt(edadIngresada);
		}
		sexoIngresado= prompt("Ingrese Sexo: f ó m");
		while(sexoIngresado!= "f" && sexoIngresado!= "m")
		{
			sexoIngresado=prompt("error, Ingrese f ó m: ");
		}
		
		estadoCivil= prompt("Ingrese Estado Civil: s ó c ó v");
		while(estadoCivil!="s" && estadoCivil!="c" && estadoCivil!="v")
		{
			estadoCivil=prompt("Error, Ingrese s ó c ó v");
		}
		temperaturaCorporal= prompt("Ingrese su temperatura corporal: ");
		temperaturaCorporal=parseInt(temperaturaCorporal);
		while(temperaturaCorporal<0 || temperaturaCorporal>40)
		{
			temperaturaCorporal=prompt("error, Ingrese temperatura corporal: ");
			temperaturaCorporal=parseInt(temperaturaCorporal);
		}

		if(contador==0)
		{
			mayortemperaturaCorporal=temperaturaCorporal;
			mensaje= nombreIngresado + " es el que mayor temperatura tiene";
		}
		else
		{ 
			if(temperaturaCorporal>mayortemperaturaCorporal)
			{
				mayortemperaturaCorporal=temperaturaCorporal; 
				mensaje= nombreIngresado + " es el que mayor temperatura tiene";
			}
		}
		
		if(sexoIngresado=="m")
		{
			edadGuardada=edadGuardada+edadIngresada;
			if(edadIngresada>59)
			{
				switch(temperaturaCorporal)
				{
					case 38:
					case 39:
					case 40: 
						cantidadCorporal=cantidadCorporal+1;
						mensaje2="hay en el viaje " +cantidadCorporal+ " que son mayores de 60 y tienen más de 38°"
					break;
				}
				switch(estadoCivil)
				{
					case"s":
					    contadorSinpareja= contadorSinpareja+1;
					break;
					case "v":
						contadorMayorViudos= contadorMayorViudos+1;
					break; 
				}
			}	
			else
			{
				if(edadIngresada>17)
				{
					switch(estadoCivil)
					{
						case"s":
						case "v":
							contadorSinpareja= contadorSinpareja+1;
						break; 
					}
				}
				else
				{
					switch(estadoCivil)
					{
						case"s":
						case "v":
							contadorSinpareja= contadorSinpareja+1;
						break; 
					}
				}
			}
		}
		else
		{
			switch(estadoCivil)
			{
				case "v":
					contadorViudos= contadorViudos+1;
				break;				
			}
		}					
		contador=contador+1;
	}
	    promedioEdad=contador+edadGuardada/contadorSinpareja;
		promedioEdad=parseInt(promedioEdad);
		TotalSinPareja= contadorSinpareja+contadorMayorViudos;
		alert("el promedio de edad de los solteros son: " + promedioEdad);
		alert(mensaje);//me dice quien es el que mayor temperatura tiene Con su nombre 
		alert(mensaje2);//me dice cuantos mayores tienen mas de 38°
	    alert("la cantidad de mayores de edad que son viudos son: "+contadorMayorViudos)
		alert("la cantidad de hombres que son viudos o solteros son: "+TotalSinPareja);
}