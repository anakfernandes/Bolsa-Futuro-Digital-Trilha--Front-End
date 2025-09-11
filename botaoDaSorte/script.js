// Array com as três frases da sorte
const frases = [
  "Você teve sorte!" ,
  "Tente novamente!",
  "Acertou em cheio!"
];


const botao = document.getElementById("botao-sorte");
const paragrafo = document.getElementById("frase");


function sortearFrase() {
  const indice = Math.floor(Math.random() * frases.length);
  paragrafo.textContent = frases[indice];
}

botao.addEventListener("click", sortearFrase);
