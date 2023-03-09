/*
Parador Atalaya

Para la nueva sucursal de Atalaya a la vuelta de UTN Avellaneda, es necesario llevar un registro de la venta diaria de cafés, medialunas y churros, esto durante las siguientes 12 horas.
Para eso, al momento de cada venta, se debe ingresar:

Nombre del cliente a retirar
Tipo (Café / Medialunas /Churros) 
Cantidad.

El precio por unidad de cada producto es:

Café $100.
Medialunas $60.
Churros $50.


Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
Si compra 5 Medialunas o Churros y un café tendrá un 5% de descuento.

Informes:

Cuantas Medialunas se compraron durante toda la jornada. //
Cuál fue el producto con más unidades vendidas. //
Nombre del cliente, y tipo de producto con mayor cantidad de compras // 
En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.//
Informar cuál fue el producto menos vendido
*/

function mostrar()
{
    let nombreCliente;
    let tipoCafeIngresado;
    let cantidadIngresado;
    let cafe=100;
    let medialunas=60;
    let churros=50;
    let respuesta=true;
    let descuento=0; 
    let acumuladorMedialunas=0;
    let acumuladorCafe=0;
    let acumuladorChurros=0;
    let primerBandera=true;
    let mayorCantidad;
    let menorCantidad;
    let productoMayorCantidad;
    let productoMenorCantidad;
    let nombreMayorCompra;
    let monto;
    let montoTotal;

    while(respuesta==true)
    {
        nombreCliente=prompt("Ingrese Su nombre: ")
        while(isNaN(nombreCliente)==false)
        {
            nombreCliente=prompt("Ingrese Su nombre: ")
        } 
        tipoCafeIngresado=prompt("Ingrese el producto que quiere: cafe, churros, medialunas").toLowerCase();
        while(isNaN(tipoCafeIngresado)==false)
        {
            tipoCafeIngresado=prompt("Ingrese el producto que quiere: cafe, churros, medialunas").toLowerCase();
        } 
        while(tipoCafeIngresado!="cafe" && tipoCafeIngresado!="churros" && tipoCafeIngresado!="medialunas")
        {
            tipoCafeIngresado=prompt("Ingrese el producto que quiere: cafe, churros, medialunas").toLowerCase();
        } 
        cantidadIngresado=prompt("Ingrese cuanta cantidad quiere: ")
        cantidadIngresado=parseInt(cantidadIngresado);
        while(isNaN(cantidadIngresado)==true)
        {
            cantidadIngresado=prompt("Ingrese cuanta cantidad quiere: ")
            cantidadIngresado=parseInt(cantidadIngresado);
        }
        while(cantidadIngresado<0)
        {
            cantidadIngresado=prompt("Ingrese cuanta cantidad quiere: ")
            cantidadIngresado=parseInt(cantidadIngresado);
        }  
        
        if(primerBandera==true)
        {   
            mayorCantidad=cantidadIngresado;
            menorCantidad=cantidadIngresado;
            nombreMayorCompra= nombreCliente;
            productoMayorCantidad= tipoCafeIngresado;
            productoMenorCantidad=tipoCafeIngresado;
            primerBandera=false;
        }
        else
        {
            if(mayorCantidad<cantidadIngresado)
            {
                mayorCantidad=cantidadIngresado;
                nombreMayorCompra= nombreCliente;
                productoMayorCantidad=tipoCafeIngresado;
            }
            else
            {
                if(menorCantidad>cantidadIngresado)
                {
                    menorCantidad=cantidadIngresado;
                    productoMenorCantidad=tipoCafeIngresado;
                }
            }
        }
        switch(tipoCafeIngresado)
        {
            case "medialunas":
                monto=medialunas*cantidadIngresado;
                acumuladorMedialunas=acumuladorMedialunas+cantidadIngresado;            
                if(cantidadIngresado==24)
                {
                    descuento=30;
                }
                else
                {
                    if(cantidadIngresado==12)
                    {
                        descuento=20;
                    }
                    else
                    {
                        if(cantidadIngresado==10)
                        {
                            descuento=10;
                        }
                        else
                        {
                            if(cantidadIngresado==5)
                            {
                                descuento=5;
                            }
                        }
                    }
                }                
            break;
            case "cafe": 
                monto=cafe*cantidadIngresado;
                acumuladorCafe=acumuladorCafe+cantidadIngresado;         
            break;
            default:
                monto=churros*cantidadIngresado;
                if(cantidadIngresado==24)
                {
                    descuento=30;
                }
                else
                {
                    if(cantidadIngresado==12)
                    {
                        descuento=20;
                    }
                    else
                    {
                        if(cantidadIngresado==10)
                        {
                            descuento=10;
                        }
                        else
                        {
                            if(cantidadIngresado==5)
                            {
                                descuento=5;
                            }
                        }
                    }
                }
                acumuladorChurros= acumuladorChurros+monto;
            break;
        }
        respuesta=confirm("desea continuar?");
    }
    if(monto>1300)
    {
        impuesto=monto*20/100;
        montoTotal=monto+impuesto;    
    }
    else
    {
        if(descuento==0)
        {
            montoTotal=monto;
        }
        else
        {
            porcentaje=monto*descuento/100;
            montoTotal=monto+porcentaje;
            precioFinal=montoTotal
        }
    }
    /*Cuantas Medialunas se compraron durante toda la jornada. //
    Cuál fue el producto con más unidades vendidas. //
    Nombre del cliente, y tipo de producto con mayor cantidad de compras // 
    En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.//
    Informar cuál fue el producto menos vendido*/
    mensaje="Las medialunas que se compraron durante toda la jornada fueron: "+acumuladorMedialunas;
    mensaje+="\nEl producto con mas unidades vendidas fue: "+productoMayorCantidad;
    mensaje+="\nEl nombre del cliente que mayor cantidad de compras es: "+nombreMayorCompra+ " Y compro: "+productoMayorCantidad;
    mensaje+="\nEl producto con menos unidades vendidas fue: "+productoMenorCantidad;  
    mensaje+="\nMonto a pagar: "+montoTotal;     
    alert(mensaje);
}
