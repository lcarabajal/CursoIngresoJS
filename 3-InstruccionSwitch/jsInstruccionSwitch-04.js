/*
lucas damian carabajal silva 
switch-04-
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	
	switch(mesDelAño)
	{
		case "Diciembre"
	    case "Enero":
        case "Marzo":
	    case "Julio":
		case "Mayo":
        case "Agosto":      
        case "Octubre":
	     	("Este mes tiene 31");
            break;
        case "Febrero":
            ("Este mes tiene 28 días");
            break;             
        default:
         alert("Este mes tiene 30 días");
         break;           
	}
}