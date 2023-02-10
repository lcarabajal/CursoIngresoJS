/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let primerNumeroIngresado;
	let primerNumero; 
	let segundoNumeroIngresado;
	let segundoNumero;
	let resultado; 

	//primerNumero = 66;
	//segundoNumero = 24; 

	primerNumeroIngresado = document.getElementById("txtIdNumeroUno").value;  //"66"
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDos").value;  //"24"


   // primerNumero= parseInt(primerNumeroIngresado);
   // segundoNumero= parseInt(segundoNumeroIngresado); 

	primerNumero= parseFloat(primerNumeroIngresado);
    segundoNumero= parseFloat(segundoNumeroIngresado); 


	resultado = primerNumero + segundoNumero; 

	alert("El resultado es : " + resultado )	
}

