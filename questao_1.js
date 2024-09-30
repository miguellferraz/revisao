let inteiros = [3, 15, 6, 10, 19, 20, 27]
let multiplos = []

for (i = 0; i < inteiros.length; i++) {
    if (inteiros[i] % 3 === 0) {
        multiplos.push(inteiros[i])
    } 
}
    console.log(multiplos)