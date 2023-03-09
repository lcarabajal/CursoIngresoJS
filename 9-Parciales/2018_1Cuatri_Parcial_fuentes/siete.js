/*Copa piston!!!
Se deberá generar un programa para registrar las estadísticas de los 10 integrantes de
una carrera de autos.
Se pedirá el ingreso de:
nombre
edad (mayor a 18)
nacionalidad del piloto (argentino, ingles, frances, brasilero, estadounidense)
cantidad de carreras ganadas (no pueden ser números negativos)
número del vehículo (no puede ser un número negativo)
se necesita saber :
*Nacionalidad del piloto más joven.
*Cantidad de vehículos con número par.
*Nombre del piloto con menos victorias y el número de auto impar.
*Cantidad de pilotos mayores de 25 años con número de vehículo impar.
*Nombre del piloto más joven con más victorias.
*Nacionalidad del piloto más veterano con menos victorias.
*Promedio de edad de los pilotos que tiene un vehículo con número par.
*/
function mostrar()
{
    let nombreIngresado;
    let edadIngresado;
    let nacionalidadIngresado;
    let cantidadCarrerasGanadasIngresada;
    let numeroVehiculoIngresado;
    let respuesta=true;
    let bandera=true;
    let nacionalidadMasJoven;
    let pilotoMasjoven;
    let contadorPar=0;
    let menosVictoria;
    let numeroImpar;
    let nombreMenosVictoria;
    let contadorPilotosMayores=0;
    let nombreMasVictorias;
    let masVictorias;
    let nacionalidadMenosJoven;
    let pilotoMenosjoven;
    let acumuladorEdad=0;
     
    while(respuesta==true)
    {
        nombreIngresado=prompt("Ingrese su nombre: ");
        while(!isNaN(nombreIngresado))
        {
            nombreIngresado=prompt("Ingrese su nombre: ");
        }
        edadIngresado=prompt("Ingrese su edad: ");
        edadIngresado=parseInt(edadIngresado);
        while(isNaN(edadIngresado) || edadIngresado<0 && edadIngresado>100)
        {
            edadIngresado=prompt("Ingrese su edad: ");
            edadIngresado=parseInt(edadIngresado);
        }
        nacionalidadIngresado=prompt("Ingrese su nacionalidad: argentino, ingles, frances, brasilero, estadounidense ");
        nacionalidadIngresado=nacionalidadIngresado.toLowerCase()
        while(!isNaN(nacionalidadIngresado) || nacionalidadIngresado!="argentino" && nacionalidadIngresado!="ingles" && nacionalidadIngresado!="frances" && nacionalidadIngresado!="brasilero" && nacionalidadIngresado!="estadounidense" )
        {
            nacionalidadIngresado=prompt("Ingrese su nacionalidad: argentino, ingles, frances, brasilero, estadounidense ");
            nacionalidadIngresado=nacionalidadIngresado.toLowerCase()
        }
        cantidadCarrerasGanadasIngresada=prompt("Ingrese la cantidad de carreras ganadas: ");
        cantidadCarrerasGanadasIngresada=parseInt(cantidadCarrerasGanadasIngresada);
        while(isNaN(cantidadCarrerasGanadasIngresada) || cantidadCarrerasGanadasIngresada<0)
        {
            cantidadCarrerasGanadasIngresada=prompt("Ingrese la cantidad de carreras ganadas: ");
            cantidadCarrerasGanadasIngresada=parseInt(cantidadCarrerasGanadasIngresada);
        }
        numeroVehiculoIngresado=prompt("Ingrese el numero del vehiculo: ");
        numeroVehiculoIngresado=parseInt(numeroVehiculoIngresado);
        while(isNaN(numeroVehiculoIngresado) || numeroVehiculoIngresado<0)
        {
            numeroVehiculoIngresado=prompt("Ingrese el numero del vehiculo: ");
            numeroVehiculoIngresado=parseInt(numeroVehiculoIngresado);
        }
        if(bandera==true)
        {
            nacionalidadMasJoven=nacionalidadIngresado;
            nacionalidadMenosJoven=nacionalidadIngresado;
            pilotoMasjoven=edadIngresado;
            pilotoMenosjoven=edadIngresado;
            masVictorias=cantidadCarrerasGanadasIngresada;
            menosVictoria=cantidadCarrerasGanadasIngresada;
            bandera=false;
        }
        else
        {
            if(edadIngresado<pilotoMasjoven)
            {
                //*Nacionalidad del piloto más joven.
                pilotoMasjoven=edadIngresado;
                nacionalidadMasJoven=nacionalidadIngresado;
                //*Nombre del piloto más joven con más victorias.
                if(masVictorias<cantidadCarrerasGanadasIngresada)
                {
                    nombreMasVictorias=nombreIngresado;
                    masVictorias=cantidadCarrerasGanadasIngresada;
                }
            }
            else
            {
                //*Nacionalidad del piloto más veterano con menos victorias.             
                if(edadIngresado>=pilotoMenosjoven && cantidadCarrerasGanadasIngresada<menosVictoria)
                {
                    menosVictoria=cantidadCarrerasGanadasIngresada;
                    nacionalidadMenosJoven=nacionalidadIngresado;
                }
            }
        }
        
        if(numeroVehiculoIngresado%2==0)
        {
           //*Cantidad de vehículos con número par.
           //Promedio de edad de los pilotos que tiene un vehículo con número par.
            contadorPar++;
            acumuladorEdad+=edadIngresado;
        }
        else
        {
            //*Cantidad de pilotos mayores de 25 años con número de vehículo impar.
            if(edadIngresado>25)
            {
                contadorPilotosMayores++;
            }
            //*Nombre del piloto con menos victorias y el número de auto impar.
            if(cantidadCarrerasGanadasIngresada<menosVictoria)
            {
                nombreMenosVictoria=nombreIngresado;
                numeroImpar=numeroVehiculoIngresado;
            }
        }    
        respuesta=confirm("Desea continuar?");
    }
    /*
    *Nacionalidad del piloto más joven.
    *Cantidad de vehículos con número par.
    *Nombre del piloto con menos victorias y el número de auto impar.
    *Cantidad de pilotos mayores de 25 años con número de vehículo impar.
    *Nombre del piloto más joven con más victorias.
    *Nacionalidad del piloto más veterano con menos victorias.
    *Promedio de edad de los pilotos que tiene un vehículo con número par.
    */
   //*Promedio de edad de los pilotos que tiene un vehículo con número par.
    promedioEdad=acumuladorEdad/contadorPar;
    if(numeroImpar==0)
    {
        mensaje+="NO hay vehiculos impar";
    }
    else
    {
        mensaje+="El nombre del piloto con menos victorias es: "+nombreMenosVictoria+ " y su numero impar de auto es: "+numeroImpar;
    }
    if(contadorPilotosMayores==0)
    {
        mensaje+="No hay pilotos mayores de 25 con numero impar";
    }
    else
    {
        mensaje+="La cantidad de pilotos mayores de 25 con numero impar es de: "+contadorPilotosMayores;
    }
    mensaje="\nLa nacionalidad del piloto más joven es: "+nacionalidadMasJoven;
    mensaje+="\nLa cantidad de vehiculos con un numero par es de: "+contadorPar;
    mensaje+="\nEl nombre del piloto mas joven con mas victorias es: "+ nombreMasVictorias;
    mensaje+="\nLa nacionalidad del piloto mas veterano con menos victorias es: "+nacionalidadMenosJoven;
    mensaje+="\nEl promedio de edad de los pilotos que tienen un vehiculo con numero par es: "+promedioEdad;
}