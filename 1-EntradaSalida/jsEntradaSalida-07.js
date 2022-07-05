/*
Matias Tessitore
Division E 
Ejercicio 7 E/S 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
		//crear variables 
		let numeroUno;
		let numeroDos;
		let resultado; 


		//tomo los numeros por ID
		numeroUno = document.getElementById("txtIdNumeroUno").value;
		numeroDos = document.getElementById("txtIdNumeroDos").value;



		//los transformo en enteros
		numeroUno = parseInt(numeroUno);
		numeroDos = parseInt(numeroDos);

		//operamos 
		resultado =  numeroUno + numeroDos; 

		alert("El resultado de la suma es : " + resultado);
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resultado; 


	//tomo los numeros por ID
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;


	//los transformo en enteros
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	//operamos 
	resultado =  numeroUno - numeroDos; 

	alert("El resultado de la resta es : " + resultado);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let resultado; 


	//tomo los numeros por ID
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;


	//los transformo en enteros
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	//operamos 
	resultado =  numeroUno * numeroDos; 
	alert ("El resultado de la multiplicacion es : " + resultado);
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let resultado; 


	//tomo los numeros por ID
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;


	//los transformo en enteros
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	//operamos 
	resultado =  numeroUno / numeroDos; 

	alert ("El resultado de la division es : " + resultado);

}





