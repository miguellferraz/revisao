let numeros = [10, 4, 5, 2, 70, 8, 23, 19, 12, 9876]
let maiorQue5 = []

for (i = 0; i < numeros.length; i++) {
    if (numeros[i] > 5) {
        maiorQue5.push(numeros[i])
    }
}
    console.log(maiorQue5)