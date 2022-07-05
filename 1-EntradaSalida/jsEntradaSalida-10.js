/*
Matias 
Division e
Ejercicio 10 E/S
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//variables
let importe;
let descuento;
let resultado;

//tomo los ID 
importe = document.getElementById("txtIdImporte").value; 

//parseo 
importe = parseInt(importe);

//hago el descuento
descuento = (25/100) * importe; 
resultado = importe - descuento; 


document.getElementById("txtIdResultado").value = resultado;

//resultado listo

}


