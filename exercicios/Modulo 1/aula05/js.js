numeros.reduce(function(total,num) {
    return total * num;
}, 1);


numeros.reduce(=>)




let dobro = numeros.map(function(num) {
    return num * 2;
});
let metade = numeros.map(function(num) {
    return num/2;
});
let raiz = numeros.map(function(num) {
    return Math.sqrt(num);
});




let dobro2 = numeros.map(num => num * 2);
let metade2 = numeros.map(num => nume / 2);
let raiz = numeros.map (num => Math.sqrt(num));
