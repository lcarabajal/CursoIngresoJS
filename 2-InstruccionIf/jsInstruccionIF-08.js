/*
Lucas Damian Carabajal Silva 
if-08-
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
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
		
	}	
	else 
	{
		alert("Es soltero y no es menor");
	} 	
}