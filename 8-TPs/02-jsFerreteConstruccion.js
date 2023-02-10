/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largoTerreno; 
	let anchoTerreno;
	let perimetro;
	let cantidadDeAlambre; 

	largoTerreno = document.getElementById('txtIdLargo').value;
	anchoTerreno = document.getElementById('txtIdAncho').value; 

	largoTerreno= parseFloat(largoTerreno);
	anchoTerreno= parseFloat(anchoTerreno);

	perimetro = (largoTerreno + anchoTerreno) * 2; 
	cantidadDeAlambre = perimetro * 3; 

	alert("La cantidad de alambre necesario es de: " + cantidadDeAlambre)
}
function Circulo () 
{
	/* 
	circunferencia de un circulo -> 2 * numero de pitagoras (3.1416) * radio
	superficie -> numero  de pitagoras (3.1416) * radio ^ 2 
	*/ 
	let radio; 
	let circunferencia; 
	let metrosDeAlambre; 
    let numeroPI; 

    numeroPI = 3.14;
    
    radio = document.getElementById('txtIdRadio').value;
    radio = parseFloat(radio); 

    circunferencia = 2 * numeroPI * radio;
    metrosDeAlambre = circunferencia * 3; 

    alert("La cantidad de alambre necesario es de: " + metrosDeAlambre);  	
}
function Materiales () 
{
	let largoTerreno; 
	let anchoTerreno;
	let area;
	let bolsaCemento;
	let cal;
	let cantidadDeCemento;
	let cantidadDeCal;  

	bolsaCemento = 3; 
	cal = 2; 

	largoTerreno = document.getElementById('txtIdLargo').value;
	anchoTerreno = document.getElementById('txtIdAncho').value; 

	largoTerreno= parseFloat(largoTerreno);
	anchoTerreno= parseFloat(anchoTerreno);

	area = largoTerreno * anchoTerreno
	cantidadDeCemento = area * bolsaCemento;
	cantidadDeCal = area * cal; 

	alert("La Cantidad de Bolsas de Cemento necesarios son: " + cantidadDeCemento + " y la cantidad de Cal son: " + cantidadDeCal);       
}