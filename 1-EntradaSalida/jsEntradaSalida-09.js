/*
Matias Tessitore 
DIV E
Ej 9 E/S
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
/*
function mostrarAumento()
{ 
	//declaro variables
	let sueldo; 
	let aumento; 
	let sueldoAumentado; 
	

	//mostrar valores por ID
	sueldo = document.getElementById("txtIdSueldo").value; 
	
	sueldo = parseInt(sueldo);


	//calcular el 10% del sueldo 
	aumento = (10/100) * sueldo; 
	sueldoAumentado = sueldo + aumento; 


	document.getElementById("txtIdResultado").value = sueldoAumentado;
*/

/*
Matias Tessitore
Division E 
EJ 9 BIS 
9 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento
en el cuadro de texto "RESULTADO".

El usuario debe ingresar el porcentaje del aumento
y debemos mostrar el valor del porcentaje del aumento 
por ALERT
*/
	function mostrarAumento () 
	{
	//declaro variables
	let sueldo; 
	let aumento;
	let resultado; 
	let aumentoSueldo;

	//mostrar valores por ID 
	sueldo = document.getElementById("txtIdSueldo").value; 
	aumentoSueldo = prompt("Agregue el porcentaje que quiere aumentar en el sueldo;" + sueldo);


	//parseamos 
	sueldo = parseInt(sueldo);
	aumentoSueldo = parseInt (aumentoSueldo); 

	// resolvemos

	aumento = (aumentoSueldo/100)* sueldo;
	resultado = sueldo + aumento
	
	//resultados
	document.getElementById("txtIdResultado").value = resultado;
	alert("El aumento es de " + aumento );
}
















