/*
Al ingresar una edad debemos informar si la persona es 
mayor de edad (mas de 18 años) o 
adolescente (entre 13 y 17 años) o 
niño (menor a 13 años).
*/
function mostrar()
{ 
	let edadIngresada;

	edadIngresada=document.getElementById("txtIdEdad").value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17) //sos mayor de 17 ? 
	{
		alert("mayor"); //si? listo mayor 
	}
	else //no ? entonces...
	{
		if(edadIngresada>12) //sos mayor a 12 ? 
		{
			alert("adolescente"); //si ? listo adolescente
		}
		else //no ? entonces 
		{
		    alert("niño"); //sos un niño 			
		}
	}   
}

    /*
    if tiene dos valores 
    si es verdadero entra 
    si es falso entra en el else 
	

	let edadIngresada;

	edadIngresada=document.getElementById("txtIdEdad").value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17) 
	{
		alert("mayor");
	}
	if(edadIngresada>12)
	{
	    alert("adolescente");
	}
	else
	{
		alert("niño");			
	}
	*/


/*

	let edadIngresada;

	edadIngresada=document.getElementById("txtIdEdad").value;
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>17) //aca se pregunta 3 veces cuando en realidad deberia de funcionar a la primera
	{
		alert("mayor");
	}
	if(edadIngresada<18 && edadIngresada>12)
	{
		alert("adolescente");
	}
	if(edadIngresada<13)
	{
		alert("niño");
	}

*/



