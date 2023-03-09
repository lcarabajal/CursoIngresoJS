/*
BASE PARA APROBAR // VALIDACIONES // COMPARACIONES && LOGICA 
*/
function mostrar()
{
   let nombreIngresado;
   let edadIngresado;
   let tipoIngresado;
   let cantidadIngresado;
   let respuesta=true;
   let primerBandera=true;
   let minimo;
   let maximo;
   let numeroIngresado;
   let nombreMinimo;
   let nombreMaximo;

   while(respuesta==true)
   {
        nombreIngresado=prompt("Ingrese su nombre: ");
        while(!isNaN(nombreIngresado))
        {
            nombreIngresado=prompt("Ingrese su nombre: ");
        }
        edadIngresado=prompt("Ingrese su edad: ");
        edadIngresado=parseInt(edadIngresado);
        while(isNaN(edadIngresado) || edadIngresado<1)
        {
            edadIngresado=prompt("Ingrese su edad: ");
            edadIngresado=parseInt(edadIngresado);
        }
        tipoIngresado=prompt("Ingrese el tipo: a, b, c, d ");
        tipoIngresado=tipoIngresado.toLowerCase();
        while(!isNaN(tipoIngresado) || tipoIngresado!="a" && tipoIngresado!="b" && tipoIngresado!="c"  && tipoIngresado!="d")
        {
            tipoIngresado=prompt("Ingrese su nombre: ");
            tipoIngresado=tipoIngresado.toLowerCase();
        }
        cantidadIngresado=prompt("Ingrese la cantidad: ");
        cantidadIngresado=parseInt(cantidadIngresado);
        while(isNaN(cantidadIngresado) || cantidadIngresado<1)
        {
            cantidadIngresado=prompt("Ingrese la cantidad: ");
            cantidadIngresado=parseInt(cantidadIngresado);
        }
       
        if(primerBandera==true)
        {
            minimo=numeroIngresado;
            maximo=numeroIngresado;
            nombreMinimo=nombreIngresado;
            nombreMaximo=nombreIngresado;
            primerBandera=false;
        }
        else
        {
            if(numeroIngresado<minimo)
            {
                minimo=numeroIngresado;
                nombreMinimo=nombreIngresado;
            }
            else
            {
                if(numeroIngresado>maximo)
                {
                    maximo=numeroIngresado;
                    nombreMinimo=nombreIngresado;
                }
            }
        }
        respuesta=confirm("Desea continuar?");
   }
}
/*

    !isNaN = es para letras 
    isNaN = es para numeros

    CUANDO SE TRATA DE DINERO-MEDIDAS-ALTURAS Y TODO LO QUE NO SEAN NUMEROS ENTEROS, VALIDARLOS CON "parseFloat"

    SI VAS MUY RAPIDO Y TERMINAS ANTES, NO TE HAGAS EL CANCHERO, RE LEE LAS CONSIGNAS Y TODO TU CODIGO DESDE CERO 

    ACORDATE DE PRIMERO CREAR LA VARIABLE Y DESPUES RASONARLA NO SEAS BOLUDO, VAS A PERDER MUCHO TIEMPO Y RAZON EN TU CODIGO. 

    ACORDATE TAMBIEN LA RESPUESTA/CONTADOR AL FINAL DEL WHILE. (TAMBIEN EL ALERT AL FINAL DEL MENSAJE)

    ***********
    sacar porcentaje: lee muy bien lo que te pide que saques el porcentaje/ 
    sacar el porcentaje es sacar el por ciento de algo, por eso se multiplica por 100 y se divide por la cantidad en general ""de lo que te piden"". 
    Ej: sacar el porcentaje de el porcentaje de los votos ""de los 5 candidatos""

    acumuladorVotos1+=votosIngresado;

    porcentaje=acumuladorVotos1*100/contador || 5 (solo en este caso porque nos dan la cantidad de los candidatos)
    porcentaje=parseInt(porcentaje);    //esto parsealo por las dudas... 

    ***********
    sacar el promedio: otra vez, lee atentamente de que promedio te piden
    sacar el promedio de una cosa entre algo, es agarrar esa cosa y divirlo por algo, nada mas.  
    Ej: El promedio de edad entre todos los compradores.

    acumuladorEdad+=edadIngresado;
    contador++;

    promedioEdad=acumuladorEdad/contador;

    *el acumulador y contador se tiene que inicializar en cero. 

    *el contador no hace falta validarlo porque siempre va a pasar uno minimo

    *EL UNICO CASO EN EL QUE SE VALIDA SI EL CONTADOR ES CERO ES CUANDO ES CONTADOR DE ALGO EN ESPECIFO

    *EJEMPLO:sacar el promedio de dinero gastado por los compradores menores a 25 años. (Aca solo van a contar los que son menores a 25, Y PUEDE SER QUE NO HAYA GENTE MENORES A 25)
    if(contador==0)
    {
        promedioEdad=0 //NUNCA SE DIVIDE UN NUMERO POR 0, COMPU NO GUTA >:c 
    }
    else
    {
        promedioEdad=acumuladorEdad/contador            
    }
    mensaje="El promedio de dinero blalbalba "+ promedioEdad; 


    LAS BANDERAS SE USAN PARA SACAR MINIMOS Y MAXIMOS 
    primerBandera=true;
    if(primerBandera==true)
    {
        minimo=numeroIngresado;
        maximo=numeroIngresado;
        nombreMinimo=nombreIngresado;
        nombreMaximo=nombreIngresado;
        primerBandera=false;
    }
    else
    {
        if(minimo>numeroIngresado)//numeroIngresado<minimo (es lo mismo)
        {
            minimo=numeroIngresado;
            nombreMinimo=nombreIngresado;
        }
        else
        {
            if(maximo<numeroIngresado)// numeroIngresado>maximo (es lo mismo)
            {
                maximo=numeroIngresado;
                nombreMinimo=nombreIngresado;
            }
        }
    }

    SI TE PREGUNTAN SI EL NUMERO ES PAR O IMPAR ENTONCES 

    if(numeroIngresado%2==0)
    {
        ES PAR 
    }
    else
    {
        ES IMPAR 
    }

    TODOS LOS CALCULOS TIPO CONTADOR-ACUMULADOR SE HACE AFUERA DEL WHILE, NO MATES AL PROCESADOR.  
    MANTENE LA CALMA Y LEE BIEN LUCAS VOS PODES 
*/