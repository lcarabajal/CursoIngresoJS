/*
Lucas Carabajal Damian Silva 
Switch -01-
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
function mostrar()
{
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	
    switch(mesDelAño)
    {
         case "Enero":
               alert("Que Comiences Bien el Año!");
               break;
         case "Marzo":
               alert("A Clases!!");
               break;
         case "Julio":
         	   alert("Se vienen las vacaciones!!!");
         	   break;
         case "Diciembre":
         	   alert("Felices Fiestas!!!");
         	   break;    
    }

}//FIN DE LA FUNCIÓN