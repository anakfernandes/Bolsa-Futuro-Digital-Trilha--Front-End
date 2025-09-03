const prompt = require("prompt-sync")();

let idadePessoa = parseInt(prompt("Digite sua idade:"));

if (idadePessoa >= 0 && idadePessoa <= 12) {
console.log("Criança");
} else if (idadePessoa <= 17) {
console.log("Adolescente");
} else if (idadePessoa <= 59) {
console.log("Adulto");
} else {
console.log("Idoso");
}