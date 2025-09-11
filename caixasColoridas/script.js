
const cores = [
    "#FF5733", "#33FF57", "#3357FF", "#F0E68C", "#9932CC",
    "#20B2AA", "#FFD700", "#FF4500", "#4682B4", "#8A2BE2"
];


const container = document.getElementById("container-caixas");

for (let i = 0; i < 10; i++) {
    const novaCaixa = document.createElement("div");
    novaCaixa.classList.add("caixa");
    novaCaixa.style.backgroundColor = cores[i];
    container.appendChild(novaCaixa);
}