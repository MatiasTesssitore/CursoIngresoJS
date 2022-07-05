/*
Matias Tessitore 
DIV E
Ej 9 E/S
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
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

}
