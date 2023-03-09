/*
2) Se nos pide armar una aplicación para las elecciones, 
para eso necesitamos ingresar 
el nombre de los 5 candidatos a presidente de la nación, 
la edad de cada uno (mayor a 35 años de edad) 
y la cantidad de votos (número positivo 0 incluido)  que sacó en las elecciones.
Necesitamos saber:

a-el promedio de edades de los candidatos
b-total de votos emitidos.
c-el porcentaje de los votos de los 5 candidatos
*/
function mostrar()
{
    let nombreIngresado;
    let edadIngresado;
    let cantidadDeVotosIngresado;
    let contador=0;
    let acumuladorDeEdad=0;
    let promedioEdad;
    let totalVotosEmitidos=0;
    let mensaje;
    let porcentajeVotos;
    let acumuladorVotos1;
    let acumuladorVotos2;
    let acumuladorVotos3;
    let acumuladorVotos4;
    let acumuladorVotos5;
    let porcentajeVotos2;
    let porcentajeVotos3;
    let porcentajeVotos4;
    let porcentajeVotos5;

    while(contador<5)
    {
        nombreIngresado=prompt("Ingrese su nombre: ");
        nombreIngresado=nombreIngresado.toLowerCase()
        while(isNaN(nombreIngresado)==false)
        {
            nombreIngresado=prompt("Ingrese su nombre: ");
            nombreIngresado=nombreIngresado.toLowerCase() 
        }
        edadIngresado=prompt("ingrese su Edad: ");
        edadIngresado=parseInt(edadIngresado);
        while(isNaN(edadIngresado)==true)
        {
            edadIngresado=prompt("Error,ingrese su Edad: ");
            edadIngresado=parseInt(edadIngresado);
        }
        while(edadIngresado<35)
        {
            edadIngresado=prompt("Error,ingrese su Edad: ");
            edadIngresado=parseInt(edadIngresado);
        }
        cantidadDeVotosIngresado=prompt("Ingrese la cantidad de votos: ");
        cantidadDeVotosIngresado=parseInt(cantidadDeVotosIngresado);
        while(isNaN(cantidadDeVotosIngresado)==true)
        {
            cantidadDeVotosIngresado=prompt("Ingrese la cantidad de votos: ");
            cantidadDeVotosIngresado=parseInt(cantidadDeVotosIngresado);
        }
        while(cantidadDeVotosIngresado<-1)
        {
            cantidadDeVotosIngresado=prompt("Ingrese el importe:");
            cantidadDeVotosIngresado=parseInt(cantidadDeVotosIngresado);
        }
        switch(contador)
        {
            case 0:
                acumuladorVotos1=cantidadDeVotosIngresado;
            break;
            case 1:
                acumuladorVotos2=cantidadDeVotosIngresado;
            break;
            case 2:
                acumuladorVotos3=cantidadDeVotosIngresado;
            break;
            case 3:
                acumuladorVotos4=cantidadDeVotosIngresado;
            break;
            default:
                acumuladorVotos5= cantidadDeVotosIngresado;
            break;
        }
        acumuladorDeEdad=acumuladorDeEdad+edadIngresado;
        totalVotosEmitidos=totalVotosEmitidos+cantidadDeVotosIngresado;     
        contador++;   
    }
    promedioEdad=acumuladorDeEdad/5;
    promedioEdad=parseInt(promedioEdad);
    porcentajeVotos= (acumuladorVotos1*100)/5;
    porcentajeVotos2= (acumuladorVotos2*100)/5;
    porcentajeVotos3= (acumuladorVotos3*100)/5;
    porcentajeVotos4= (acumuladorVotos4*100)/5;
    porcentajeVotos5= (acumuladorVotos5*100)/5;
    mensaje="El promedio de edad entre los 5 candidatos es de: "+promedioEdad;
    mensaje+="\nEl total de votos emitidos fueron: "+totalVotosEmitidos;
    mensaje+="\nEl porcentaje de los votos por el primer candidato es de: "+porcentajeVotos;
    mensaje+="\nEl porcentaje de los votos por el segundo candidato es de: "+porcentajeVotos2;
    mensaje+="\nEl porcentaje de los votos por el tercero candidato es de: "+porcentajeVotos3;
    mensaje+="\nEl porcentaje de los votos por el cuarto candidato es de: "+porcentajeVotos4;
    mensaje+="\nEl porcentaje de los votos por el quinto candidato es de: "+porcentajeVotos5;
    alert(mensaje);
}
/*

Agüero
DNI 46580578
Curso de Ingreso
DIV A


1-Un bar nos contrato para administrar el consumo de los clientes en las distintas mesas del local.
 Para esto debemos desarrollar un algoritmo que nos permita el ingreso de los siguientes datos de varias mesas:
Nombre del cliente (no puede ser un número)
Tipo de bebida (validar cerveza, limonada, gaseosa, ninguno)
Tipo de comida (papitas, hamburguesa, rabas, ninguno)
Importe total
	

Necesitamos saber:
a-El tipo de comida más vendido 
b-el promedio de precio sobre el total
c-Cuánta gente ordenó comida pero no bebida.


/*
{
	let respuesta;
    let nombre;
    let tipoBebida;
    let tipoComida;
    let importeTotal;
    let contadorPapas;
    let contadorHambur;
    let contadorRabas;
    let mascantidad;
    let promedio;
    let precio;
    let contadorComida;
    let acumuladorPrecioTotal;
    let contadorTotal;
    let mensaje;

    respuesta = "si";
    contadorHambur = 0;
    contadorPapas = 0;
    contadorRabas = 0;
    contadorComida = 0;
    acumuladorPrecioTotal = 0;
    contadorTotal = 0;

    while(respuesta == "si")
    {
        nombre = prompt("ingrese nombre");
		while(isNaN(nombre)==false)
		{
			nombre = prompt("ingrese nombre");
		}

        tipoBebida = prompt("ingrese tipoBebida");
		tipoBebida.toLowerCase(tipoBebida);
		while(isNaN(tipoBebida)==false || (tipoBebida != "cerveza" && tipoBebida != "limonada" && tipoBebida != "gaseosa" && tipoBebida != "ninguno"))
		{
			tipoBebida = prompt("ingrese tipoBebida");
			tipoBebida.toLowerCase(tipoBebida);
		}

        tipoComida = prompt("ingrese tipoComida");
		tipoComida.toLowerCase(tipoComida);
		while(isNaN(tipoComida)==false || (tipoComida != "papitas" && tipoComida != "hamburguesa" && tipoComida != "rabas" && tipoComida != "ninguno"))
		{
			tipoComida = prompt("ingrese tipoComida");
			tipoComida.toLowerCase(tipoComida);
		}

        importeTotal = prompt("ingrese importeTotal");
		importeTotal = parseFloat(importeTotal);
		while(isNaN(importeTotal)==true || (importeTotal <20))
		{
			importeTotal = prompt("ingrese importeTotal");
			importeTotal = parseInt(importeTotal);
		}
        contadorTotal++;
        acumuladorPrecioTotal+= importeTotal;

        switch(tipoComida)
        {
            case "papitas":
                contadorPapas++;
                break;
            case "hamburguesa":
                contadorHambur++;
                break;
            case "rabas":
                contadorRabas++;
                break;
        }

        if((tipoComida == "hamburguesa" || tipoComida == "papitas" || tipoComida == "rabas" ) && (tipoBebida == "ninguno"))
        {
            contadorComida++;
        }
       
       
       
       
        respuesta = prompt("desea continuar? (si o no");
		respuesta.toLowerCase(respuesta);
    }//fin de while

    if(contadorPapas > contadorHambur && contadorPapas > contadorRabas)
		{
			mascantidad = "papitas";
		}
		else
		{
			if(contadorHambur > contadorRabas)
			{
				mascantidad = "hamburguesa";
			}
			else
			{
				mascantidad = "rabas";
			}
		}

        promedio = acumuladorPrecioTotal / contadorTotal;

       

    mensaje=("el tipo de comida mas vendido es"+mascantidad);
    mensaje+=("\nel promedio de precio sobre el total es"+promedio);
    mensaje+=("\n la cantidad de gente que compro comida y no bebida es "+contadorComida);
    alert(mensaje);
}
*/
