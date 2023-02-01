/* Ezequiel del campo
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombrePersona;
	let edadPersona;
	let mensaje

	nombrePersona = document.getElementById("txtIdNombre").value;
	edadPersona = document.getElementById("txtIdEdad").value;
	mensaje = "Su nombre es " + nombrePersona + " y tiene " +edadPersona + " años ";

	alert(mensaje);
}

