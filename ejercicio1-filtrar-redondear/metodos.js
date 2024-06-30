'use strict';

//Crear una función que filtre los valores mayores a 10.00 y redondearlos a 2 decimales como string. Retornando un array
//nums = [13.676767, 3.123432, 5.34543543, 10.3452345] 

function filtraYredondear (nums){

    let filtrarValores = nums.filter(num => num > 10.00);

    let valoresRedondeados = filtrarValores.map(num => num.toFixed(2));

    return valoresRedondeados;


}


let nums = [13.676767, 3.123432, 5.34543543, 10.3452345];

let resultado = filtraYredondear(nums);

alert (resultado);