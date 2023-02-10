function mostrar()
{
	let precio;
	let descuento;
	let porcentaje;
	let resultado;
	let resultadoFinal;    

	precio = prompt("Porfavor indique el precio: "); 
	descuento = prompt("Ahora indique el descuento: ");

	precio = parseFloat(precio);
	descuento = parseFloat(descuento);

	porcentaje = descuento / 100
	resultadoFinal= porcentaje * precio 
    
    document.getElementById('elPrecioFinal').value = precio;
	document.getElementById('elPrecioFinal').value = descuento;  
}
