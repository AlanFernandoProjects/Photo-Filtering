/*
===============================================================
===========LICENCIATURA EN INFORMÁTICA CULIACÁN================
===============================================================
============ PROGRAMACIÓN DE INTERFACES WEB ===================
===============================================================
==== PRACTICA DE EVALUACIÓN PARA EL MODULO II. JAVASCRIPT =====
===============================================================
*/
/*
	El alumno deberá realizar el código JS necesario para lo sig.

	01. Que al momento de seleccionar con un click alguno de los 
		elementos del menú con el id: myBtnContainer se muestren
		sólo los elementos que tengan dicha clase relacionada. O
		que se muestren todos los elementos en el caso de que se 
		seleccione la opción 'Mostrar Todos'.(6 puntos)

	02. Al seleccionar alguno de los filtros se le asigne la clase
		'active' en la opción que se haya seleccionado y que por
		congruencia se retire dicha clase del anterior elemento
		que la haya tenido asignada. (4 puntos).
*/


var columnas = document.querySelectorAll('.column');
var carros = document.querySelectorAll('.cars');
var people = document.querySelectorAll('.people');
var naturaleza = document.querySelectorAll('.nature');
var boton1 = document.getElementById('btn1');
var boton2 = document.getElementById('btn2');
var boton3 = document.getElementById('btn3');
var boton4 = document.getElementById('btn4');

for (var i = 0; i <= columnas.length; i++) {
	columnas[i].style.display = 'inline';
}

function filterSelection(parametro) {
	if (parametro == 'ALL') {
		if (boton2.className == 'btn active' || boton3.className == 'btn active' || boton4.className == 'btn active') {
			boton1.className = 'btn active';
			boton3.className = 'btn';
			boton4.className = 'btn';
			boton2.className = 'btn';
		}
		for (var i = 0; i <= columnas.length; i++) {
			columnas[i].style.display = 'inline';
		}
	}

	if (parametro == 'NATURE') {
		if (boton1.className == 'btn active' || boton3.className == 'btn active' || boton4.className == 'btn active') {
			boton1.className = 'btn';
			boton3.className = 'btn';
			boton4.className = 'btn';
			boton2.className = 'btn active';

		}
		for (var i = 0; i <= columnas.length; i++) {

			carros[i].style.display = '';
			people[i].style.display = '';
			columnas[i].style.display = '';
			naturaleza[i].style.display = 'inline';
		}
	}

	if (parametro == 'CARS') {
		if (boton1.className == 'btn active' || boton2.className == 'btn active' || boton4.className == 'btn active') {
			boton1.className = 'btn';
			boton3.className = 'btn active';
			boton4.className = 'btn';
			boton2.className = 'btn';

		}
		for (var i = 0; i <= columnas.length; i++) {
			carros[i].style.display = 'inline';
			people[i].style.display = '';
			naturaleza[i].style.display='';
			columnas[i].style.display = '';
		}
	}

	if (parametro == 'PEOPLE') {
		if (boton1.className == 'btn active' || boton2.className == 'btn active' || boton3.className == 'btn active') {
			boton1.className = 'btn';
			boton3.className = 'btn';
			boton4.className = 'btn active';
			boton2.className = 'btn';

		}
		for (var i = 0; i <= columnas.length; i++) {
			columnas[i].style.display = '';
			carros[i].style.display = '';
			naturaleza[i].style.display='';
			people[i].style.display = 'inline';
		}
	}
}
	