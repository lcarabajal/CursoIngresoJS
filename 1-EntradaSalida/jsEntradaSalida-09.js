/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO"
al ejercicio nueve (9), se  debe cambiar el porcentaje, 
debe ser ingresado por prompt el porcentaje ,
puede ser un numero del 1 al 100 de porcentaje de aumento
.*/
function mostrarAumento()
{
    let importe; 
    let aumento; 
    let resultado;
    let incremento; 
    
    incremento = prompt("Ingrese porcentaje del 1 a 100");
    
    importe = document.getElementById("txtIdSueldo").value;
    importe = parseInt(importe);

    aumento = (importe * incremento)/100;
    resultado = aumento + importe

    document.getElementById("txtIdResultado").value = resultado          
}
