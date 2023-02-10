/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let productoUno;
	let productoDos; 
	let productoTres;
	let primerProducto;
	let segundoProducto;
	let tercerProducto;
	let resultado;

	productoUno = document.getElementById("txtIdPrecioUno").value; 
	productoDos = document.getElementById("txtIdPrecioDos").value; 
	productoTres = document.getElementById("txtIdPrecioTres").value; 

	primerProducto= parseFloat(productoUno);
    segundoProducto= parseFloat(productoDos);
    tercerProducto= parseFloat(productoTres);  

	resultado = primerProducto + segundoProducto + tercerProducto; 

	alert("La suma es : " + resultado );

	/*
	interger 
	floating point o floats 
	char solo letras 
	string o cadenas de caracteres que son palabras
	*/  


}
function Promedio () 
{
	let productoUno;
	let productoDos; 
	let productoTres;
	let primerProducto;
	let segundoProducto;
	let tercerProducto;
	let resultado;

	productoUno = document.getElementById("txtIdPrecioUno").value; 
	productoDos = document.getElementById("txtIdPrecioDos").value; 
	productoTres = document.getElementById("txtIdPrecioTres").value; 

	primerProducto= parseFloat(productoUno);
    segundoProducto= parseFloat(productoDos);
    tercerProducto= parseFloat(productoTres); 

	resultado = (primerProducto + segundoProducto + tercerProducto) / 3
	//  para sacar el promedio: la suma de todos los elementos dividido la cantidad de elementos 

	alert("El promedio es : " + resultado);  
}
function PrecioFinal () 
{

	let productoUno;
	let productoDos; 
	let productoTres;
	let primerProducto;
	let segundoProducto;
	let tercerProducto;
	let resultado;
	let impuestoIva;
	let precioBruto;  

	impuestoIva = 21; 

	productoUno = document.getElementById("txtIdPrecioUno").value; 
	productoDos = document.getElementById("txtIdPrecioDos").value; 
	productoTres = document.getElementById("txtIdPrecioTres").value; 

	primerProducto= parseFloat(productoUno);
    segundoProducto= parseFloat(productoDos);
    tercerProducto= parseFloat(productoTres);  

	precioBruto = (primerProducto + segundoProducto + tercerProducto); // * 1.21 = ya se aplica el iva   
	resultado= precioBruto + (precioBruto * impuestoIva / 100);
	
	//cantidadDeImpuesto = precioBruto * impuestoIva / 100; = esto sirve para saber cuanto impuesto Se aplica
	//resultado = precioBruto + cantidadDeImpuesto;      

	alert("El Precio Final mas IVA es : " + resultado );
}