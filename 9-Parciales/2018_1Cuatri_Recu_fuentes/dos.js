/*
Lucas Damian Carabajal SIlva
Parcial Recuperatorio 
2) Se nos pide armar una aplicación para las elecciones, 
para eso necesitamos ingresar 
el nombre de los 5 candidatos a presidente de la nación, 
la edad de cada uno (mayor a 35 años de edad) , el partido politico(aficial , oposicion,otro )
y la cantidad de votos (número positivo 0 incluido)  que sacó en las elecciones.
Necesitamos saber:


a-El nombre del ganador(no hay empates)
b-Que partido politico  se llevo mas votos
c-El porcentaje de los votos de los 3 partidos
*/
function mostrar()
{
    let nombreIngresado;
    let edadIngresado;
    let partidoPoliticoIngresado;
    let cantidadDeVotosIngresado;
    let contador=0;
    let contadorCandidato1=0;
    let contadorCandidato2=0;
    let contadorCandidato3=0;
    let contadorCandidato4=0;
    let contadorCandidato5=0;
    let nombreCandidato1;
    let nombreCandidato2;
    let nombreCandidato3;
    let nombreCandidato4;
    let nombreCandidato5;
    let ganador;
    let mensaje;
    let contadorAficial=0;
    let contadorOposicion=0;
    let contadorOtro=0;
    let mayorPartidoPolitico;
    let votosAficial=0;
    let votosOposicion=0;
    let votosOtro=0;
    let porcentajeAficial;
    let porcentajeOposicion;
    let porcentajeOtro;
    let votosTotal=0;

    while(contador<5)
    {
        nombreIngresado=prompt("Ingrese su nombre: ");
        while(!isNaN(nombreIngresado))
        {
            nombreIngresado=prompt("Ingrese su nombre: ");
        }
        edadIngresado=prompt("Ingrese su edad: ");
        edadIngresado=parseInt(edadIngresado);
        while(isNaN(edadIngresado) || edadIngresado<36)
        {
            edadIngresado=prompt("Ingrese su edad: ");
            edadIngresado=parseInt(edadIngresado);
        }
        partidoPoliticoIngresado=prompt("Ingrese su partido politico: aficial, oposicion, otro");
        partidoPoliticoIngresado=partidoPoliticoIngresado.toLowerCase();
        while(!isNaN(partidoPoliticoIngresado) || partidoPoliticoIngresado!="aficial" && partidoPoliticoIngresado!="oposicion" && partidoPoliticoIngresado!="otro")
        {
            partidoPoliticoIngresado=prompt("Ingrese su partido politico: aficial, oposicion, otro");
            partidoPoliticoIngresado=partidoPoliticoIngresado.toLowerCase();
        }
        cantidadDeVotosIngresado=prompt("Ingrese la cantidad de votos: ");
        cantidadDeVotosIngresado=parseInt(cantidadDeVotosIngresado);
        while(isNaN(cantidadDeVotosIngresado) || cantidadDeVotosIngresado<0)
        {
            cantidadDeVotosIngresado=prompt("Ingrese la cantidad de votos: ");
            cantidadDeVotosIngresado=parseInt(cantidadDeVotosIngresado);
        }
        
        switch(contador)
        {
            case 0:
                nombreCandidato1=nombreIngresado;
                contadorCandidato1=cantidadDeVotosIngresado;
            break; 
            case 1:
                nombreCandidato2=nombreIngresado;
                contadorCandidato2=cantidadDeVotosIngresado;
            break;
            case 2:
                nombreCandidato3=nombreIngresado;
                contadorCandidato3=cantidadDeVotosIngresado;
            break;
            case 3:
                nombreCandidato4=nombreIngresado;
                contadorCandidato4=cantidadDeVotosIngresado;
            break;
            case 4:
                nombreCandidato5=nombreIngresado;
                contadorCandidato5=cantidadDeVotosIngresado;
            break;
        }
        switch(partidoPoliticoIngresado)
        {
            case "aficial":
                votosAficial+=cantidadDeVotosIngresado;
                contadorAficial++;
            break;
            case "oposicion":
                votosOposicion+=cantidadDeVotosIngresado;
                contadorOposicion++;
            break;
            default:
                votosOtro+=cantidadDeVotosIngresado;
                contadorOtro++;
            break;
        }
        votosTotal+=cantidadDeVotosIngresado;
        contador++;
    }
    porcentajeAficial=votosAficial*100/votosTotal;
    porcentajeOposicion=votosOposicion*100/votosTotal;
    porcentajeOtro=votosOtro*100/votosTotal;
    porcentajeAficial=parseInt(porcentajeAficial);
    porcentajeOposicion=parseInt(porcentajeOposicion);
    porcentajeOtro=parseInt(porcentajeOtro);
    if(contadorAficial>contadorOposicion && contadorAficial>contadorOtro)
    {
        mayorPartidoPolitico="Aficial";
    }
    else
    {
        if(contadorOposicion>contadorOtro)
        {
            mayorPartidoPolitico="Oposicion";
        }
        else
        {
            mayorPartidoPolitico="Otro";
        }
    }
    if(contadorCandidato1>contadorCandidato2 && contadorCandidato1>contadorCandidato3 && contadorCandidato1>contadorCandidato4 && contadorCandidato1>contadorCandidato5)
    {
        ganador=nombreCandidato1;
    }
    else
    {
        if(contadorCandidato2>contadorCandidato3 && contadorCandidato2>contadorCandidato4 && contadorCandidato2>contadorCandidato5 )
        {
            ganador=nombreCandidato2;
        }
        else
        {
            if(contadorCandidato3>contadorCandidato4 && contadorCandidato3>contadorCandidato5)
            {
                ganador=nombreCandidato3;
            }
            else
            {
                if(contadorCandidato4>contadorCandidato5)
                {
                    ganador=nombreCandidato4;
                }
                else
                {
                    ganador=nombreCandidato5;
                }
            }
        }
    }
    mensaje="El ganador es: "+ganador;
    mensaje+="El mayor partido politico es el: "+mayorPartidoPolitico;
    mensaje+="El porcentaje de Aficial es: "+porcentajeAficial+"%";
    mensaje+="El porcentaje de Oposicion es: "+porcentajeOposicion+"%";
    mensaje+="El porcentaje de Otro es: "+porcentajeOtro+"%";
    alert(mensaje);
}