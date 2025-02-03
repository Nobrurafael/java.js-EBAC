const Numeros = [50, 40, 30, 20, 10, 45, 35, 97];

const indiceMaior = Numeros.reduce((maxIndex, num, i, arr) => num > arr[maxIndex] ? i : maxIndex, 0);
const indiceMenor = Numeros.reduce((minIndex, num, i, arr) => num < arr[minIndex] ? i : minIndex, 0);

console.log("Índice do maior valor:", indiceMaior);
console.log("Índice do menor valor:", indiceMenor);