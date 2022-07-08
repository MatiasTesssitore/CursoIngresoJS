/*
Matias Tessitore 
Division E
TP 2 
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //creo variables 
    let largoTerreno; 
    let anchoTerreno; 
    let perimetroTerreno; 
    
    //tomo los datos ID 

    largoTerreno = document.getElementById("txtIdLargo").value; 
    anchoTerreno = document.getElementById("txtIdAncho").value;

    //los paso a enteros
    largoTerreno = parseInt(largoTerreno);
    anchoTerreno = parseInt(anchoTerreno);
    
    //operamos
    perimetroTerreno = 2 * largoTerreno + 2 * anchoTerreno;
    resultado = perimetroTerreno * 3;

    alert (" La cantidad de alambre que necesita es:  " +  resultado)
}
function Circulo () 
{
    //variables
	let radio;
    let pi; 
    let resultado;

    //tomo los ID 
    radio = document.getElementById("txtIdRadio").value; 

    //parseo 
    radio = parseInt(radio); 

    //operamos

    pi = 3,14
    resultado = ( 2 * pi * radio) * 3;


    alert("La cantidad de alambre que se necesita es: " + resultado)


}
function Materiales () 
{
	//creo variables
    let alto;
    let ancho;
    let bolsaCemento;
    let bolsaCal;
    let resultado;

    //tomo los datos ID 
     alto = document.getElementById("txtIdLargo").value; 
     ancho = document.getElementById("txtIdAncho").value;

    //los paso a enteros
     alto = parseInt(alto);
     ancho = parseInt(ancho); 

    //operamos
   
    resultado = ( alto * ancho);
    bolsaCal = (resultado * 3);
    bolsaCemento = (resultado * 2); 

    alert( " Se necesitan "+ bolsaCal + " bolsa de cal y " + bolsaCemento + " bolsa de cemento ");
    
}