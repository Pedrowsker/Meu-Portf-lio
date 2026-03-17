const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navList.classList.toggle('active');
});


document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navList.classList.remove('active');
    });
});


const textElement = document.getElementById('typewriter');
const phrases = ['Programador.', 'Designer Web.', 'Dev Full Stack.'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100; 
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; 
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; 
    }

    setTimeout(typeWriter, typeSpeed);
}


document.addEventListener('DOMContentLoaded', typeWriter);


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-element');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-element');
hiddenElements.forEach((el) => observer.observe(el));


const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        header.style.backgroundColor = 'rgba(15, 23, 42, 0.9)';
        header.style.boxShadow = 'none';
    }
});

const form = document.querySelector('.contact-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); 
    
    const data = new FormData(form);
    const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
        form.reset(); 
    } else {
        alert('Ops! Ocorreu um erro ao enviar. Tente novamente mais tarde.');
    }
});