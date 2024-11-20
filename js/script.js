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

/*
class MobileNavBar {
    constructor(mobileMenu, sidebar) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.sidebar = document.querySelector(sidebar);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.sidebar.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(".mobile-menu", ".sidebar");
mobileNavBar.init();
*/
