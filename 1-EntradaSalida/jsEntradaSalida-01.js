/*
lucas carabajal damian silva 
if extra 
A -realizar un algoritmo para ingresar los datos por promt de una pareja de viajero espaciales, 
necesitamos pedir los nombre s de los dos pasajeros y los pesos corporales de cada uno ,
al final deberemos mostrar un mensaje que diga 
“bienvenidos a Space x JOSE y MARIA , sus pesos son de 60 y 80 kilos cada uno ,y sumados con 150 kilos”
 al algoritmo anterior se le debe agregar el siguiente mensaje si los kilos superan los 250 kilos entre los dos pasajeros
 “ con el peso actual de 290 kilos , ustedes no pueden viajar”

 B-Al algoritmo anterior agregarle otro mensaje (otro alert), que indique el precio del viaje.
los pasajes salen 2500 cada uno.
si los pasajeros suman entre 200 y 220 .No tienen descuento
si tiene entre 220 y 249 se les suma un 20% de incremento.
si pesas entre 180 y 199 se hace un descuento del 15% ,
si pesas entre 161 y 179 se hace un descuento del 25% ,
y si pesan entre los dos menos de 160 kilos el descuento es del 30%

C-Al algoritmo anterior se le debe agregar la carga de si las personas son argentinos o no, de ser argentino el precio es de 2000 y sino es de 2500.

    si los pasajeros suman entre 200 y 220 .No tienen descuento
    si tiene entre 220 y 249 se les suma un 20% de incremento.si es argentino el incremento es del 10% el incremento.
    si pesas entre 180 y 199 se hace un descuento del 15% ,(un 20% si sos argentino) 
    si pesas entre 161 y 179 se hace un descuento del 25% ,(un 40% si sos argentino) 
    y si pesan entre los dos menos de 160 kilos el descuento es del 30%(un 50% si sos argentino)
*/
function mostrar()
{
	let nombreIngresado;
	let pesoIngresado;
	let nombreIngresado2;
	let pesoIngresado2;
	let pesoTotal;
	let pasajes;
	let precioBruto;
	let descuento=0;
	let PrecioTotal;
	let porcentaje; 
    let mensaje;
    let Tipodepasaje;   
	
	nombreIngresado= prompt("Ingrese su Nombre: ");
	pesoIngresado= prompt("Ingrese su peso corporal: ");
	pesoIngresado=parseInt(pesoIngresado);
	
	nombreIngresado2= prompt("Ingrese su Nombre: ");
	pesoIngresado2= prompt("Ingrese su peso corporal: ");
	pesoIngresado2=parseInt(pesoIngresado2);
	
	Tipodepasaje= prompt("Ingrese el tipo de pasaje (nacional o extranjero)").toLowerCase();
	pesoTotal= pesoIngresado + pesoIngresado2;

	
    
    if(pesoTotal>249)
    {
        mensaje="con el peso actual "+ pesoTotal + " ustedes no pueden viajar"; 
    }
    else
    {
    	if(Tipodepasaje == "extranjero")
    	{
    		pasajes=2500;
    		if(pesoTotal>219)
	    	{
	    		descuento=20;
	    	}
	    	else
	    	{
	    		if(pesoTotal>199) 
	    		{
	    			descuento=0;
	    		}
	    		else
	    		{
	    			if(pesoTotal>179)
	    			{
	    				descuento=-15;
	    			}
    			    else
    			    {
    				    if(pesoTotal>160)
	    				{
	    					descuento=-25;
	    				}
	    				else
	    				{
	    					descuento=-30;
	    				}
	    		    }
    			}
    		}
    	}
    	else
    	{
    		pasajes= 2000;
    		if(pesoTotal>219)
	    	{
	    		descuento=10;
	    	}
	    	else
	    	{
	    		if(pesoTotal>199) 
	    		{
	    			descuento=0;
	    		}
	    		else
	    		{
	    			if(pesoTotal>179)
	    			{
	    				descuento=-20;
	    			}
    			    else
    			    {
    				    if(pesoTotal>160)
	    				{
	    					descuento=-40;
	    				}
	    				else
	    				{
	    					descuento=-50;
	    				}
	    		    }
    			}
    		}
    	}
    }
    precioBruto = pasajes * 2; 
    porcentaje = (precioBruto * descuento)/100;
    PrecioTotal = precioBruto + porcentaje;
    mensaje= "pasajeros: "+nombreIngresado+" y "+nombreIngresado2+" el monto a pagar es: "+PrecioTotal
    alert(mensaje); 
}  	
     
  

