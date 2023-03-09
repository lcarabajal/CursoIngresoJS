/* un maxikiosko solicita la creacion de una aplicacion simple para ir controlando la mercaderia vendida, durante el transcurso del dia laboral;
Se ingresaran un total de 10 ventas, incluyendo una serie de datos:

nombre del producto.
tipo de producto(golosinas, bebidas, cigarrillos),
Precio unitario del producto (desde 1.00$ hasta 100.00$),
cantidad de unidades por venta (entre 1 y 10),

se debera calcular e informar:

a) el total bruto recaudado con las 10 ventas.
b) el promedio de unidades por compra de golosinas (en caso de no realizar ninguna venta de golosinas, informalo)
c) de los cigarrillos mas caros , el nombre y su precio unitario.
d) de las 10 ventas, que porcentaje de ventas le pertenece a las bebidas 
*/
function mostrar()
{
    let nombreIngresado;
    let tipoIngresado;
    let precioUnitarioIngresado;
    let cantidadIngresada;
    let precioBruto=0;
    let contador=0;
    let contadorGolosinas=0;
    let acumuladorUnidadesGolosinas=0;
    let primerBandera=true;
    let precioUnitarioCigarrillo;
    let masCaroCigarrillos;
    let nombreMasCaroCigarrillo;
    let contadorBebidas=0;
    let promedioGolosinas;
    let porcentajeBebidas;
    let mensaje;

    while(contador<10)
    {
        nombreIngresado=prompt("Ingrese el nombre del producto");
        nombreIngresado=nombreIngresado.toLowerCase()        
        while(isNaN(nombreIngresado)==false)
        {
            nombreIngresado=prompt("Ingrese el nombre del producto");
            nombreIngresado=nombreIngresado.toLowerCase()        
        }
        tipoIngresado=prompt("Ingrese el tipo de producto: Golosinas, bebidas, cigarrillos");
        tipoIngresado=tipoIngresado.toLowerCase()
        while(isNaN(tipoIngresado)==false)
        {
            tipoIngresado=prompt("Ingrese el tipo de producto: Golosinas, bebidas, cigarrillos");
            tipoIngresado=tipoIngresado.toLowerCase()
        }
        while(tipoIngresado!="golosinas" && tipoIngresado!="bebidas" && tipoIngresado!="cigarrillos")
        {
            tipoIngresado=prompt("Ingrese el tipo de producto: Golosinas, bebidas, cigarrillos");
            tipoIngresado=tipoIngresado.toLowerCase()
        }
        precioUnitarioIngresado=prompt("Ingrese el precio unitario: ");
        precioUnitarioIngresado=parseFloat(precioUnitarioIngresado);
        while(isNaN(precioUnitarioIngresado)==true)
        {
            precioUnitarioIngresado=prompt("Ingrese el precio unitario: ");
            precioUnitarioIngresado=parseFloat(precioUnitarioIngresado);
        }
        while(precioUnitarioIngresado<1.00 ||precioUnitarioIngresado>100.00)
        {
            precioUnitarioIngresado=prompt("Ingrese el precio unitario: ");
            precioUnitarioIngresado=parseFloat(precioUnitarioIngresado);
        }
        cantidadIngresada=prompt("Ingrese la cantidad que desea: ");
        cantidadIngresada=parseInt(cantidadIngresada);
        while(isNaN(cantidadIngresada)==true)
        {
            cantidadIngresada=prompt("Ingrese la cantidad que desea: ");
            cantidadIngresada=parseInt(cantidadIngresada);
        }
        while(cantidadIngresada<1 || cantidadIngresada>10)
        {
            cantidadIngresada=prompt("Ingrese la cantidad que desea: ");
            cantidadIngresada=parseInt(cantidadIngresada);
        }
        //a) el total bruto recaudado con las 10 ventas.
        precioBruto=(precioUnitarioIngresado*cantidadIngresada)+precioBruto;
        switch(tipoIngresado)
        {
            case "golosinas":
                //b) el promedio de unidades por compra de golosinas (en caso de no realizar ninguna venta de golosinas, informalo)
                contadorGolosinas++;
                acumuladorUnidadesGolosinas=acumuladorUnidadesGolosinas+cantidadIngresada;
            break;
            case "bebidas":
                contadorBebidas++;
            break;
            default:
                //c) de los cigarrillos mas caros , el nombre y su precio unitario.
                if(primerBandera==true)
                {  
                    masCaroCigarrillos=tipoIngresado;
                    nombreMasCaroCigarrillo=nombreIngresado;
                    precioUnitarioCigarrillo=precioUnitarioIngresado;
                    primerBandera=false;
                }
                else
                {
                    if(precioUnitarioCigarrillo<precioUnitarioIngresado)
                    {
                        masCaroCigarrillos=tipoIngresado;
                        nombreMasCaroCigarrillo=nombreIngresado;
                        precioUnitarioCigarrillo=precioUnitarioIngresado;
                    }
                }
            break;
        }
        contador++;
    }
    porcentajeBebidas=contadorBebidas*100/contador;
    mensaje="El precio bruto en total es de :"+precioBruto;
    mensaje+="\nEl nombre del cigarrillo más caro es: "+ nombreMasCaroCigarrillo+ " y su precio es: "+precioUnitarioCigarrillo; 
    mensaje+="\nEl promedio de las ventas por Bebidas es de: "+porcentajeBebidas+ "%"; 
    if(contadorGolosinas==0)
    {
        alert("No se ingresaron golosinas");
    }
    else
    {
        promedioGolosinas=acumuladorUnidadesGolosinas/contadorGolosinas;
        alert("El promedio de golosinas es de: "+promedioGolosinas);
    }
    alert(mensaje);
}