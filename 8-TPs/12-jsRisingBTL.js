/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldoBrutoIngresado;
	var numeroLegajo;
	
	//1- Leer Ejercicio 
	//2- Validación 
	
	//3- logica
    edadIngresada=prompt("Ingrese tu edad");
	edadIngresada=parseInt(edadIngresada);

    //repetir mientras.... la edad ingresada sea menor a 18 o mayor a 90
	while(edadIngresada<18 || edadIngresada>90)
	{
		edadIngresada=prompt("ERROR, reingresa tu edad");
		edadIngresada=parseInt(edadIngresada);
	}
	sexoIngresado=prompt("Ingrese su Sexo: f ó m");
	while(sexoIngresado!="f" && sexoIngresado!="m")
	//	while(!(sexoIngresado!="f" && sexoIngresado!="m")) == tambien es una forma valida de decir lo mismo ya que el ! funciona como negacion para todo los demas 
	{
		sexoIngresado=prompt("Error, ingrese sexo valido: f ó m");
	}
	estadoCivilIngresado=prompt("Ingrese su estado civil:\n 1-para soltero\n 2-para casados\n 3-para divorciados\n y 4-para viudos")
	while(estadoCivilIngresado!=1 && estadoCivilIngresado != 2 && estadoCivilIngresado != 3 && estadoCivilIngresado!= 4)
	{
		estadoCivilIngresado=prompt("ERROR, porfavor Ingrese su estado civil:\n 1-para soltero\n 2-para casados\n 3-para divorciados\n y 4-para viudos")
	}
	sueldoBrutoIngresado=prompt("Ingrese su sueldo bruto");
	sueldoBrutoIngresado=parseInt(sueldoBrutoIngresado);
	while(sueldoBrutoIngresado<8000)
	{
		sueldoBrutoIngresado=prompt("Error, porfavor ingresar un sueldo valido: ")
		sueldoBrutoIngresado=parseInt(sueldoBrutoIngresado);
	}
	numeroLegajo=prompt("ingrese numero de legajo:")
	numeroLegajo=parseInt(numeroLegajo);
	while(numeroLegajo<1000 || numeroLegajo<9999)
	{
		numeroLegajo=prompt("Error, porfavor ingrese numero de legajo:")
		numeroLegajo=parseInt(numeroLegajo);
	}







	document.getElementById('txtIdSueldo').value= sueldoBrutoIngresado;
	document.getElementById('txtIdLegajo').value= numeroLegajo;
	document.getElementById('txtIdEdad').value= edadIngresada;
    document.getElementById('txtIdSexo').value= sexoIngresado;
	document.getElementById('txtIdEstadoCivil').value= estadoCivilIngresado;
}
