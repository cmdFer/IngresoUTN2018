function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var promedio; 
	var numero;

	while (respuesta == "si")
	{
		numero = parseInt(prompt("ingrese un numero: "));
		acumulador = acumulador + numero;
		contador = contador +1; 

		respuesta = prompt("deseas continuar?: ");
	}

promedio = acumlador / contador 
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN