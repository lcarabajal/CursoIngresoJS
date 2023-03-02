/*
2. Una librería que se especializa en venta de libros importados desea calcular ciertas métricas en base a las ventas de sus productos (No se sabe cuántos).
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:                          	
A)El más barato de los libros de drama con su importe.
B)Qué porcentaje de cada género se vendió.
C)Informar el título del primer libro de drama que se vendió.
D)titulo del tapadura más barato
E)con que se gano mas plata, tapa dura o rustica?
*/
function mostrar()
{
  let tituloLibroIngresado;
  let generoIngresado;
  let materialDelLibroIngresado;
  let importeIngresado;
  let respuesta=true;
  let primerBanderaDrama=false;
  let primerBanderaTapadura=false;
  let dramaMasBarato;
  let contadorDrama=0;
  let contadorCienciaFiccion=0;
  let contadorTerror=0;
  let contadorTotal;
  let porcentajeGeneroDrama;
  let porcentajeGeneroCienciaFiccion;
  let porcentajeGeneroTerror;
  let nombrePrimerDrama;
  let tapaduraMasBarato;
  let nombreTapaDuraMasbarato;
  let ingresosRustica=0;
  let ingresosTapaDura=0;
  let mensaje;

  while(respuesta==true)
  {
    tituloLibroIngresado=prompt("Ingrese el titulo del libro: ").toLowerCase();
    while(isNaN(tituloLibroIngresado)==false)
    {
      tituloLibroIngresado=prompt("Error,Ingrese el titulo del libro: ").toLowerCase();
    }
    
    generoIngresado=prompt("Ingrese el genero: ciencia ficcion, drama, terror").toLowerCase();
    while(isNaN(generoIngresado)==false)
    {
      generoIngresado=prompt("Error,Ingrese el genero: ciencia ficcion, drama, terror").toLowerCase();
    }
    while(generoIngresado!="ciencia ficcion" && generoIngresado!="drama" && generoIngresado!="terror")
    {
      generoIngresado=prompt("Error,Ingrese el genero: ciencia ficcion, drama, terror").toLowerCase();
    }
    
    materialDelLibroIngresado=prompt("ingrese el material que desea: Rustica, Tapa dura").toLowerCase();
    while(isNaN(materialDelLibroIngresado)==false)
    {
      materialDelLibroIngresado=prompt("Error,ingrese el material que desea: Rustica, tapa dura").toLowerCase();
    }
    while(materialDelLibroIngresado!="rustica" && materialDelLibroIngresado!="tapa dura")
    {
      materialDelLibroIngresado=prompt("Error,ingrese el material que desea: Rustica, tapa dura").toLowerCase();
    }

    importeIngresado=prompt("Ingrese un importe de 0 a 30000");
    importeIngresado=parseInt(importeIngresado);
    while(isNaN(importeIngresado)==true)
    {
      importeIngresado=prompt("Error,Ingrese un importe de 0 a 30000");
      importeIngresado=parseInt(importeIngresado);
    }
    while(importeIngresado<1 || importeIngresado>30000)
    {
      importeIngresado=prompt("Error,Ingrese un importe de 0 a 30000");
      importeIngresado=parseInt(importeIngresado);
    }
    
    switch(materialDelLibroIngresado)
    {
      case "rustica":
        ingresosRustica=ingresosRustica+importeIngresado;
      break;
      default:
        //D)titulo del tapadura más barato
        if(primerBanderaTapadura==false)
        {
          tapaduraMasBarato=importeIngresado;
          nombreTapaDuraMasbarato=tituloLibroIngresado;
          primerBanderaTapadura=true;
          ingresosTapaDura=ingresosTapaDura+importeIngresado;
          mensaje+="\nEl titulo de tapadura mas barato es: "+nombreTapaDuraMasbarato;
        }
        else
        {
          if(tapaduraMasBarato>importeIngresado)
          {
            tapaduraMasBarato=importeIngresado;
            nombreTapaDuraMasbarato=tituloLibroIngresado;
          }
        }
      break;
    }
    //E)con que se gano mas plata, tapa dura o rustica?
    if(ingresosRustica>ingresosTapaDura)
    {
      mensaje+="\nSe gano mas plata con material Rustica";
    }
    else
    {
      mensaje+="\nSe gano mas plata con material Tapa Dura";
    }
    switch(generoIngresado)
    {
      case"drama":
        //A)-C)
        if(primerBanderaDrama==false)
        {
          dramaMasBarato=importeIngresado;
          nombrePrimerDrama=tituloLibroIngresado;
          primerBanderaDrama=true;
          mensaje="El libro de drama mas barato cuesta: "+dramaMasBarato;
          mensaje+="\nEl nombre del primer libro de drama es: "+nombrePrimerDrama;
        }
        else
        {
          if(importeIngresado<dramaMasBarato)
          {
            dramaMasBarato=importeIngresado;
            mensaje="El libro de drama mas barato cuesta: "+dramaMasBarato;
          }
        }
        contadorDrama++;
      break;
      case"ciencia ficcion":
      contadorCienciaFiccion++;
      break;
      default:
        contadorTerror++;
      break;
    }
    respuesta=confirm("Desea continuar?");
  }
  //B)
  contadorTotal=contadorCienciaFiccion+contadorDrama+contadorTerror
  porcentajeGeneroDrama=(contadorDrama*100)/contadorTotal;
  porcentajeGeneroCienciaFiccion=(contadorCienciaFiccion*100)/contadorTotal;
  porcentajeGeneroTerror=((contadorTerror*100))/contadorTotal;
  porcentajeGeneroDrama=parseInt(porcentajeGeneroDrama);
  porcentajeGeneroCienciaFiccion=parseInt(porcentajeGeneroCienciaFiccion);
  porcentajeGeneroTerror=parseInt(porcentajeGeneroTerror);
  mensaje+="\nEste es el porcentaje del Genero Drama: "+porcentajeGeneroDrama+ "%";
  mensaje+="\nEste es el porcentaje del Genero Ciencia Ficción: "+porcentajeGeneroCienciaFiccion+ "%";
  mensaje+="\nEste es el porcentaje del Genero Terror: "+porcentajeGeneroTerror+ "%";
  alert(mensaje);
}