/*
lucas carabajal damian silva 
switch-10-
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar
en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche
*/
function mostrar()
{
	var mensaje;
	var estacionIngresada=txtIdEstacion.value;
	var destinoIngresado=txtIdDestino.value; 
      
    switch(estacionIngresada)
    {
    	case "Invierno":
    	    break;
    	case "Verano":
    	    break;
    	case "Otoño":
    		break;
    	default:
    		break;
    }
    
    switch(destinoIngresado)
    {
    	case "Bariloche":
    		break;
    	case "Cataratas":
    	    break; 
    	case "Mar Del Plata": 
    	    break;
    	default:
    	    break;     	
    }
}