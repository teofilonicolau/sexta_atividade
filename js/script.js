// Seleciona todos os botões de compra com a classe 'square-button'
const buyButtons = document.querySelectorAll(".square-button");

// Seleciona os elementos do modal
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const closeModalButton = document.querySelector("#close-modal");

// Função para abrir e fechar o modal
const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

// Adiciona o evento de clique para todos os botões de compra
buyButtons.forEach((button) => {
    button.addEventListener("click", () => toggleModal());
});

// Adiciona o evento de clique para fechar o modal
closeModalButton.addEventListener("click", () => toggleModal());

// Fecha o modal quando clicar fora dele
fade.addEventListener("click", () => toggleModal());
