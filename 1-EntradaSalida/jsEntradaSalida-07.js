/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let primerNumeroIngresado;
	let primerNumero; 
	let segundoNumeroIngresado;
	let segundoNumero;
	let resultado;

    primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value; 
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumero= parseFloat(primerNumeroIngresado);
    segundoNumero= parseFloat(segundoNumeroIngresado); 

    resultado = primerNumero + segundoNumero; 

	alert("La suma es : " + resultado )

}

function restar()
{
	let primerNumeroIngresado;
	let primerNumero; 
	let segundoNumeroIngresado;
	let segundoNumero;
	let resultado;

    primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value; 
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumero= parseFloat(primerNumeroIngresado);
    segundoNumero= parseFloat(segundoNumeroIngresado); 

    resultado = primerNumero - segundoNumero; 

	alert("La resta es : " + resultado )
}

function multiplicar()
{ 
	let primerNumeroIngresado;
	let primerNumero; 
	let segundoNumeroIngresado;
	let segundoNumero;
	let resultado;

    primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value; 
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumero= parseFloat(primerNumeroIngresado);
    segundoNumero= parseFloat(segundoNumeroIngresado); 

    resultado = primerNumero * segundoNumero; 

	alert("La multiplicación es : " + resultado )
}

function dividir()
{
	let primerNumeroIngresado;
	let primerNumero; 
	let segundoNumeroIngresado;
	let segundoNumero;
	let resultado;

    primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value; 
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;

	primerNumero= parseFloat(primerNumeroIngresado);
    segundoNumero= parseFloat(segundoNumeroIngresado); 

    resultado = primerNumero / segundoNumero; 

	alert("La division es : " + resultado )
}

