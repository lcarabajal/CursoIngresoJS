/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombreIngresado
	nombreIngresado =prompt("Ingrese su nombre ");
	document.getElementById('txtIdNombre').value=nombreIngresado; 
	
	/*
	Esto CREA un cuadro-alerta en donde el usario tiene que "Ingresar su nombre" para que
	luego en el cuadro donde tendria que rellenar se rellene con la información que 
	ingreso en el cuadro-alerta
	*/

}

