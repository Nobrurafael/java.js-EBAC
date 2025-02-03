function Calculomdc(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}


// Determinar os numeros a serem divididos 
console.log(Calculomdc(500,100)); 