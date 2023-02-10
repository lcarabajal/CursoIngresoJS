	/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    let primerNumeroIngresado;
	let primerNumero; 
	let segundoNumeroIngresado;
	let segundoNumero;
	let resultado;
	
    primerNumeroIngresado = document.getElementById("txtIdNumeroDividendo").value; 
	segundoNumeroIngresado = document.getElementById("txtIdNumeroDivisor").value;

	primerNumero= parseInt(primerNumeroIngresado);
    segundoNumero= parseInt(segundoNumeroIngresado); 

    resultado = primerNumero % segundoNumero; 

	alert("El Resto es : " + resultado); 
}
