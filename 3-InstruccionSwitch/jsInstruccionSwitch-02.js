/*
lucas carabajal damian silva 
switch -02-
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/
function mostrar()
{
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

	switch(mesDelAño)
	{
	     case "Diciembre":
	     	 alert("Ya pasamos el frio, ahora calor!");
               break;
	     case "Enero":
	     	 alert("Ya pasamos el frio, ahora calor!");
               break;
	     case "Febrero":
               alert("Ya pasamos el frio, ahora calor!");
               break;
         case "Marzo":
	     	 alert("Falta para el invierno");
               break;
	     case "Abril":
	     	 alert("Falta para el invierno");
               break;
	     case "Mayo":
             alert("Falta para el invierno");
               break;
         case "Junio":
             alert("Falta para el invierno");
               break;
         default:
         alert("Abrigate que hace frio");
         break;           
	}
}