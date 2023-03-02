/*
lucas damian carabajal silva

En una carga indefinida de datos (hasta que el usuario quiera) se desea llevar a cabo el registro diario de una granja de minería en Bitcoin y Ethereum.
Se requieren los siguientes datos:
Nombre de la criptomoneda (VALIDAR EL INGRESO solo de BTC o ETH).
Cantidad de BTC o ETH minado ese día - Número positivo.
Cotización diaria en USD - Número positivo inclusive 0.
INFORMAR
A) Nombre y cantidad de la criptomoneda más minada.
B) Nombre de la criptomoneda que mayor cotización tuvo.
C) Cantidad total de ingreso bruto en USD de cada criptomoneda.

D) Sabiendo que el coste de electricidad para:
BTC es de un 7% y para ETH es un 4% calcular el ingreso total neto en USD.

E) Convertir el ingreso neto en ARS solo para ETH. Sabiendo que la cotización de 1 USD a ARS es de $337.
Si el ingreso supera los 100.000 ARS calcular impuesto de AFIP del 21% e informar
"El ingreso neto por ETH es de X1 pesos y se descontó X2 pesos de AFIP".
Siendo .X1 el neto en ARS y X2 el impuesto aplicado.
*/

function mostrar()
{	
    let respuesta=true;
    let nombreCriptomoneda;
    let cantidadIngresada;
    let cotizaciónDiaria;
    let nombreCriptoMasMinada;
    let cantidadCriptoMasMinada;
    let nombreCriptoMayorCotizacion;
    let banderaPrimero=true;
    let mayorCotización;
    let ingresoTotalNetoBTC;
    let ingresoTotalNetoETH;
    let porcentaje;
    let mensaje;
    let acumuladorBrutoBTC=0;
    let acumuladorBrutoETH=0;
    let Impuesto;
    let convergenciaPesos;
    let ElectricidadBTC;
    let ElectricidadETH;
    let importeTotal;

    while(respuesta==true)
    {
        nombreCriptomoneda=prompt("Ingrese que criptomoneda desea ver: BTC O ETH:").toLowerCase();
        while(isNaN(nombreCriptomoneda)==false)
        {
            nombreCriptomoneda=prompt("Error,Ingrese que criptomoneda desea ver: BTC O ETH:").toLowerCase();
        }
        while(nombreCriptomoneda!="btc" && nombreCriptomoneda!="eth")
        {
            nombreCriptomoneda=prompt("Error,Ingrese que criptomoneda desea ver: BTC O ETH:").toLowerCase();
        }
        cantidadIngresada=prompt("Ingrese la cantidad de cripto minada:");
        cantidadIngresada=parseInt(cantidadIngresada);
        while(isNaN(cantidadIngresada)==true)
        {
            cantidadIngresada=prompt("Error,Ingrese la cantidad de cripto minada:");
            cantidadIngresada=parseInt(cantidadIngresada);
        }
        while(cantidadIngresada<0)
        {
            cantidadIngresada=prompt("Error,Ingrese la cantidad de cripto minada:");
            cantidadIngresada=parseInt(cantidadIngresada);
        }
        cotizaciónDiaria=prompt("ingrese la cotizacion en USD: ");
        cotizaciónDiaria=parseInt(cotizaciónDiaria);
        while(cotizaciónDiaria<0)
        {
            cotizaciónDiaria=prompt("Error,ingrese la cotizacion en USD: ");
            cotizaciónDiaria=parseInt(cotizaciónDiaria);
        }

        if(banderaPrimero==true)
        {
            nombreCriptoMasMinada=nombreCriptomoneda;
            cantidadCriptoMasMinada=cantidadIngresada;
            nombreCriptoMayorCotizacion=nombreCriptomoneda;
            mayorCotización=cotizaciónDiaria;
            banderaPrimero=false;
        }
        else
        {
            //A) Nombre y cantidad de la criptomoneda más minada.
            if(cantidadCriptoMasMinada<cantidadIngresada)
            {
                nombreCriptoMasMinada=nombreCriptomoneda;
                cantidadCriptoMasMinada=cantidadIngresada;
                mensaje="El nombre de la CriptoMoneda mas usada es "+nombreCriptoMasMinada+"y la cantidad que se mino fue "+cantidadCriptoMasMinada;
            }
            //B) Nombre de la criptomoneda que mayor cotización tuvo.
            if(mayorCotización<cotizaciónDiaria)
            {
                mayorCotización=cotizaciónDiaria;
                nombreCriptoMayorCotizacion=nombreCriptomoneda;
                mensaje="La criptoMoneda que mas cotizacion tuvo fue: "+nombreCriptoMayorCotizacion;
            } 
        }
        //C)Cantidad total de ingreso bruto en USD de cada criptomoneda. 
        //D) Sabiendo que el coste de electricidad para:
        //BTC es de un 7% y para ETH es un 4% calcular el ingreso total neto en USD.
        
        switch(nombreCriptomoneda)
        {
            case "btc":
                porcentaje=7
                acumuladorBrutoBTC=acumuladorBrutoBTC+cotizaciónDiaria; 
            break;
            case "eth":
                porcentaje=5
                acumuladorBrutoETH=acumuladorBrutoETH+cotizaciónDiaria;   
            break;  
        }

        respuesta=confirm("desea continuar?");
    }
    /*
    E) Convertir el ingreso neto en ARS solo para ETH. Sabiendo que la cotización de 1 USD a ARS es de $337.
    Si el ingreso supera los 100.000 ARS calcular impuesto de AFIP del 21% e informar
    "El ingreso neto por ETH es de X1 pesos y se descontó X2 pesos de AFIP".
    Siendo .X1 el neto en ARS y X2 el impuesto aplicado.
    */

    ElectricidadBTC= (acumuladorBrutoBTC*porcentaje)/100; 
    ElectricidadETH= (acumuladorBrutoETH*porcentaje)/100; 
    ElectricidadBTC=parseInt(ElectricidadBTC);
    ElectricidadETH=parseInt(ElectricidadETH);
    ingresoTotalNetoBTC= ElectricidadBTC+acumuladorBrutoBTC;
    ingresoTotalNetoETH= ElectricidadETH+acumuladorBrutoETH;
    convergenciaPesos= acumuladorBrutoETH * 337; 
    if(convergenciaPesos>100000)
    {
        Impuesto=(convergenciaPesos*21)/100;
        importeTotal= convergenciaPesos-Impuesto;
        mensaje+="\n El ingreso neto por ETH es de "+importeTotal+" pesos y se desconto "+Impuesto+" pesos de AFIP";
    }
    else
    {
        Impuesto=(convergenciaPesos*21)/100;
        Impuesto=parseInt(Impuesto);
        importeTotal= convergenciaPesos+Impuesto;
    }
    mensaje+="\n La cantidad total de ingreso bruto en USD en BTC fue de: "+acumuladorBrutoBTC+ "USD";
    mensaje+="\n La cantidad total de ingreso bruto en USD en ETH fue de: "+acumuladorBrutoETH+ "USD";
    mensaje+="\n Sabiendo que el coste de electricidad para: BTC es de un 7% el total es: "+ingresoTotalNetoBTC+" y para ETH es un 4% es: " +ingresoTotalNetoETH;
    mensaje+="\n El ingreso neto por ETH es de "+importeTotal+" pesos y el impuesto aplicado fue de:"+Impuesto+"%";
    alert(mensaje);
}