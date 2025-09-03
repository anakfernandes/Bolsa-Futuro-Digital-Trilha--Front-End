const prompt = require("prompt-sync")();

let saque = parseInt(prompt("Digite o valor do saque (múltiplo de 10):"));
let notas100 = Math.floor(saque / 100);
saque %= 100;
let notas50 = Math.floor(saque / 50);
saque %= 50;
let notas20 = Math.floor(saque / 20);
saque %= 20;
let notas10 = Math.floor(saque / 10);
console.log("Notas entregues:");

if (notas100 > 0) console.log(notas100 + " nota(s) de R$100");
if (notas50 > 0) console.log(notas50 + " nota(s) de R$50");
if (notas20 > 0) console.log(notas20 + " nota(s) de R$20");
if (notas10 > 0) console.log(notas10 + " nota(s) de R$10");