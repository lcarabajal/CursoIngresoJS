/* 
lucas carabajal damian silva 

En una partida de todos contra todos de CS-GO (Juego de disparos) un grupo de 5 amigos quiere saber las estadísticas al finalizar la partida.
Para esto se requieren los siguientes datos:
Nombre del jugador.
Edad del jugador - Mayor de edad.
Bajas (Cantidad de veces que mató) - Número positivo inclusive 0.
Muertes (Cantidad de veces que murió) - Número positivo inclusive 0.
INFORMAR
A) Nombre del jugador más joven.
B) El jugador que más bajas tuvo.
C) El jugador que menos muertes tuvo.
D) El promedio de bajas.
E) Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15.
F) El nombre y edad del jugador que más muertes tuvo.

*/
function mostrar()
{
	let nombreJugador;
	let EdadDelJugador; 
	let ContadorBajas;
	let ContadorMuertes;
	let contador=0; 
	let EdadMasJoven;
	let NombreMasJoven;
	let mayorBajasAcumuladas;
	let menorMuertesAcumuladas;
	let mayorMuertesAcumuladas;
	let bajasTotales=0;
	let contadorJugadores=0;
	let promedioBajas;
	let nombreMasBajas;
	let nombreMenosMuerte;
	let nombreMasMuertes;
	let EdadMasMuertes;

	while(contador<5)
	{
		nombreJugador=prompt("Ingrese su nombre:").toLowerCase();
		while(isNaN(nombreJugador)==false)
		{
			nombreJugador=prompt("Error,Ingrese su nombre:").toLowerCase();
		}
		EdadDelJugador=prompt("Ingrese su edad:");
		EdadDelJugador=parseInt(EdadDelJugador);
		while(isNaN(EdadDelJugador)==true)
		{
			EdadDelJugador=prompt("Error,Ingrese su edad:");
			EdadDelJugador=parseInt(EdadDelJugador);
		}
		while(EdadDelJugador<1 || EdadDelJugador>100)
		{
			EdadDelJugador=prompt("Error,Ingrese su edad:");
			EdadDelJugador=parseInt(EdadDelJugador);
		}
		ContadorBajas=prompt("ingrese cuantas bajas tuvo en total: ")
		ContadorBajas=parseInt(ContadorBajas);
		while(isNaN(ContadorBajas)==true)
		{
			ContadorBajas=prompt("Error,cuantas bajas tuvo en total:");
			ContadorBajas=parseInt(ContadorBajas);
		}
		while(ContadorBajas<0)
		{
			ContadorBajas=prompt("Error,cuantas bajas tuvo en total:");
			ContadorBajas=parseInt(ContadorBajas);
		}
		ContadorMuertes=prompt("ingrese cuantas Muertes tuvo en total: ")
		ContadorMuertes=parseInt(ContadorMuertes);
		while(isNaN(ContadorMuertes)==true)
		{
			ContadorMuertes=prompt("Error,cuantas Muertes tuvo en total:");
			ContadorMuertes=parseInt(ContadorMuertes);
		}
		while(ContadorMuertes<0)
		{
			ContadorMuertes=prompt("Error,cuantas Muertes tuvo en total:");
			ContadorMuertes=parseInt(ContadorMuertes);
		}
		
		if(EdadDelJugador<EdadMasJoven || contador==0)
		{
			EdadMasJoven=EdadDelJugador;
			NombreMasJoven=nombreJugador;
		}
		
		if(ContadorBajas>mayorBajasAcumuladas || contador==0)
		{
			mayorBajasAcumuladas=ContadorBajas;
			nombreMasBajas=nombreJugador;
		}
		
		if(ContadorMuertes<menorMuertesAcumuladas || contador==0)
		{
			menorMuertesAcumuladas=ContadorMuertes;
			nombreMenosMuerte=nombreJugador;
		}
		
		if(ContadorMuertes>mayorMuertesAcumuladas || contador==0)
		{
			mayorMuertesAcumuladas=ContadorMuertes;
			nombreMasMuertes=nombreJugador;
			EdadMasMuertes=EdadDelJugador;
		}
		
		if(ContadorBajas>10 && ContadorBajas<16)
		{
			if(EdadDelJugador>19 && EdadDelJugador<31)
			{
				contadorJugadores++;
			}
		}
		contador++;
	}
		bajasTotales=bajasTotales+ContadorBajas;
		promedioBajas=5/bajasTotales;
		promedioBajas=parseInt(promedioBajas);
		//a)Nombre del jugador más joven.
		mensaje=("El nombre del jugador mas joven es: "+NombreMasJoven);
		//b)El jugador que más bajas tuvo.
		mensaje+=("\nEl jugador que mas bajas tuvo es: "+nombreMasBajas);
		//c)El jugador que menos muertes tuvo.
		mensaje+=("\nEl jugador que menos muertes tuvo es: "+nombreMenosMuerte);
		//d)El promedio de bajas.
		mensaje+=("\nEl promedio de bajas es de: "+promedioBajas);
		//e)Cantidad de jugadores que tienen entre 20 y 30 años cuyas bajas están entre 10 y 15.
		mensaje+=("\nLa cantidad de jugadores que tienen entre 20 y 30 años con bajas entre 10 y 15 son: "+contadorJugadores);
		//F) El nombre y edad del jugador que más muertes tuvo.
		mensaje+=("\nEl nombre del jugador con mas muertes es: "+nombreMasMuertes+" y la edad es: "+EdadMasMuertes);
		alert(mensaje);
}
/*
promedio = x / contadortotal
procentaje x * 100 / contador total
*/