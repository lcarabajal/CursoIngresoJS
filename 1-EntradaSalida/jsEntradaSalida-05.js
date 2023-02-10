/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado //Creas la información 
	let edadIngresada //Creas la información
	let mensaje;

	nombreIngresado =document.getElementById('txtIdNombre').value; // le das un valor 
	edadIngresada =document.getElementById('txtIdEdad').value; // le das un valor
	
	//alert("usted se llama " +nombreIngresado + " y tiene " +edadIngresada); //sale el resultado 
    
    mensaje = "Su nombre es: "; 
    mensaje = mensaje + nombreIngresado; 
    mensaje = mensaje + " y tiene "; 
    mensaje = mensaje + edadIngresada; 
    mensaje = mensaje + " años "; 

    alert(mensaje); 
}


