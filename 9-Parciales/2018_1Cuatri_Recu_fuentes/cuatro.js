/*
1-Un bar nos contrato para administrar el consumo de los clientes en las distintas mesas del local. Para esto debemos desarrollar un algoritmo que nos permita el ingreso de los siguientes datos de varias mesas:
Nombre del cliente (no puede ser un número)
la edad,
Tipo de bebida (validar cerveza, limonada, gaseosa, ninguno)
Tipo de comida (papitas, hamburguesa, rabas, ninguno)
Importe total

	

Necesitamos saber:
a-El tipo de bebida más vendida
b-la edad del que pago el importe total mas alto
c-Cuanta gente mayor a 18 no pidio bebida
*/


function mostrar()
{
    let nombreIngresado;
    let edadIngresado;
    let tipoBebidaIngresado;
    let tipoComidaIngresado;
    let importeTotalIngresado;
    let respuesta=true;
    let contadorCerveza=0;
    let contadorLimonada=0;
    let contadorGaseosa=0;
    let mensaje;
    let banderaPrimerIngreso=true;
    let edadImporteMasAlto;
    let ImporteMasAlto;
    let contadorSinBebida=0;
    
    while(respuesta==true)
    {
        nombreIngresado=prompt("Ingrese su nombre: ");
        while(!isNaN(nombreIngresado))
        {
            nombreIngresado=prompt("Ingrese su nombre: ");
        }
        edadIngresado=prompt("Ingrese su edad: ");
        edadIngresado=parseInt(edadIngresado);
        while(isNaN(edadIngresado))
        {
            edadIngresado=prompt("Ingrese su edad: ");
            edadIngresado=parseInt(edadIngresado);
        }
        tipoBebidaIngresado=prompt("Ingrese su bebida: cerveza, limonada, gaseosa, ninguno");
        tipoBebidaIngresado=tipoBebidaIngresado.toLowerCase();
        while(!isNaN(tipoBebidaIngresado) || tipoBebidaIngresado!="cerveza" && tipoBebidaIngresado!="limonada" && tipoBebidaIngresado!="gaseosa" && tipoBebidaIngresado!="ninguno")
        {
            tipoBebidaIngresado=prompt("Ingrese su bebida: cerveza, limonada, gaseosa, ninguno");
            tipoBebidaIngresado=tipoBebidaIngresado.toLowerCase();
        }
        tipoComidaIngresado=prompt("Ingrese su comida: rabas, hamburgesa, papitas, ninguno");
        tipoComidaIngresado=tipoComidaIngresado.toLowerCase();
        while(!isNaN(tipoComidaIngresado) || tipoComidaIngresado!="rabas" && tipoComidaIngresado!="hamburgesa" && tipoComidaIngresado!="papitas" && tipoComidaIngresado!="ninguno")
        {
            tipoComidaIngresado=prompt("Ingrese su comida: rabas, hamburgesa, papitas, ninguno");
            tipoComidaIngresado=tipoComidaIngresado.toLowerCase();
        }
        importeTotalIngresado=prompt("Ingrese el importe: ");
        importeTotalIngresado=parseFloat(importeTotalIngresado);
        while(isNaN(importeTotalIngresado))
        {
            importeTotalIngresado=prompt("Ingrese el importe: ");
            importeTotalIngresado=parseFloat(importeTotalIngresado);
        }
        //b-la edad del que pago el importe total mas alto
        if(banderaPrimerIngreso==true)
        {
            ImporteMasAlto=importeTotalIngresado;
            edadImporteMasAlto=edadIngresado;
            banderaPrimerIngreso=false;
        }
        else
        {
            if(importeTotalIngresado>ImporteMasAlto)
            {
                ImporteMasAlto=importeTotalIngresado;
                edadImporteMasAlto=edadIngresado;
            }
        }

        switch(tipoBebidaIngresado)
        {
            case"cerveza":
            contadorCerveza++;
            break;
            case"gaseosa":
            contadorGaseosa++;
            break;
            case"limonada":
            contadorLimonada++;
            break;
            default:
                if(edadIngresado>18)
                {
                    contadorSinBebida++;
                }
            break;
        }
        respuesta=confirm("Desea continuar? ");
    }
    //a-El tipo de bebida más vendida
    if(contadorCerveza>contadorGaseosa && contadorCerveza>contadorLimonada)
    {
        mensaje="La bebida que mas se pidio fue la cerveza";
    }
    else
    {
        if(contadorGaseosa>contadorLimonada)
        {
            mensaje="La bebida que mas se pidio fue la Gaseosa"
        }
        else
        {
            mensaje="La Bebida que mas se pidio fue la limonada"
        }
    }
    mensaje+="\nLa edad del cliente que mas importe total tuve es: "+edadImporteMasAlto;
    mensaje+="\nEsta es la cantidad de gente mayor a 18 que no pidio bebida: "+contadorSinBebida;
    alert(mensaje);
}