const numerosString = prompt("Ingrese una lista de números separados por coma:");


const numeros = numerosString.split(",").map(numero => Number(numero.trim()));


const numerosMenorAMayor = numeros.slice().sort((a, b) => a - b);


const numerosMayorAMenor = numeros.slice().sort((a, b) => b - a);

console.log(`Números ingresados: ${numeros}`);
console.log(`Números ordenados de menor a mayor: ${numerosMenorAMayor}`);
console.log(`Números ordenados de mayor a menor: ${numerosMayorAMenor}`);