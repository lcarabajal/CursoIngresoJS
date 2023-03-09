/*
Ejercicio 1:

Apellido:Carabajal SIlva
Nombre:Lucas Damian
Comisión: A
Tutor: Gianni, Octavio 

El gerente de "El super de Anto"" nos pide desarrollar un programa que  permita cargar y analizar las compras realizadas por sus clientes en una jornada de trabajo.
Para ello, se debe ingresar en cada una de las compras:

Nombre del comprador.
Edad del comprador (Debe ser mayor de edad).
Cantidad de productos comprados (No debe ser negativo ni cero).
Total gastado (No debe ser negativo ni cero).
Método de pago (Efectivo - Débito - Crédito)

En base a todas las compras registradas, informar:

A) El promedio de edad entre todos los compradores.
B) El promedio de dinero gastado por los compradores menores a 25 años.
C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito.
D) Nombre y cantidad de productos del comprador que menos gasto.
*/
function mostrar()
{
    let nombreIngresado;
    let edadIngresado;
    let cantidadProductosIngresado;
    let totalGastadoIngresado;
    let metodoDePagoIngresado;
    let respuesta=true;
    let acumuladorEdad=0;
    let contador=0;
    let promedioEdad;
    let mensaje;
    let contadorMenor25=0;
    let acumuladorDinero=0;
    let promedioGastado;
    let acumuladorDineroDEBITO=0;
    let primerBandera=true;
    let menosGastos;
    let nombreMenosgastos;
    let menosCantidadDeProductos;
    let totalDinero=0;

    while(respuesta==true)
    {
        nombreIngresado=prompt("Ingres su nombre: ");
        while(!isNaN(nombreIngresado))
        {
            nombreIngresado=prompt("Ingres su nombre: ");
        }
        edadIngresado=prompt("Ingrese su edad:");
        edadIngresado=parseInt(edadIngresado);
        while(isNaN(edadIngresado) || edadIngresado<18 && edadIngresado>100)
        {
            edadIngresado=prompt("Ingrese su edad: ");
            edadIngresado=parseInt(edadIngresado);
        }
        cantidadProductosIngresado=prompt("Ingrese la cantidad de productos comprados: ");
        cantidadProductosIngresado=parseInt(cantidadProductosIngresado);
        while(isNaN(cantidadProductosIngresado) || cantidadProductosIngresado<1)
        {
            cantidadProductosIngresado=prompt("Ingrese la cantidad de productos comprados: ");
            cantidadProductosIngresado=parseInt(cantidadProductosIngresado);
        }
        totalGastadoIngresado=prompt("Ingrese el total gastado: ");
        totalGastadoIngresado=parseFloat(totalGastadoIngresado);
        while(isNaN(totalGastadoIngresado) || totalGastadoIngresado<1)
        {
            totalGastadoIngresado=prompt("Ingrese el total gastado: ");
            totalGastadoIngresado=parseInt(totalGastadoIngresado);
        }
        metodoDePagoIngresado=prompt("Ingrese el metodo de pago: efectivo, debito o credito ? ");
        metodoDePagoIngresado=metodoDePagoIngresado.toLowerCase()
        while(!isNaN(metodoDePagoIngresado) || metodoDePagoIngresado!="efectivo" && metodoDePagoIngresado!="debito" && metodoDePagoIngresado!="credito")
        {
            metodoDePagoIngresado=prompt("Ingrese el metodo de pago: efectivo, debito o credito ? ");
            metodoDePagoIngresado=metodoDePagoIngresado.toLowerCase()
        }
        //D) Nombre y cantidad de productos del comprador que menos gasto.
        if(primerBandera==true)
        {
            menosGastos=totalGastadoIngresado;
            nombreMenosgastos=nombreIngresado;
            menosCantidadDeProductos=cantidadProductosIngresado;
            primerBandera=false;
        }
        else
        {
            if(totalGastadoIngresado<menosGastos)
            {
                menosGastos=totalGastadoIngresado;
                nombreMenosgastos=nombreIngresado;
                menosCantidadDeProductos=cantidadProductosIngresado;
            }
        }
        acumuladorEdad+=edadIngresado;
        contador++;
        if(edadIngresado<25)
        {
            acumuladorDinero+=totalGastadoIngresado;
            contadorMenor25++;
        }
        //C) El porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito.
        switch(metodoDePagoIngresado)
        {
            case "debito":
                acumuladorDineroDEBITO+=totalGastadoIngresado;               
                break;
        }
        totalDinero+=totalGastadoIngresado;
        respuesta=confirm("Desea continuar?");
    }
    porcentajeDinero=(acumuladorDineroDEBITO*100)/totalDinero;
    porcentajeDinero=parseInt(porcentajeDinero);
    promedioEdad=acumuladorEdad/contador;
    promedioGastado=acumuladorDinero/contadorMenor25;
    if(contadorMenor25==0)
    {
        mensaje="No hay compras hechas por menores a 25";
    }
    else
    {
        mensaje+="El promedio de Dinero entre los compradores que son menores de 25 años: "+promedioGastado;
    }
    mensaje="\nEl promedio de edad entre los compradores es de: "+promedioEdad;
    mensaje+="\nEl porcentaje de dinero que representa el total de las compras realizadas con tarjeta de debito es del: "+porcentajeDinero+ "%";
    mensaje+="\nEl nombre  del comprador que menos gasto es: "+nombreMenosgastos+ " y la cantidad de productos que compro fue: "+menosCantidadDeProductos;
    alert(mensaje);
}
