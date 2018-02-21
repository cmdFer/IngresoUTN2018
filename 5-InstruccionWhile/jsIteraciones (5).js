function Mostrar()
{

var sexo = prompt("ingrese f ó m .");
sexo = sexo.toLowerCase();

while (sexo != "f" && sexo != "m")
{
    sexo = prompt("sexo incorrecto. reingrese ingrese f ó m .")
    sexo = sexo.toLowerCase();
}

if (sexo == "m")
{
   sexo = "masculino"
}
else
{
    sexo = "femenino"
}


document.getElementById("Sexo").value=sexo;

}// fin de la funcion
