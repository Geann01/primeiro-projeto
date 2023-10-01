 
const botoes = document.querySelectorAll('.botao');

const personagem = document.querySelectorAll(".personagem");


botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        const botaoselecionado = desselecionarBotao();

        botaoselecionado.classList.remove("selecionado");


        botao.classList.add("selecionado");

        desselecionarpersonagem();


        personagem[indice].classList.add("selecionado");



    });

});
function desselecionarpersonagem() {
    const personagemselecionado = document.querySelector(".personagem.selecionado");
    personagemselecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    return document.querySelector(".botao.selecionado");
}

