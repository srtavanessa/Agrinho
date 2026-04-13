// Função para alternar modo escuro
const darkBtn = document.getElementById('toggleDark');
darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Saudação personalizada
const welcomeBtn = document.getElementById('welcomeBtn');
const welcomeMsg = document.getElementById('welcomeMsg');
welcomeBtn.addEventListener('click', () => {
    let userName = prompt("Digite seu nome:");
    if(userName) {
        welcomeMsg.textContent = `Olá, ${userName}! Bem-vindo ao Agro Forte.`;
    } else {
        welcomeMsg.textContent = "Olá! Bem-vindo ao Agro Forte.";
    }
});

// Controle de tamanho de fonte
const increaseFont = document.getElementById('increaseFont');
const decreaseFont = document.getElementById('decreaseFont');
increaseFont.addEventListener('click', () => {
    document.body.style.fontSize = "larger";
});
decreaseFont.addEventListener('click', () => {
    document.body.style.fontSize = "smaller";
});

// Envio de formulário com DOM
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
