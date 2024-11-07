function validateEmail() {
    const email = document.getElementById('emailInput').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Simulação de chamada para uma API mock
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            email: email
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => {
        alert("Email validation successful!");
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
}