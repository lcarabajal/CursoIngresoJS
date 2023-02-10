/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let gradosFahrenheit 
	let gradosCentigrados

    gradosFahrenheit = document.getElementById('txtIdTemperatura').value; 

    gradosCentigrados = (gradosFahrenheit - 32)/1,8; 

    alert(gradosFahrenheit + " Fahrenheit son " + gradosCentigrados +" centigrados") 
}

function CentigradosFahrenheit () 
{
	let gradosFahrenheit 
	let gradosCentigrados

    gradosCentigrados = document.getElementById('txtIdTemperatura').value; 

    gradosFahrenheit = (gradosCentigrados + 32) * 1,8; 

    alert(gradosCentigrados + " centigrados son " + gradosFahrenheit +" Fahrenheit") 
}
