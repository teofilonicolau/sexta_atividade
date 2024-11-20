function validateEmail() {
    // Obtém o valor do campo de entrada com o ID 'emailInput'
    const email = document.getElementById('emailInput').value;

    // Expressão regular para validar endereços de e-mail no formato correto
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se o valor do e-mail não corresponde à expressão regular
    if (!emailRegex.test(email)) {
        // Exibe um alerta caso o e-mail seja inválido e interrompe a execução
        alert("Please enter a valid email address.");
        return;
    }

    // Simula o envio do e-mail para uma API mock (falsa)
    fetch('https://jsonplaceholder.typicode.com/posts', { // URL da API falsa
        method: 'POST', // Método HTTP para envio de dados
        body: JSON.stringify({ // Corpo da requisição convertido para JSON
            email: email // Envia o e-mail digitado
        }),
        headers: {
            // Define o tipo de conteúdo da requisição como JSON
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json()) // Converte a resposta da API para JSON
    .then(data => {
        // Exibe uma mensagem de sucesso e imprime os dados retornados no console
        alert("Email validation successful!");
        console.log(data);
    })
    .catch(error => 
        // Trata e exibe erros que possam ocorrer na comunicação com a API
        console.error('Error:', error)
    );
}
