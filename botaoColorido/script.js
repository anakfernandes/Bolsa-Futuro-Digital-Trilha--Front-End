// A função que vai ser executada quando o botão for clicado
function mudarCor() {
  
  // 1. Encontrar o elemento HTML pelo seu ID
  const caixa = document.getElementById("minhaCaixa");
  
  // 2. Definir uma lista de cores que podem ser usadas
  const cores = ["#ff5733", "#33ff57", "#3357ff", "#f5ff33", "#ff33f5"];
  
  // 3. Escolher uma cor aleatoriamente da lista
  // Math.random() gera um número entre 0 e 1, que é multiplicado pelo número de cores
  const indiceAleatorio = Math.floor(Math.random() * cores.length);
  const novaCor = cores[indiceAleatorio];

  // 4. Alterar a propriedade CSS do elemento, no caso, a cor de fundo
  caixa.style.backgroundColor = novaCor;
}