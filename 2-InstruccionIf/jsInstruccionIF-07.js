/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
{
	let edadIngresada;
	let estadoCivilIngresada;
	
	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);
    
    estadoCivilIngresada=document.getElementById('estadoCivil').value;
  
	if(edadIngresada<18 && estadoCivilIngresada != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero"); 
	}
}