/*
2. Una librería que se especializa en venta de libros importados desea calcular ciertas métricas en base a las ventas de sus productos (No se sabe cuántos).
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:                          	
El más barato de los libros de drama con su importe.
Qué porcentaje de cada género se vendió.
Informar el título del primer libro de drama que se vendió.
*/

function mostrar()
{
    let tituloIngresado;
    let generoIngresado;
    let materialIngresado;
    let importeIngresado;
    let respuesta;
    let banderaPrimero=true;
    let nombreprimerDrama;
    let masBaratoDramaNombre;
    let masBaratoDramaImporte;
    let contadorDrama=0;
    let contadorCienciaFiccion=0;
    let contadorTerror=0;
    let porcentajeDrama;
    let porcentajeCienciaficcion;
    let porcentajeTerror;

    while(respuesta==true)
    {
        tituloIngresado=prompt("Ingrese nombre del libro: ");
        while(isNaN(tituloIngresado)==false)
        {
            tituloIngresado=prompt("Ingrese nombre del libro: ")
        }
        
        generoIngresado=prompt("Ingrese el genero: drama, ciencia ficcion, terror ").toLowerCase();
        while(isNaN(generoIngresado)==false)
        {
            generoIngresado=prompt("Ingrese el genero: drama, ciencia ficcion, terror ").toLowerCase()
        }
        while(generoIngresado!="drama" && generoIngresado!="ciencia ficcion" && generoIngresado!="terror")
        {
            generoIngresado=prompt("Ingrese el genero: drama, ciencia ficcion, terror ").toLowerCase()
        }
        materialIngresado=prompt("ingrese el material: rustica o tapa dura").toLowerCase();
        while(isNaN(materialIngresado)==false)
        {
            materialIngresado=prompt("ingrese el material: rustica o tapa dura").toLowerCase()
        }
        while(materialIngresado!="rustica" && materialIngresado!="tapa dura")
        {
            materialIngresado=prompt("ingrese el material: rustica o tapa dura").toLowerCase()
        }
        importeIngresado=prompt("ingrese el costo del libro: ");
        importeIngresado=parseInt(importeIngresado);
        while(isNaN(importeIngresado)==true)
        {
            importeIngresado=prompt("ingrese el costo del libro: ");
            importeIngresado=parseInt(importeIngresado);
        }
        while(importeIngresado<0 || importeIngresado> 30000)
        {
            importeIngresado=prompt("ingrese el costo del libro: ");
            importeIngresado=parseInt(importeIngresado);
        }

        switch(generoIngresado)
        {
            case "drama":
                if(banderaPrimero==true)
                {
                    masBaratoDramaImporte=importeIngresado;
                    masBaratoDramaNombre=tituloIngresado;
                    nombreprimerDrama=tituloIngresado;
                }
                else
                {
                    if(masBaratoDramaImporte>importeIngresado)
                    {
                        masBaratoDramaImporte=importeIngresado;
                        masBaratoDramaNombre=tituloIngresado;
                    }

                }
                contadorDrama++;
                break;
            case "ciencia ficcion":
                contadorCienciaFiccion++;
                break;
            default:
                contadorTerror++;
                break;
        }
        contadorTotal= contadorCienciaFiccion+contadorDrama+contadorTerror;
        porcentajeDrama= contadorDrama*100 /contadorTotal;
        porcentajeTerror= contadorTerror*100 / contadorTotal;
        porcentajeCienciaficcion= contadorCienciaFiccion*100/ contadorTotal;
        porcentajeDrama= parseInt(porcentajeDrama);
        porcentajeCienciaficcion= parseInt(porcentajeCienciaficcion);
        porcentajeTerror= parseInt(porcentajeTerror);

        mensaje="El libro mas barato de Drama es: "+masBaratoDramaNombre+ " y su precio es: " +masBaratoDramaImporte;
        mensaje+="\nEl porcentaje de libros de drama es: "+ porcentajeDrama + "%";
        mensaje+="\nEl porcentaje de libros de Ciencia Ficcion es: "+ porcentajeCienciaficcion + "%";
        mensaje+="\nEl porcentaje de libros de Terror es: "+ porcentajeTerror + "%";
        if(banderaPrimero==true)
        {
            mensaje="\nNO pusieron libro de Drama"; 
        }
        else
        {
            mensaje="\nEl Primer libro De Drama es: "+nombreprimerDrama;
        }         
    }
}
