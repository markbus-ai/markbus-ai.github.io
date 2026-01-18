// Project data
const projects = [
  {
    title: "Notas - Editor de Texto GTK4",
    description: "Editor de texto minimalista escrito en Python usando GTK4 nativo para tomar notas rápidas con características esenciales.",
    details: "Desarrollado como un editor de texto simple para notas, con funcionalidades como búsqueda, corrección ortográfica, vista previa de Markdown, autosave, tema oscuro/claro, y más. Arquitectura modular con integración nativa en Linux.",
    images: ["img/arg1.png"],
    tech: ["Python", "GTK4", "PyGObject"],
    link: "https://github.com/markbus-ai/writearch",
    impact: "Proporciona una herramienta eficiente para tomar notas en entornos Linux nativos",
    challenges: "Integración completa con GTK4 y D-Bus para una experiencia nativa",
    solution: "Uso de GObject signals y arquitectura MVC-like para modularidad"
  },
  {
  title: "Bot de WhatsApp para Bicicletería Amigorena",
  description: "Un bot automatizado de WhatsApp para responder consultas y gestionar la comunicación con clientes",
  details: "Desarrollado a medida para una bicicletería, este bot responde automáticamente a consultas sobre productos, repuestos, taller y horarios. Incluye lógica de respuestas múltiples, mensajes diferenciados según palabras clave, manejo de doble mensaje y envío de audios o imágenes. Está construido sobre mi librería open source WhatsPlay, que automatiza WhatsApp Web con Playwright.",
  images: ["img/wsp1.png"],
  tech: ["Python", "Playwright", "WhatsPlay", "Asyncio"],
  impact: "Mejoró la atención al cliente al reducir tiempos de respuesta y permitió a la bicicletería mantener comunicación constante incluso fuera del horario de atención",
  challenges: "Diseñar un sistema flexible de respuestas que abarque distintos productos, servicios y consultas sin perder naturalidad",
  solution: "Implementación de un bot modular con detección de palabras clave, lógica de flujos de conversación y soporte multimedia"
},

  {
    title: "Sitio Web para Coach Emocional",
    description: "Página profesional para un servicio de coaching ontológico emocional y saludable",
    details: "Desarrollada para una clienta real, esta web presenta sus servicios de acompañamiento emocional, agenda de sesiones, testimonios y contacto directo. El diseño es limpio, accesible desde móviles y optimizado para transmitir confianza. Está alojada en un servidor propio, protegido por Cloudflare, y vinculada con redes sociales y WhatsApp.",
    images: ["img/coach1.png", "img/coach2.png", "img/coach3.png"],
    tech: ["HTML", "CSS", "JavaScript", "Servidor Propio", "Cloudflare"],
    link: "https://coachemocionalmentesaludable.site",
    impact: "Ayudó a profesionalizar la presencia online del servicio de coaching, facilitando la comunicación con clientes potenciales",
    challenges: "Diseñar un sitio profesional, accesible y optimizado para contacto directo en un entorno autogestionado",
    solution: "Desarrollo personalizado, con enfoque en UX/UI, despliegue en servidor propio y uso de Cloudflare para seguridad y rendimiento"
  },
  {
    title: "Sistema de Pedidos de Restaurante",
    description: "Un sistema de gestión de pedidos para restaurantes.",
    details: "Permite a los mozos cargar pedidos desde el celular, conectándose con una app central en PC para visualizar las mesas, el rendimiento en tiempo real y administrar menús y mozos. Ideal para optimizar el trabajo en el salón.",
    images: ["img/comanda1.png", "img/comanda2.png", "img/comanda3.png", "img/comanda4.png"],
    tech: ["Python", "Sqlite", "Pyqt5", "FastApi", "Flutter"],
    impact: "Aumentó la eficiencia en la gestión de pedidos en un 40%",
    challenges: "Implementación de sincronización en tiempo real entre dispositivos móviles y sistema central",
    solution: "Utilización de WebSockets para actualizaciones instantáneas y SQLite para gestión de datos local"
  },
     {
    title: "Salvemos el Envión Puerto - Sitio de Petición",
    description: "Landing page para campaña de firma de petición online para la reapertura del Centro Comunitario Envión Puerto de Mar del Plata.",
    details: "Sitio web desarrollado para concientizar sobre el cierre del centro comunitario desde junio 2025 y recolectar firmas digitales para su reapertura. La página incluye formulario de firma, contador de firmas en tiempo real, información sobre el contexto y llamado a la acción para compartir en redes sociales.",
    images: ["img/envion1.png", "img/envion2.png", "img/envion3.png"],
    tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    link: "https://markbus-ai.github.io/envion/",
    impact: "Plataforma para movilización comunitaria y recolección de firmas para causa social",
    challenges: "Crear una experiencia web emotiva y convincente que motive a los visitantes a firmar y compartir la petición",
    solution: "Diseño limpio y directo al punto, con mensaje claro sobre la problemática, formulario simple de firma y botones de compartir en redes sociales para maximizar el alcance"
    },
  {
    title: "WhatsApp Web Wrapper",
    description: "Una librería open source para automatizar WhatsApp Web usando Playwright",
    details: "Permite iniciar sesión, detectar el estado del QR, acceder a chats y mensajes, y enviar contenido de manera programática. Ideal para bots educativos, automatización o soporte técnico.",
    images: ["img/wsp1.png"],
    tech: ["Python", "Playwright", "Asyncio", "XPath"],
    link: "https://github.com/markbus-ai/whatsplay",
    impact: "Utilizado para crear bots y automatizaciones sobre WhatsApp Web, reduciendo tareas manuales",
    challenges: "Manejo del estado de sesión, detección de QR y control dinámico de elementos UI",
    solution: "Uso avanzado de Playwright y XPath para interactuar con la interfaz de WhatsApp Web"
  },
  {
    title: "OpinionScope",
    description: "Una aplicación web para análisis de sentimientos y procesamiento de opiniones en múltiples fuentes",
    details: "Recopila opiniones de Reddit, Google News y otras fuentes usando NLP para analizar sentimientos. Brinda informes visuales desde una interfaz web.",
    images: ["img/opinion1.png", "img/opinion2.png", "img/opinion3.png"],
    tech: ["Python", "Flask", "NLP", "Web Scraping"],
    link: "https://markbustos.pythonanywhere.com/5d11f6",
    challenges: "Integración de múltiples fuentes de datos y procesamiento de texto en diferentes formatos",
    solution: "Implementación de una arquitectura modular con procesadores específicos para cada fuente de datos"
  },
  {
    title: "ARG - Juego de Investigación Digital",
    description: "Una experiencia interactiva de investigación digital que combina narrativa inmersiva con puzzles técnicos",
    details: "Juego tipo terminal que sigue la historia del Dr. Elian Valtor. El usuario navega archivos, descifra códigos y resuelve acertijos. Modular, retro y educativo.",
    images: ["img/arg1.png", "img/arg2.png"],
    tech: ["Python", "Textual", "Rich", "Asyncio"],
    link: "https://github.com/markbus-ai/ARG",
    impact: "Combina aprendizaje técnico con narrativa inmersiva",
    challenges: "Sistema no lineal con progresión coherente",
    solution: "Arquitectura modular con manejo avanzado de archivos y verificación dinámica de soluciones"
  },
  {
    title: "Chatbot con API de Gemini",
    description: "Un asistente de conversación AI utilizando la API de Gemini para conversaciones naturales.",
    details: "Mantiene conversaciones naturales, crea/ejecuta código y genera gráficos a partir de instrucciones. Ideal como asistente técnico o educativo.",
    images: ["img/gemini2.png", "img/gemini1.png", "img/gemini3.png"],
    tech: ["CustomTkinter", "Python", "Gemini API"],
    link: "https://github.com/markbus-ai/Gemini-desktop",
    impact: "Mejoró la interacción con usuarios en un 30%",
    challenges: "Implementación de gráficos a partir de lenguaje natural",
    solution: "Utilización de Gemini para obtener datos numéricos y visualizarlos con Matplotlib"
  },
  {
    title: "Sitio Web de Bolsa de Trabajo",
    description: "Una plataforma que conecta a los buscadores de empleo con los empleadores para el centro de formación 403",
    details: "Publica perfiles profesionales de alumnos certificados. Incluye búsqueda y filtros personalizados.",
    images: ["img/bolsa1.png", "img/bolsa2.png", "img/bolsa3.png"],
    tech: ["JavaScript", "HTML", "CSS", "Flask", "SQLite"],
    link: "https://bolsa-gokd.onrender.com",
    impact: "Facilitó la conexión entre empleadores y candidatos en un 50%",
    challenges: "Sistema de búsqueda y filtrado eficiente",
    solution: "Algoritmos de búsqueda optimizados y filtros personalizados"
  },
  {
    title: "PIP Manager GUI",
    description: "Interfaz gráfica para gestionar paquetes de Python con pip",
    details: "Permite buscar, instalar, desinstalar y actualizar librerías de forma visual desde una GUI moderna con CustomTkinter.",
    images: ["img/pip1.png", "img/pip2.png", "img/pip3.png"],
    tech: ["Python", "CustomTkinter"],
    link: "https://github.com/markbus-ai/gestor-de-paquetes",
    challenges: "Crear una GUI funcional para una herramienta común de consola",
    solution: "Uso de CustomTkinter para la interfaz"
  },
  {
    title: "Acortador de URLs",
    description: "Un sistema fácil de usar que convierte URLs largas en versiones cortas y compartibles.",
    details: "Genera versiones únicas y seguras de URLs mediante un algoritmo de hash, con redirección automática.",
    images: ["img/url1.png", "img/url2.png"],
    tech: ["Flask", "SQLite", "Python", "Base62"],
    link: "https://xyz-eexc.onrender.com/",
    impact: "Facilitó compartir enlaces largos en plataformas con restricciones de caracteres",
    challenges: "Evitar colisiones y manejar URLs duplicadas",
    solution: "Algoritmo de hash + almacenamiento seguro en SQLite"
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
}

function openProjectModal(project) {
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close">&times;</button>
            <div class="modal-grid">
                <div class="modal-carousel" id="carouselImages">
                    <div class="carousel-container">
                        ${project.images.map((image, index) => `
                            <div class="carousel-slide" style="display: ${index === 0 ? 'block' : 'none'}">
                                <img src="${image}" alt="${project.title} imagen ${index + 1}">
                            </div>
                        `).join('')}
                    </div>
                    <button class="carousel-button prev">&#10094;</button>
                    <button class="carousel-button next">&#10095;</button>
                </div>
                <div class="modal-info">
                    <h2 id="modalTitle">${project.title}</h2>
                    <div id="modalDescription">${project.details}</div>
                    <div id="modalTechTags">
                        ${project.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                    </div>
                    <div class="modal-details">
                        <div id="modalImpact"><strong>Impacto:</strong> ${project.impact || 'N/A'}</div>
                        <div id="modalChallenges"><strong>Desafíos:</strong> ${project.challenges || 'N/A'}</div>
                        <div id="modalSolution"><strong>Solución:</strong> ${project.solution || 'N/A'}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    currentSlide = 0;
    modal.style.display = 'block';
    
    const closeBtn = modal.querySelector('.close');
    const prevBtn = modal.querySelector('.carousel-button.prev');
    const nextBtn = modal.querySelector('.carousel-button.next');
    
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    prevBtn.addEventListener('click', () => navigateCarousel('prev'));
    nextBtn.addEventListener('click', () => navigateCarousel('next'));
}

function navigateCarousel(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const container = document.querySelector('.carousel-container');
    
    if (slides.length === 0) return;
    
    // Actualizar el índice actual
    if (direction === 'next') {
        currentSlide = (currentSlide + 1) % slides.length;
    } else {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
    
    // Ocultar todas las slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    
    // Mostrar solo la slide actual
    slides[currentSlide].style.display = 'block';
}

