
/*
lucas Damian Carabajal SIlva
3. Se debe llevar a cabo el registro de ingresos a un parque de diversiones.  Dicho parque se caracteriza por su variedad de montañas rusas. Se pide el ingreso del nombre del visitante, la edad (mayores a 12 años),
tipo de pasaporte (sin pasaporte, convencional, premium), tipo de montaña rusa (Fantasma, Acuática, Adrenalina100%). 
Tener en cuenta:
El valor de acceso a todas las montañas rusas es de $500.
Los visitantes sin pasaporte, abonan al momento de subir al juego. 
Los visitantes con pasaporte convencional, abonan el 30% del valor de la entrada. precio de la montaña * 30 / 100 =150
Los visitantes con pasaporte premium, no abonan nada.
Se necesita saber: 
A)La recaudación en efectivo por las tres montañas rusas.
B)Porcentaje de visitantes que se subieron a cada montaña rusa.
C)Cuál es el tipo de pasaporte que mas se utilizo (incluyendo los visitantes sin pasaporte)
*/

function mostrar()
{
  let nombreIngresado;
  let edadIngresado;
  let tipoDePasaporte;
  let tipoDeMontañaRusa;
  let pasajeMontañaRusa=500;
  let montoTotal=0;
  let respuesta=true;
  let acumuladorAcuatica=0;
  let acumuladorAdrenalina=0;
  let acumuladorFantasma=0;
  let contadorAdrenalina=0;
  let contadorFantasma=0;
  let contadorAcuatica=0;
  let porcentajeFantasma;
  let porcentajeAcuatica;
  let porcentajeAdrenalina;
  let contadorTotal;
  let contadorPremium=0;
  let contadorConvencional=0;
  let contadorSinPasaporte=0;
  let mensaje;


  while(respuesta==true)
  {
    nombreIngresado=prompt("Ingrese su nombre");
    while(isNaN(nombreIngresado)==false)
    {
      nombreIngresado=prompt("Error,ingrese su nombre");
    }

    edadIngresado=prompt("Ingrese su edad: ");
    edadIngresado=parseInt(edadIngresado);
    while(isNaN(edadIngresado)==true || (edadIngresado<12))
    {
      edadIngresado=prompt("Error,ingrese su edad:");
      edadIngresado=parseInt(edadIngresado);
    }

    tipoDePasaporte=prompt("Ingrese su tipo de pasaje: sin pasaporte, premium, convencional ").toLowerCase();
    while(isNaN(tipoDePasaporte)==false)
    {
      tipoDePasaporte=prompt("Error,Ingrese su tipo de pasaje: sin pasaporte, premium, convencional ").toLowerCase();
    }
    while(tipoDePasaporte!="sin pasaporte" && tipoDePasaporte!="premium" && tipoDePasaporte!="convencional")
    {
      tipoDePasaporte=prompt("Error,Ingrese su tipo de pasaje: sin pasaporte, premium, convencional ").toLowerCase();
    }
    
    tipoDeMontañaRusa=prompt("Ingrese el tipo de montaña rusa: fantasma, acuatica, adrenalina100% ").toLowerCase();
    while(isNaN(tipoDeMontañaRusa)==false)
    {
      tipoDeMontañaRusa=prompt("Error,Ingrese el tipo de montaña rusa: fantasma, acuatica, adrenalina100% ").toLowerCase();
    }
    while(tipoDeMontañaRusa!="fantasma" && tipoDeMontañaRusa!="acuatica" && tipoDeMontañaRusa!="adrenalina100%" )
    {
      tipoDeMontañaRusa=prompt("Error,Ingrese el tipo de montaña rusa: fantasma, acuatica, adrenalina100% ").toLowerCase();
    }

    switch(tipoDePasaporte)
    {
      case"convencional":
        pasajeMontañaRusa=150;
        contadorConvencional++;
      break;
      case"premium":
        pasajeMontañaRusa=0;
        contadorPremium++;
      break;
      default:
        contadorSinPasaporte++;
      break;
    }
    //C)Cuál es el tipo de pasaporte que mas se utilizo (incluyendo los visitantes sin pasaporte)
    if(contadorConvencional>contadorPremium && contadorConvencional> contadorSinPasaporte)
    {
      mensaje+="\nEl pasaporte que mas se utilizo fue el Pasaporte Convencional"
    }
    else
    {
      if(contadorPremium>contadorSinPasaporte)
      {
        mensaje+="\nEl pasaporte que mas se utilizo fue el Pasaporte Premium"
      }
      else
      {
        mensaje+="\nEl pasaporte que mas se utilizo fue el pasaporte Sin Pasaporte"
      }
    }
    switch(tipoDeMontañaRusa)
    {
      case"acuatica":
        acumuladorAcuatica=acumuladorAcuatica+pasajeMontañaRusa;
        contadorAcuatica++;
        break;
      case"fantasma":
        acumuladorFantasma=acumuladorFantasma+pasajeMontañaRusa;
        contadorFantasma++;
        break;
      default:
        acumuladorAdrenalina=acumuladorAdrenalina+pasajeMontañaRusa;
        contadorAdrenalina++;
        break;
    }
   

    respuesta=confirm("Desea continuar?");
  } 
   //A) La recaudación en efectivo por las tres montañas rusas.
   montoTotal=acumuladorAcuatica+acumuladorFantasma+acumuladorAdrenalina;
   mensaje="La recaudacion en efectivo por las tres montañas es: "+montoTotal;
   //B)Porcentaje de visitantes que se subieron a cada montaña rusa.
   contadorTotal=contadorAcuatica+contadorAdrenalina+contadorFantasma;
   porcentajeAcuatica=(contadorAcuatica*100)/contadorTotal;
   porcentajeAdrenalina=(contadorAdrenalina*100)/contadorTotal;
   porcentajeFantasma=(contadorFantasma*100)/contadorTotal;
   mensaje+="\nEl porcentaje de visitantes que se subieron a la montaña Acuatica "+ porcentajeAcuatica;
   mensaje+="\nEl porcentaje de visitantes que se subieron a la montaña Adrenalina "+ porcentajeAdrenalina;
   mensaje+="\nEl porcentaje de visitantes que se subieron a la montaña Fantasma "+ porcentajeFantasma;
   alert(mensaje);
}
 /*
  do
  {
    do
    {
      nombreIngresado=prompt("Ingrese su nombre: ").toLowerCase;
    }while(isNaN(nombreIngresado)!=false);//para negarlo = '!'
  }
  while(confirm("desea continuar?"));
  alert("QSyo");
  */