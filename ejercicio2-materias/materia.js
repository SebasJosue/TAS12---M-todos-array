'use strict';

//Crear un array de objetos con la informacion de las asignaturas de la carrera de Desarrollo de software.
//Crear una función que reciba como parámetro el array de las asignaturas y un numero que indique el nivel. 
//La función debe retornar solo las asignaturas que pertenecen a ese nivel. 

let students = [
    {
      id: 1,
      subject: 'Matematica computacional',
      type: 'BASICA',
      level: 1.1,
      note: 89,
    },
  
    {
      id: 2,
      subject: 'Metodologias para resolver problemas informaticos',
      type: 'Basica',
      level: 1.1,
      note: 73,
    },
  
    {
  
      id: 3,
      subject: 'Base de datos',
      type: 'Basica',
      level: 1.1,
      note: 90,
  
    },
  
    {
  
      id: 4,
      subject: 'TICS',
      type: 'Basica',
      level: 1.1,
      note: 67,
    },
  
    {
      id: 5,
      subject: 'Programacion de interfases',
      type: 'Basica',
      level: 1.1 ,
      note: 100,
    }
  ];
  
  
  students.forEach(function(student) {
      alert(`Estudiante ${student.id}:`);
      alert(`Materia: ${student.subject}`);
      alert(`Tipo: ${student.type}`);
      alert(`Nivel: ${student.level}`);
      alert(`Nota: ${student.note}`)

      
    });