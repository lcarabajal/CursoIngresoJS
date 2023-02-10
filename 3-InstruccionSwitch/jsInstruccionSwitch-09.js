/*
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y destinoIngresado para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% 
y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	let estacionIngresado;
	let destinoIngresado;

	let porcentaje=0;
    let precio=15000;
    let precioPorcentaje;
    let precioFinal;


	estacionIngresado=document.getElementById("txtIdEstacion").value;
	destinoIngresado=document.getElementById("txtIdDestino").value;
		
	switch(estacionIngresado)
	{
		case"Invierno":
			switch(destinoIngresado)
			{
			case "Bariloche":
				porcentaje=20;//bariloche tiene un aumento del 20%
				break;

			case "Cataratas"://cataratas y Cordoba tiene un descuento del 10%
			case "Cordoba":
				porcentaje=-10;
				break;

			case "Mar del plata"://Mar del plata tiene un descuento del 20%
				porcentaje=-20;
				break;
			}
		break;

		case"Verano":
			switch(destinoIngresado)
			{
			case"Bariloche"://bariloche tiene un descuento del 20% 
				porcentaje=-20;
				break;

			case "Cataratas":
			case "Cordoba":
				porcentaje=10;// cataratas y Cordoba tiene un aumento del 10%
				break;

			case "Mar del plata"://Mar del plata tiene un aumento del 20%
				porcentaje=20;
				break;
			}
		break;

		case"Otoño":
		case"Primavera":
			switch(destinoIngresado)
			{
			case "Bariloche": //bariloche tiene un aumento del 10%				
			case"Mar del plata"://Mar del plata tiene un aumento del 10% 				
			case "Cataratas":// cataratas tiene un aumento del 10%
				porcentaje=10;
				break;
			case"Cordoba":
				porcentaje=0;
				break
			}
		break;
	}
    precioPorcentaje= (precio*porcentaje)/100;
    precioFinal=precio+precioPorcentaje;
	alert("el total a pagar es "+precioFinal);
}