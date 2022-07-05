/*
Matias Tessitore 
Division E 
Ej 6 E/S
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
 //crear variables 
  let numeroUno; 
  let numeroDos; 
  let resultado; 

  //tomo los numeros por Id 
  numeroUno = document.getElementById("txtIdNumeroUno").value;
  numeroDos = document.getElementById("txtIdNumeroDos").value; 

//transformamos a enteros 
numeroUno = parseInt (numeroUno); 
numeroDos = parseInt (numeroDos); 


//operamos 
resultado = numeroUno + numeroDos;

//mostrar resultado 
alert("El resultado es: " + resultado);

}

