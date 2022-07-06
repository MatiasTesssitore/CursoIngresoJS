/*
Matias Tessitore 
Div E 
Ej5 E/S


Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//crer varialbles
	let nombreIngresado; 
	let edadIngresada; 

	//tomamos el dato por Id
	 nombreIngresado = document.getElementById("txtIdNombre").value;
	 edadIngresada = document.getElementById("txtIdEdad").value;


	 //mostrar los datos
//cada vez que queramos concatenar una variable con un mensaje
//usamos el simbolo +

     alert("Su nombre es " + nombreIngresado + " y su edad es " + edadIngresada + " años").alert;




	}

//operadores aritmeticos 
// + - * / % 

//operadores relacionales o de comparacion
// >  <  ==  >=  <= 

// operadores logicos 
//   ! (negacion)  && (Y o and) | | (o - or)




