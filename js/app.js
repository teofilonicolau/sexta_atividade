// Aguarda até que todo o DOM esteja carregado para executar o código
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa um carrossel/slider usando a biblioteca Swiper
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal', // Define a direção do carrossel como horizontal
        loop: false, // Define que o carrossel não faz looping (não retorna ao início automaticamente)

        // Configura o componente de paginação (bolinhas de navegação)
        pagination: {
            el: '.swiper-pagination' // Define o seletor para o elemento de paginação
        },

        // Configura os botões de navegação (próximo e anterior)
        navigation: {
            nextEl: '.swiper-button-next', // Botão para avançar no carrossel
            prevEl: '.swiper-button-prev' // Botão para voltar no carrossel
        }
    });

    // Adiciona um ouvinte de eventos para detectar teclas pressionadas no teclado
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            // Se a tecla 'Seta para a Esquerda' for pressionada, move para o slide anterior
            swiper.slidePrev();
        } else if (event.key === 'ArrowRight') {
            // Se a tecla 'Seta para a Direita' for pressionada, move para o próximo slide
            swiper.slideNext();
        }
    });
});

// Obtendo os elementos do menu hambúrguer e da barra lateral (sidebar)
const mobileMenu = document.querySelector('.mobile-menu'); // Seleciona o ícone do menu hambúrguer
const sidebar = document.querySelector('.sidebar'); // Seleciona a barra lateral

// Adiciona um ouvinte de evento ao menu hambúrguer para detectar cliques
mobileMenu.addEventListener('click', () => {
    // Alterna (ativa/desativa) a classe 'active' na sidebar
    sidebar.classList.toggle('active');
    // Alterna a classe 'active' no ícone do menu hambúrguer para ativar a animação
    mobileMenu.classList.toggle('active');
});
