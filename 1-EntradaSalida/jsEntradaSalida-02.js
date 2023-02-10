/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    let nombreIngresado; 
    nombreIngresado =prompt("Ingrese su nombre ", "Natalia Natalia");
    alert("su nombre es : "+nombreIngresado+" Bienvenido");


    /*
    let nombre;
    nombre="NATALIA";
    alert(nombre);
    alert("nombre");
    alert("nombre: "+nombre);  
    Esto esta bien 
    */

    /*    
    let nombre;
    alert(nombre);
    nombre="Harry Potter";	
    Esto esta mal ordenado, no muestra undefined pero no funciona 
    */ 



	/*
	alert(nombre);
	var nombre; 
    nombre="Harry Potter";
    Esto esta mal ordenado, resultado undefined  
    */ 



	

	//let person = prompt("Please enter your name", "Harry Potter");
}

function mostrar()
{
    //alert("Esto funciona de maravilla.");
    //alert ("Hola"); //funciona pero esta mal escrito, no se deja espacio.
    //alert("Hola") //funciona pero falta el ; esta mal escrito.
    // Alert("Hola");
    //"Bienvenidos" Esto no funciona y no deja correr el programa. 



/*
if extra 
A -realizar un algoritmo para ingresar los datos por promt de una pareja de viajero espaciales, 
necesitamos pedir los nombres de los dos pasajeros y los pesos corporales de cada uno ,
al final deberemos mostrar un mensaje que diga 
“bienvenidos a Space x JOSE y MARIA , sus pesos son de 60 y 80 kilos cada uno ,y sumados con 150 kilos”
 al algoritmo anterior se le debe agregar el siguiente mensaje si los kilos superan los 250 kilos entre los dos pasajeros
 “ con el peso actual de 280 kilos , ustedes no pueden viajar”
*/
 let primerPasajero;
 let segundoPasajero;
 let primerPeso;
 let segundoPeso;
 let pesoTotal;
 let precioInicial;
 let porcentaje;
 let precioFinal;
 let mensaje;
 let segundoMensaje;

 primerPasajero = prompt("Ingrese su nombre: ", "Jose");
 primerPeso = prompt("Ingrese su peso: ");
 primerPeso = parseFloat(primerPeso);
 segundoPasajero = prompt("Ingrese su nombre: ", "Maria");
 segundoPeso = prompt("Ingrese su peso: ");
 segundoPeso = parseFloat(segundoPeso);

 pesoTotal = primerPeso + segundoPeso;

 precioInicial = 5000;
 porcentaje = 0;
 
 if (pesoTotal >249)
 {
    mensaje = "Bienvenidos a Space x: " + primerPasajero + " y "+ segundoPasajero + " , sus pesos son de: " + primerPeso + " y " + segundoPeso + " kilos cada uno, y sumados son " + pesoTotal + " kilos. Con el peso actual ustedes no pueden viajar";  
 }
 else
 { 
    if (pesoTotal >219) 
    {
        porcentaje = 20;
    }
    else 
    {
        if (pesoTotal >199) 
        {
            porcentaje = 0;
        }
        else 
        {
            if (pesoTotal > 179) 
            {
                porcentaje = -15;
            }
            else
            {
                if (pesoTotal > 160)
                {
                    porcentaje = -25;
                }
                else 
                {
                    porcentaje = -30;
                }
            }
        }   
    }   
    mensaje = "Bienvenidos a Space x: " + primerPasajero + " y "+ segundoPasajero + " , sus pesos son de: " + primerPeso + " y " + segundoPeso + " kilos cada uno, y sumados son " + pesoTotal + " kilos";
    segundoMensaje = "El precio de sus pasajes es de: " + precioFinal;
}


precioFinal = precioInicial + (precioInicial * porcentaje)/100;
//mensaje = "Bienvenidos a Space x: " + primerPasajero + " y "+ segundoPasajero + " , sus pesos son de: " + primerPeso + " y " + segundoPeso + " kilos cada uno, y sumados son " + pesoTotal + " kilos"; 
//segundoMensaje = "El precio de sus pasajes es de: " + precioFinal;

alert(mensaje);
alert(segundoMensaje);

//Parte B
/*
if extra
B-Al algoritmo anterior agregarle otro mensaje (otro alert), que indique el precio del viaje.
los pasajes salen 2500 cada uno.
si tiene entre 220 y 249 se les suma un 20% de incremento. //
si los pasajeros suman entre 200 y 220 .No tienen descuento //
si pesas entre 180 y 199 se hace un descuento del 15% ,//
si pesas entre 161 y 179 se hace un descuento del 25% ,//
y si pesan entre los dos menos de 160 kilos el descuento es del 30%
*/
}
