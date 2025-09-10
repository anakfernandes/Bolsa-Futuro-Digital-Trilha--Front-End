console.log("Sequência de Fibonacci (15 primeiros números):");

let a = 0, b = 1;

for (let i = 1; i <= 15; i++) {
    console.log(a);
    let proximo = a + b;
    a = b;
    b = proximo;
}
