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
    let baratoDrama;
    let contadorGeneroDrama=0;
    let contadorGeneroCienciaFiccion=0;
    let contadorGeneroTerror=0;
    let primerDrama=true;
    let respuesta=true;
    let nombreDramaBarato;
    let contadorTotal;
    let porcentajeFinalDrama;
    let porcentajeFinalTerror;
    let porcentajeFinalCienciaficcion;
    let primernombreDramaBarato;
    let mensaje;

    while(respuesta==true)
    {
        tituloIngresado=prompt("Ingrese el titulo del nombre: ");
        while(isNaN(tituloIngresado)==false)
        {
            tituloIngresado=prompt("Ingrese el titulo del nombre: ");
        }
        generoIngresado=prompt("Ingrese el genero: Drama, Ciencia ficcion, Terror ").toLowerCase();
        while(isNaN(generoIngresado)==false)
        {
            generoIngresado=prompt("Ingrese el genero: Drama, Ciencia ficcion, Terror ");
        }
        while(generoIngresado!="drama" && generoIngresado!="ciencia ficcion" && generoIngresado!="terror")
        {
            generoIngresado=prompt("Ingrese el genero: Drama, Ciencia ficcion, Terror ");
        }
        materialIngresado=prompt("Ingrese material: rustico o tapa dura ").toLowerCase();
        while(isNaN(materialIngresado)==false)
        {
            materialIngresado=prompt("Ingrese material: rustico o tapa dura ").toLowerCase();
        }
        while(materialIngresado!="rustico" && materialIngresado!="tapa dura")
        {
            materialIngresado=prompt("Ingrese material: rustico o tapa dura ").toLowerCase();
        }
        importeIngresado=prompt("ingrese el importe deseado: ");
        importeIngresado=parseInt(importeIngresado);
        while(isNaN(importeIngresado)==true)
        {
            importeIngresado=prompt("ingrese el importe deseado: ");
            importeIngresado=parseInt(importeIngresado);
        }
        while(importeIngresado<0 || importeIngresado>30000)
        {
            importeIngresado=prompt("ingrese el importe deseado: ");
            importeIngresado=parseInt(importeIngresado);
        }
        //El más barato de los libros de drama con su importe.
        //Qué porcentaje de cada género se vendió.
        switch(generoIngresado)
        {
            case "ciencia ficcion":
                contadorGeneroCienciaFiccion++;
                break;
            case "drama":
                if(primerDrama==true)
                {   
                    baratoDrama=importeIngresado;
                    nombreDramaBarato=tituloIngresado;
                    primernombreDramaBarato=tituloIngresado;
                    primerDrama=false;
                }
                else
                {
                    if(baratoDrama>importeIngresado)
                    {
                        baratoDrama=importeIngresado;
                        nombreDramaBarato=tituloIngresado;
                    }
                }
                contadorGeneroDrama++;
                break;
            case "terror":
                contadorGeneroTerror++;
                break;
        }
        respuesta=confirm("Desea continuar?");
    }//  5                   3               1                           1                       
    contadorTotal= contadorGeneroTerror+contadorGeneroDrama+contadorGeneroCienciaFiccion;
    //                             1                     5               = 20%                   
    porcentajeFinalDrama= contadorGeneroDrama*100/contadorTotal
    //                                           1                     5        = 20%   
    porcentajeFinalCienciaficcion= contadorGeneroCienciaFiccion*100/contadorTotal;
    //                             3                    5           = 60%
    porcentajeFinalTerror= contadorGeneroTerror*100/contadorTotal;
    porcentajeFinalCienciaficcion=parseInt(porcentajeFinalCienciaficcion);
    porcentajeFinalDrama=parseInt(porcentajeFinalDrama);
    porcentajeFinalTerror=parseInt(porcentajeFinalTerror);
    mensaje="El más barato de los libros de drama:"+ nombreDramaBarato + " con su importe de: "+ baratoDrama;
    mensaje+="\nEl porcentaje del genero Drama es: "+porcentajeFinalDrama; "%" 
    mensaje+="\nEl porcentaje del genero ciencia ficcion es: "+porcentajeFinalCienciaficcion; "%"
    mensaje+="\nEl porcentaje del genero terror es: "+porcentajeFinalTerror; "%"
    mensaje+="\nEl más barato de los libros de drama:"+ primernombreDramaBarato;
    alert(mensaje);
}
