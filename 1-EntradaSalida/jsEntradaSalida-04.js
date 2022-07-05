/* 
Matias Tessitore 
Div E
Ej 3 E/S
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{

    let nombreIngresado; 

	nombreIngresado = prompt("Ingrese su nombre");

document.getElementById('txtIdNombre').value =nombreIngresado;
	
}
 