/*
lucas carabajal damian silva 
while 06
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;

	contador=0;
	acumulador=0;

	while(contador < 5)
	{
		contador= contador+1;
		numeroIngresado = prompt("Ingrese un numero");
	    numeroIngresado = parseInt(numeroIngresado);
		acumulador = numeroIngresado + acumulador;
	}
	document.getElementById("txtIdSuma").value = acumulador;
	promedio = acumulador / 5;
	document.getElementById("txtIdPromedio").value = promedio;
}