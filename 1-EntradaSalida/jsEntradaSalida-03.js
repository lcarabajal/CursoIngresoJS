/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	nombreIngresado= document.getElementById('txtIdNombre').value;
    alert(nombreIngresado);
    //nombreIngresado=txtIdNombre.value;
	//alert("su nombre es : "+nombreIngresado+" Bienvenido");
      /*Esto sirve para sacar la información del cuadro en donde la persona
    rellena en la pagina*/ 
  
   /*
    let nombreIngresado; 
    nombreIngresado =prompt("Ingrese su nombre ", "Natalia Natalia");
    alert("su nombre es : "+nombreIngresado+" Bienvenido");
   */

    //txtIdNombre.value solo funciona en chrome    

    /*
    Metodos de Entrada:
    prompt
    document.getElementById

    Metodos de Salida: 
    alert 
    document.getElementById
    document.write
    */
}


