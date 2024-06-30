'use strict'

//Crear una función que calcule el promedio de un conjunto de calificaciones almacenados en un array. 
//La función debe recibir el array y devolver únicamente la parte entera del promedio.

function calcularPromedio(calificaciones) {
    let suma = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
    let promedio = suma / calificaciones.length;
    return Math.round(promedio);
  }
  
  function obtenerAlumnosNoPasaron(calificaciones) {
    return calificaciones.filter(calificacion => calificacion < 70);
  }
  

  let calificaciones = [89, 73, 90, 67, 100];
  let promedioEntero = calcularPromedio(calificaciones);
  let alumnosNoPasaron = obtenerAlumnosNoPasaron(calificaciones);
  
  alert(`El promedio entero es: ${promedioEntero}`);
  alert(`Alumnos que no pasaron: ${alumnosNoPasaron.join(', ')}`);
  