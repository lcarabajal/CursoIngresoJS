/*
1)Un bar nos contrato para administrar el consumo de los clientes en las distintas mesas del local. Para esto debemos desarrollar un algoritmo que nos permita el ingreso de los siguientes datos de varias mesas:
Nombre del cliente (no puede ser un número)
Tipo de bebida (validar cerveza, limonada, gaseosa, ninguno)
Tipo de comida (papitas, hamburguesa, rabas, ninguno)
Importe total
	

Necesitamos saber:
a-El tipo de comida más vendido //SI DICE SACAR MAS ES COMPARAR CON "<" Y ">", SI DICE SACAR MAXIMO O MINIMO SE USA BANDERA.  
b-el promedio de precio sobre el total
c-Cuánta gente ordenó comida pero no bebida.
*/
function mostrar()
{
   let nombreIngresado;
   let tipoBebida;
   let tipoComida;
   let importeTotal; 
   let respuesta=true
   let contadorPapas=0;
   let contadorHambur=0;
   let contadorRabas=0;
   let contador=0;
   let promedioPrecio=0;
   let mensaje;
   let acumuladorTotal=0;
   let contadorSinBebida=0;

   while(respuesta==true)
   {
        nombreIngresado=prompt("ingrese su nombre:");
        while(isNaN(nombreIngresado)==false)
        {
            nombreIngresado=prompt("ingrese su nombre:");
        }
        tipoBebida=prompt("ingrese su bebida: cerveza, limonada o gaseosa o ninguno");
        tipoBebida=tipoBebida.toLowerCase()
        while(isNaN(tipoBebida)==false || tipoBebida!="limonada" && tipoBebida!="gaseosa" && tipoBebida!="cerveza" && tipoBebida!="ninguno")
        {
            tipoBebida=prompt("ingrese su bebida: cerveza, limonada o gaseosa o ninguno");
            tipoBebida=tipoBebida.toLowerCase()
        }
        tipoComida=prompt("ingrese su comida: Hamburgesa, papas, rabas, ninguno")
        tipoComida=tipoComida.toLowerCase()
        while(!isNaN(tipoComida) || tipoComida!="hamburgesa" && tipoComida!="papas" && tipoComida!="rabas" && tipoComida!="ninguno")
        {
            tipoComida=prompt("ingrese su comida: Hamburgesa, papas, rabas, ninguno");
        }
        importeTotal=prompt("ingrese su importe: ");
        importeTotal=parseInt(importeTotal);
        while(isNaN(importeTotal))
        {
            importeTotal=prompt("ingrese su importe: ")
            importeTotal=parseInt(importeTotal);
        }
        contador++;

        switch(tipoComida)
        {
            case "hamburgesa":
                contadorHambur++;
                break;
            case "papas":
                contadorPapas++;
                break;
            case "rabas":
                contadorRabas++;
                break;
            default:
                break;
        }
        acumuladorTotal+=importeTotal;
        if(tipoComida!="ninguno" && tipoBebida=="ninguno")
        {
            contadorSinBebida++;
        }
        respuesta=confirm("desea continuar?");
   }
    if(contadorHambur>contadorRabas && contadorHambur>contadorPapas)
    {
        mensaje="Las Hamburguesas son las que mas se pidieron";
    }
    else
    {
        if(contadorPapas>contadorRabas)
        {
            mensaje="Las Papas son las que mas se pidieron";
        }
        else
        {
            mensaje="Las Rabas son las que mas se pidieron";
        }
    }
   promedioPrecio=acumuladorTotal/contador;
   mensaje+="\nEl promedio del total es de: "+promedioPrecio;
   mensaje+="\nla cantidad de gente que compro comida pero no bebida es: "+contadorSinBebida;
   alert(mensaje);
}