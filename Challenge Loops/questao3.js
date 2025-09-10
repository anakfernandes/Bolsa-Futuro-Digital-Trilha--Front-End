const prompt = require('prompt-sync')();

let altura = parseInt(prompt("Digite a altura da pirâmide: "));

for (let i = 1; i <= altura; i++) {
    let linha = "";
    for (let j = 1; j <= i; j++) {
        linha += "* ";
    }
    console.log(linha);
}
