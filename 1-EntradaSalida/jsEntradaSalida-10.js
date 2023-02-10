/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
al ejercicio (10), se  debe cambiar el porcentaje, 
debe ser ingresado por prompt el porcentaje ,
puede ser un numero del 1 al 100 de porcentaje de descuento
*/
function mostrarAumento()
{
	let importe;
	let porcentaje 
    let descuento; 
    let resultado;
    
    porcentaje = prompt("Ingrese porcentaje del 1 a 100");
    descuento = porcentaje/100 
    
    
    importe = document.getElementById("txtIdImporte").value;
    importe = parseInt(importe);

    descuento = importe * descuento 
    resultado = importe - descuento

    document.getElementById("txtIdResultado").value = resultado 
}
  
    /*
    let temperatura;
    temperatura=37  
    if(temperatura>36)
    {
        alert("tiene fiebre");
    }
    else // no va if(temperatura<37)
    {
        alert(" no tiene fiebre");
    }
    alert("siempre se ejecuta");
    */ 