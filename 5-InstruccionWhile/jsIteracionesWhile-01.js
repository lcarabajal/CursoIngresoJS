/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let contador; 
	
	contador = 0; //1 
	//mientras sea verdadero hago (ejecuto el codigo entre llaves) y si no es verdadera se vuelve a repetir hasta que sea verdadera
	while(contador<10) //2
	{
		contador = contador + 1;
		alert(contador);
		console.log("El numero es "+contador);
	}
}//FIN DE LA FUNCIÓN
/*
1-inicializar variable 
2-verificar la logica 
3-cambiar la variable del control
*/