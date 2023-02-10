/*
lucas damian carabajal silva 
if-10-
*/
function mostrar()
{
	let NotaDeExamen;

	Math.floor(Math.random() * 11);

   
    if(Math.floor(Math.random() * 11)<3)
    {
    	alert("vamos la proxima se puede");
    }
    else
    {
    	if(Math.floor(Math.random() * 11)>8)
    	{
    		alert("EXCELENTE");
    	}
    	else
    	{
    		alert("Aprobadó");
    	}
    }
}