// Project data
const projects = [
    {
        title: "Sistema de Pedidos de Restaurante",
        description: "Un sistema de gestión de pedidos para restaurantes.",
        details: "El Sistema de Pedidos de Restaurante donde los mozos con su propio celular pueden logearse y cargar los datos de cada mesa que abran, siendo comunicados esos datos a un programa de pc central que recibe los pedidos y brinda una vista de cada mesa y resumen de cada mozo viendo el rendimiento en tiempo real además de una gestión de menú y mozos completa.",
        images: [
            "img/comanda1.png",
            "img/comanda2.png",
            "img/comanda3.png",
            "img/comanda4.png"
        ],
        tech: ["Python", "Sqlite", "Pyqt5", "FastApi", "Flutter"],
        impact: "Aumentó la eficiencia en la gestión de pedidos en un 40%",
        challenges: "Implementación de sincronización en tiempo real entre dispositivos móviles y sistema central",
        solution: "Utilización de WebSockets para actualizaciones instantáneas y SQLite para gestión de datos local"
    },
    {
        title: "Chatbot con API de Gemini",
        description: "Un asistente de conversación AI utilizando la API de Gemini para conversaciones naturales.",
        details: "El Chatbot con API de Gemini es un asistente de conversación AI avanzado que puede mantener conversaciones en lenguaje natural, crear y ejecutar código y crear gráficos entre otras cosas. Utiliza la API de Gemini para entender y responder a preguntas, proporcionar información y ayudar con tareas variadas.",
        images: [
            "img/gemini1.png",
            "img/gemini2.png",
            "img/gemini3.png"
        ],
        tech: ["CustomTkinter", "Python", "Gemini API"],
        link: "https://github.com/markbus-ai/Gemini-desktop"
    },
    {
        title: "Sitio Web de Bolsa de Trabajo",
        description: "Una plataforma que conecta a los buscadores de empleo con los empleadores para el centro de formación 403",
        details: "El Sitio Web de Bolsa de Trabajo es una plataforma integral donde se publican los perfiles profesionales de los alumnos certificados por el centro de formación 403",
        images: [
            "img/bolsa1.png",
            "img/bolsa2.png",
            "img/bolsa3.png"
        ],
        tech: ["JavaScript","Html","Css","Flask","SQlite"],
        link: "http://bolsa.onrender.com/"
    }
];

// DOM Elements
const projectGrid = document.getElementById('projectGrid');
const modal = document.getElementById('myModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTechTags = document.getElementById('modalTechTags');
const carouselImages = document.getElementById('carouselImages');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.carousel-button.prev');
const nextBtn = document.querySelector('.carousel-button.next');
let currentSlide = 0;

// Definición del observer
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Lógica para manejar la animación
            entry.target.classList.add('visible');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
    
    // Observar elementos para animaciones
    document.querySelectorAll('.achievement-card, .timeline-item, .skill-progress').forEach(el => {
        animationObserver.observe(el);
    });

    // Manejar el menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
// Crear project cards una sola vez
function createProjectCards() {
    projectGrid.innerHTML = ''; // Limpiar el contenedor primero
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <img src="${project.images[0]}" alt="${project.title}" loading="lazy">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-tags">
                    ${project.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-buttons">
                    <button class="view-details" data-index="${index}">Ver detalles</button>
                    ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link">Ver proyecto</a>` : ''}
                </div>
            </div>
        `;
        projectGrid.appendChild(projectCard);
        animationObserver.observe(projectCard);
    });

    // Agregar event listeners a los botones después de crearlos
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            const project = projects[this.getAttribute('data-index')];
            openProjectModal(project);
        });
    });
    // Agregar event listeners a los botones después de crearlos
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function() {
            const project = projects[this.getAttribute('data-index')];
            openProjectModal(project);
        });
    });
}
