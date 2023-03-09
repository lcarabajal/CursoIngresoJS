/*
3)Copa piston!!!
Se deberá generar un programa para registrar las estadísticas de los 10 integrantes de una carrera de autos.
Se pedirá el ingreso de:
nombre
edad (mayor a 18)
nacionalidad del piloto (argentino, brasilero, estadounidense)
cantidad de carreras ganadas (no pueden ser números negativos)
número del vehículo (no puede ser un número negativo)
Necesitamos saber:
a-La nacionalidad que más pilotos tiene
b-Cantidad de pilotos mayores de 25 años con número de vehículo impar.
c-Promedio de edad de los pilotos que tiene un vehículo con número par.
*/
function mostrar()
{
    let nombreIngresado;
    let edadIngresado;
    let nacionalidadIngresado;
    let cantidadDeCarrerasIngresado;
    let numeroVehiculoIngresado;
    let contador=0;
    let contadorArgentino=0;
    let contadorBrasilero=0;
    let contadorEstadoUnidense=0;
    let contadorPilotosMayores=0;
    let mensaje;
    let contadorPilotosPar=0;
    let acumuladorEdad=0;
    let promedioEdad;

    while(contador<10)
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
        while(edadIngresado<18)
        {
            edadIngresado=prompt("Error,ingrese su Edad: ");
            edadIngresado=parseInt(edadIngresado);
        }
        nacionalidadIngresado=prompt("ingrese su nacionalidad: Argentino, Brasilero, EstadoUnidense");
        nacionalidadIngresado=nacionalidadIngresado.toLowerCase()
        while(isNaN(nacionalidadIngresado)==false)
        {
            nacionalidadIngresado=prompt("ingrese su nacionalidad: Argentino, Brasilero, EstadoUnidense");
            nacionalidadIngresado=nacionalidadIngresado.toLowerCase()
        }
        while(nacionalidadIngresado!="argentino" && nacionalidadIngresado!="brasilero" && nacionalidadIngresado!="estadounidense" && nacionalidadIngresado!="ninguno")
        {
            nacionalidadIngresado=prompt("ingrese su nacionalidad: Argentino, Brasilero, EstadoUnidense");
            nacionalidadIngresado=nacionalidadIngresado.toLowerCase()
        }
        cantidadDeCarrerasIngresado=prompt("ingrese la cantidad de carreras ganadas: ");
        cantidadDeCarrerasIngresado=parseInt(cantidadDeCarrerasIngresado);
        while(isNaN(cantidadDeCarrerasIngresado)==true)
        {
            cantidadDeCarrerasIngresado=prompt("Error,ingrese la cantidad de carreras ganadas: ");
            cantidadDeCarrerasIngresado=parseInt(cantidadDeCarrerasIngresado);
        }
        while(cantidadDeCarrerasIngresado<0)
        {
            cantidadDeCarrerasIngresado=prompt("Error,ingrese la cantidad de carreras ganadas: ");
            cantidadDeCarrerasIngresado=parseInt(cantidadDeCarrerasIngresado);
        }
        numeroVehiculoIngresado=prompt("ingrese su el numero de su Vehiculo: ");
        numeroVehiculoIngresado=parseInt(numeroVehiculoIngresado);
        while(isNaN(numeroVehiculoIngresado)==true)
        {
            numeroVehiculoIngresado=prompt("Error,ingrese su el numero de su Vehiculo: ");
            numeroVehiculoIngresado=parseInt(numeroVehiculoIngresado);
        }
        while(numeroVehiculoIngresado<0)
        {
            numeroVehiculoIngresado=prompt("Error,ingrese su el numero de su Vehiculo: ");
            numeroVehiculoIngresado=parseInt(numeroVehiculoIngresado);
        }

        switch(nacionalidadIngresado)
        {
            case "argentino":
                contadorArgentino++;
            break;
            case "brasilero":
                contadorBrasilero++;
            break;
            case "estadounidense":
                contadorEstadoUnidense++;
            break;
        }
        if(numeroVehiculoIngresado%2==1)
        {
            if(edadIngresado>25)
            {
                contadorPilotosMayores++;
            }
        }
        else
        {
            acumuladorEdad+=edadIngresado;
            contadorPilotosPar++;
        }
        /*
        if(edadIngresado>25)
        {
            if(numeroVehiculoIngresado%2==1) // Impar
            {
                contadorPilotosMayores++;
            }
        }
        else
        {
            if(numeroVehiculoIngresado%2==0) //par
            {

                contadorPilotosPar++;
            }           
        }
        */
        /*
        if(edadIngresado>25 && (numeroVehiculoIngresado%2==1))
        {
            contadorPilotosMayores++;
        }
        else
        {
            acumuladorEdad=acumuladorEdad+edadIngresado;
            contadorPilotosPar++;
        }
        */
        contador++;
    }
    if(contadorArgentino>contadorBrasilero && contadorArgentino>contadorEstadoUnidense)
    {
        mensaje="Hay mas Argentinos que Brasileros y EstadoUnidenses";
    }
    else
    {
        if(contadorBrasilero>contadorEstadoUnidense)
        {
            mensaje="Hay mas Brasileros que Argentinos y EstadoUnidenses";
        }
        else
        {
            mensaje="Hay mas EstadoUnidenses que Argentinos y Brasileros";
        }
    }
    //Mi error fue dividirlo por el total y no por la categoria Par == promedioEdad=acumuladorEdad/contador; (esto esta mal)
    promedioEdad=acumuladorEdad/contadorPilotosPar;// esto esta bien
    promedioEdad=parseInt(promedioEdad);
    mensaje+="\nEl numero de pilotos que son mayores a 25 y tienen un numero impar en el vehiculo es de: "+contadorPilotosMayores;
    mensaje+="\nEl promedio de edad entre los pilotos con vehiculos par son: "+promedioEdad;
    alert(mensaje);
}