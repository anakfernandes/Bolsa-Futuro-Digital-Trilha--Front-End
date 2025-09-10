const prompt = require('prompt-sync')();

// Lista de palavras possíveis
const palavras = ["python", "computador", "programacao", "desafio", "algoritmo"];

// Escolhe uma palavra aleatória
const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];

// Cria o array de underlines
let progresso = Array(palavraSecreta.length).fill("_");

// Número de chances
let chances = 5;

// Array para armazenar letras já tentadas
let letrasTentadas = [];

console.log("Bem-vindo ao Jogo da Forca Simplificado!");
console.log("A palavra tem " + palavraSecreta.length + " letras.");

while (chances > 0 && progresso.includes("_")) {
    // Mostra o progresso atual
    console.log("\nPalavra: " + progresso.join(" "));
    console.log("Chances restantes: " + chances);
    console.log("Letras já tentadas: " + letrasTentadas.join(", "));
    
    let letra = prompt("Digite uma letra: ").toLowerCase();

    if (!letra || letra.length !== 1) {
        console.log("Digite apenas uma letra!");
        continue;
    }

    if (letrasTentadas.includes(letra)) {
        console.log("Você já tentou essa letra. Tente outra.");
        continue;
    }

    letrasTentadas.push(letra);

    if (palavraSecreta.includes(letra)) {
        console.log("Letra correta!");
        for (let i = 0; i < palavraSecreta.length; i++) {
            if (palavraSecreta[i] === letra) {
                progresso[i] = letra;
            }
        }
    } else {
        console.log("Letra não encontrada!");
        chances--;
    }
}

// Resultado final
if (!progresso.includes("_")) {
    console.log("\nParabéns! Você acertou a palavra: " + palavraSecreta);
} else {
    console.log("\nSuas chances acabaram! A palavra era: " + palavraSecreta);
}
