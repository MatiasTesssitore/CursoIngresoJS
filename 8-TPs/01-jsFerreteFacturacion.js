/*
Matias Tessitore 
Division E
TP 1 FerreteFacturacion


1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //creo variables
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado; 



    //tomo los num de ID 

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;


    //paso los numeros a enteros

    precioUno = parseInt(precioUno);  
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    //operamos

    resultado = precioUno + precioDos + precioTres; 

    alert("El resultado de la suma es : " + resultado); 
}

function Promedio () 
{  
    //creo variables
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado; 



    //tomo los num de ID 

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;


    //paso los numeros a enteros

    precioUno = parseInt(precioUno);  
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    //operamos

    resultado = (precioUno + precioDos + precioTres) / 3

    alert("El resultado del promedio es : " + resultado);
	
}
function PrecioFinal () 
{
//creo variables
let precioUno;
let precioDos;
let precioTres;
let resultado; 


//tomo los num de ID 

precioUno = document.getElementById("txtIdPrecioUno").value;
precioDos = document.getElementById("txtIdPrecioDos").value;
precioTres = document.getElementById("txtIdPrecioTres").value;


//paso los numeros a enteros

precioUno = parseInt(precioUno);  
precioDos = parseInt(precioDos);
precioTres = parseInt(precioTres);

//operamos

resultado =(precioUno + precioDos + precioTres) * 21 /100
resultado = resultado + precioUno + precioDos + precioTres

alert("El resultado con el IVA ingresado es : " + resultado);	
}