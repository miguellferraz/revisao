let inteiros = [10, 30, 40, 2, 5, 70, 50, 25, 15, 35]
let soma = 0

for (i = 0; i < inteiros.length; i++) {
    if (i % 2 === 0) {
        soma += inteiros[i]
    }
}
    console.log(soma)