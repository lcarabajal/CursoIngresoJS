/*
Lucas Carabajal Damian Silva
Parcial Recuperatorio -03-
3)Copa piston!!!
Se deberá generar un programa para registrar las estadísticas de los 10 integrantes de una carrera de autos.
Se pedirá el ingreso de:
nombre
edad (mayor a 18)
nacionalidad del piloto (argentino, brasilero, estadounidense)
cantidad de carreras ganadas (no pueden ser números negativos)
número del vehículo (no puede ser un número negativo)
Necesitamos saber:

a-El nombre del pais que mas carreras ganadas tiene
b-La cantidad de vehiculos de pilotos mayores a 30 años y de nacionalidad argentinos
c-Promedio de edad de los pilotos que tiene un vehículo con número par y son menores a 30 años.
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
    let contadorPilotosMayoresArgentinos=0;
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
            case"argentino":
                //b-La cantidad de vehiculos de pilotos mayores a 30 años y de nacionalidad argentinos
                contadorArgentino+=cantidadDeCarrerasIngresado;
                if(edadIngresado>30)
                {
                    contadorPilotosMayoresArgentinos++;
                }
            break;
            case"brasilero":
                contadorBrasilero+=cantidadDeCarrerasIngresado;
            break;
            case"estadounidense":
                contadorEstadoUnidense+=cantidadDeCarrerasIngresado;
            break;
        }
        //c-Promedio de edad de los pilotos que tiene un vehículo con número par y son menores a 30 años.
        if(numeroVehiculoIngresado%2==0)
        {
            if(edadIngresado<30)
            {
                acumuladorEdad+=edadIngresado;
                contadorPilotosPar++;
            }
        }
        contador++;
    }
    promedioEdad=acumuladorEdad/contadorPilotosPar;
    promedioEdad=parseInt(promedioEdad);
    //a-El nombre del pais que mas carreras ganadas tiene   
    if(contadorArgentino>contadorBrasilero && contadorArgentino>contadorEstadoUnidense)
    {
        mensaje="El pais con mas carreras ganadas es Argentina";
    }
    else
    {                       
        if(contadorBrasilero>contadorEstadoUnidense)
        {
            mensaje="El pais con mas carreras ganadas es Brasilero";
        }
        else
        {
            mensaje="El pais con mas carreras ganadas es EstadoUnidense";
        }
    }
    mensaje+="La cantidad de personas mayores de 30 y de nacionalidad Argentina son: "+contadorPilotosMayoresArgentinos;
    mensaje+="El promedio de pilotos menores a 30 y con numero par es:"+promedioEdad;
    alert(mensaje);
}