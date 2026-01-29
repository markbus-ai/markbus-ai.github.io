// Project Data
const projects = [
  {
    title: "qrgen",
    description: "Generador de códigos QR instantáneo y personalizable para URLs, Wi-Fi, vCards y más, con backend en Python.",
    details: "La aplicación permite generar diversos tipos de códigos QR (URLs, Wi-Fi, vCards, SMS, Email). Ofrece personalización total de colores, incrustación de logos con protección de lectura y generación de imágenes PNG de alta calidad.",
    images: ["img/qrgen1.png", "img/qrgen2.png", "img/qrgen3.png"],
    tech: ["React", "Vite", "FastAPI", "Python", "AlwaysData", "Mantine"],
    link: "https://markbus-ai.github.io/qrgen",
    impact: "Generación segura y estandarizada de QR con personalización avanzada.",
    challenges: "Integración de logotipos sin invalidar el código y estandarización de vCards/Wi-Fi.",
    solution: "Uso de Pillow para redimensionamiento inteligente (25%) y segno.helpers para cumplir estándares MECARD/WIFI."
  },
  {
    title: "writearch",
    description: "Editor de texto minimalista con GTK4. Funcionalidades: auto-guardado, corrección ortográfica, dark mode.",
    details: "Arquitectura modular con integración nativa en Linux. Ideal para tomar notas rápidas sin distracciones.",
    images: ["img/write.png", "img/write2.png"],
    tech: ["Python", "GTK4", "PyGObject"],
    link: "https://github.com/markbus-ai/writearch",
    impact: "Eficiencia en entornos Linux nativos.",
    challenges: "Integración con D-Bus y señales GObject.",
    solution: "MVC-like pattern y GObject signals."
  },
  {
    title: "whatsapp-bot",
    description: "Bot automatizado de WhatsApp para gestión de clientes. +5000 mensajes procesados.",
    details: "Desarrollado para Bicicletería Amigorena. Procesó +5,000 mensajes con un 94.7% de éxito. Detección de intenciones y respuestas 24/7.",
    images: ["img/wsp1.png"],
    tech: ["Python", "Playwright", "Asyncio"],
    link: "", // Private
    impact: "Automatizó el 99.5% de las consultas.",
    challenges: "Mantener sesión persistente y manejar desconexiones.",
    solution: "Lógica de re-conexión automática y colas de mensajes."
  },
  {
      title: "coach-web",
      description: "Sitio web profesional para coaching emocional. Deploy en VPS Linux + Cloudflare.",
      details: "Landing page enfocada en conversión UX/UI. Despliegue en VPS Linux con reverse proxy y seguridad Cloudflare.",
      images: ["img/coach1.png", "img/coach2.png"],
      tech: ["HTML/CSS", "JS", "Linux VPS", "Cloudflare"],
      link: "https://coachemocionalmentesaludable.site",
      impact: "Presencia digital profesional y segura.",
      challenges: "Configuración de servidor y seguridad.",
      solution: "Nginx reverse proxy + Cloudflare WAF."
  },
  {
    title: "MozoPlus",
    description: "Sistema de gestión de pedidos (MozoPlus). WebSockets + PostgreSQL.",
    details: "Sincronización en tiempo real entre mozos y cocina. Backend escalable con FastAPI para alta demanda.",
    images: ["img/comanda1.png", "img/comanda2.png"],
    tech: ["FastAPI", "WebSockets", "PostgreSQL", "Flutter"],
    link: "",
    impact: "Sincronización instantánea de comandas.",
    challenges: "Latencia cero en redes locales.",
    solution: "Arquitectura asíncrona con WebSockets."
  },
  {
      title: "envion-web",
      description: "Landing page para recolección de firmas digitales (causa social).",
      details: "Contador en tiempo real, formulario simple y alto impacto visual.",
      images: ["img/envion1.png"],
      tech: ["HTML5", "GitHub Pages"],
      link: "https://markbus-ai.github.io/envion/",
      impact: "Movilización comunitaria digital.",
      challenges: "Maximizar conversión de firmas.",
      solution: "UX directo y performance ultra-rápida."
  },
  {
    title: "whatsplay",
    description: "Librería Open Source para automatizar WhatsApp Web via Playwright.",
    details: "API wrapper para login, envío de mensajes y detección de estados.",
    images: ["img/wsp1.png"],
    tech: ["Python", "Playwright", "XPath"],
    link: "https://github.com/markbus-ai/whatsplay",
    impact: "Facilita la creación de bots sin API oficial.",
    challenges: "Selectores dinámicos de WhatsApp Web.",
    solution: "Estrategias de localización robustas (XPath/CSS)."
  },
  {
    title: "opinionscope",
    description: "Análisis de sentimientos en noticias y redes sociales con NLP.",
    details: "Scraping de múltiples fuentes + procesamiento de lenguaje natural.",
    images: ["img/opinion1.png"],
    tech: ["Flask", "NLP", "Scraping"],
    link: "https://markbustos.pythonanywhere.com/5d11f6",
    impact: "Insights visuales sobre opinión pública.",
    challenges: "Normalización de data no estructurada.",
    solution: "Pipelines de procesamiento modulares."
  },
  {
    title: "arg-terminal",
    description: "Juego de investigación tipo ARG basado en terminal linux.",
    details: "Narrativa inmersiva, puzzles de criptografía y exploración de archivos.",
    images: ["img/arg1.png"],
    tech: ["Python", "Textual", "Rich"],
    link: "https://github.com/markbus-ai/ARG",
    impact: "Experiencia educativa gamificada.",
    challenges: "Diseño de narrativa no lineal.",
    solution: "Máquina de estados para la historia."
  },
  {
      title: "gemini-chat",
      description: "Cliente de chat de escritorio potenciado por Google Gemini API.",
      details: "Generación de código, gráficos y asistencia técnica en local.",
      images: ["img/gemini1.png"],
      tech: ["CustomTkinter", "Gemini API"],
      link: "https://github.com/markbus-ai/Gemini-desktop",
      impact: "Asistente AI integrado en workflow.",
      challenges: "Manejo de streaming responses.",
      solution: "Threading y actualizaciones de GUI asíncronas."
  },
    {
      title: "job-board",
      description: "Plataforma de conexión laboral para estudiantes certificados.",
      details: "Perfiles, búsqueda filtrada y contacto directo empleador-alumno.",
      images: ["img/bolsa1.png"],
      tech: ["Flask", "SQLite", "Jinja2"],
      link: "https://ideal-wren-codigodelmar-95f874b6.koyeb.app/",
      impact: "Inserción laboral facilitada.",
      challenges: "Filtrado eficiente de perfiles.",
      solution: "Queries SQL dinámicas y optimizadas."
    },
    {
      title: "pip-gui",
      description: "Interfaz gráfica moderna para gestión de paquetes Python (pip).",
      details: "Instalar, actualizar y eliminar librerías sin tocar la terminal.",
      images: ["img/pip1.png"],
      tech: ["Python", "CustomTkinter"],
      link: "https://github.com/markbus-ai/gestor-de-paquetes",
      impact: "Accesibilidad para nuevos devs Python.",
      challenges: "Wrapper de comandos de sistema en tiempo real.",
      solution: "Subprocess con captura de output en vivo."
    },
    {
      title: "url-shortener",
      description: "Servicio de acortamiento de URLs con analíticas básicas.",
      details: "Generación de alias únicos y redirección rápida.",
      images: ["img/url1.png"],
      tech: ["Flask", "Base62"],
      link: "https://markbustos.pythonanywhere.com/",
      impact: "Links compartibles y tracking.",
      challenges: "Colisiones de hash.",
      solution: "Algoritmo Base62 incremental."
    }
];

// DOM Elements
const projectGrid = document.getElementById('projectGrid');
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('section');

// Modal Elements
const projectModal = document.getElementById('projectModal');
const closeProjectBtn = document.getElementById('closeProjectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTags = document.getElementById('modalTags');
const modalChallenge = document.getElementById('modalChallenge');
const modalSolution = document.getElementById('modalSolution');
const modalImages = document.getElementById('modalImages');

// Help Modal Elements
const helpModal = document.getElementById('helpModal');
const closeHelpBtn = document.getElementById('closeHelpModal');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    setupNavigation();
    setupModals();
    
    // Set Home as active default
    setActiveSection('home');
});

// Navigation Logic
function setupNavigation() {
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            setActiveSection(targetId);
        });
    });
}

function setActiveSection(targetId) {
    // Update Buttons
    navButtons.forEach(btn => {
        if(btn.getAttribute('data-target') === targetId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update Sections with fake delay for "loading" effect
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(targetId);
    if(targetSection) {
        // Small timeout to simulate terminal output delay? Optional but cool.
        setTimeout(() => {
            targetSection.classList.add('active');
        }, 50);
    }
}

// Render Projects
function renderProjects() {
    projectGrid.innerHTML = '';
    
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Generate Tech Tags HTML
        const techHtml = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
        
        // Image Area Logic
        let imageHtml = '';
        const hasMultipleImages = project.images && project.images.length > 1;
        
        if (project.images && project.images.length > 0) {
            if (hasMultipleImages) {
                // Carousel Structure
                const slidesHtml = project.images.map((img, i) => `
                    <div class="carousel-slide ${i === 0 ? 'active' : ''}" data-index="${i}">
                        <img src="${img}" alt="${project.title} ${i + 1}" onerror="this.src=''; this.style.display='none'">
                    </div>
                `).join('');

                imageHtml = `
                    <div class="project-card-image carousel-container clickable-image" id="carousel-${index}" data-project-index="${index}">
                        <div class="carousel-track">
                            ${slidesHtml}
                        </div>
                        <button class="card-carousel-btn card-prev" onclick="prevSlide(event, ${index})">&#10094;</button>
                        <button class="card-carousel-btn card-next" onclick="nextSlide(event, ${index})">&#10095;</button>
                    </div>
                `;
            } else {
                // Single Image
                imageHtml = `
                    <div class="project-card-image clickable-image" data-project-index="${index}">
                        <img src="${project.images[0]}" alt="${project.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div class="placeholder-ascii" style="display:none; text-align:center;">
                            <pre style="font-size: 0.5rem; line-height: 0.8;">
   +---------+
   |  ERROR  |
   |   404   |
   +---------+
                            </pre>
                        </div>
                    </div>
                `;
            }
        } else {
             // Fallback ASCII
             imageHtml = `
                <div class="project-card-image clickable-image" data-project-index="${index}">
                    <div class="placeholder-ascii">
                        <pre style="font-size: 0.5rem; line-height: 0.8;">
   +---------+
   | CACHED  |
   |   IMG   |
   +---------+
                        </pre>
                    </div>
                </div>
            `;
        }

        card.innerHTML = `
            ${imageHtml}
            <div class="project-content-inner">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                </div>
                
                <div class="project-tech">
                    ${techHtml}
                </div>
                
                <p class="project-description">${project.description}</p>
                
                ${project.impact ? `<div class="project-impact">> ${project.impact}</div>` : ''}

                <div class="project-actions">
                    <button class="btn-action btn-primary view-details-btn" data-index="${index}">
                        View Details
                    </button>
                    ${project.link 
                        ? `<a href="${project.link}" target="_blank" class="btn-action btn-secondary">Repo <span style="font-size: 0.7em">↗</span></a>` 
                        : `<button class="btn-action btn-secondary" disabled style="opacity:0.5; cursor:not-allowed;">Private</button>`
                    }
                </div>
            </div>
        `;
        
        projectGrid.appendChild(card);
    });

    // Attach click listeners to details buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            openModal(projects[index]);
        });
    });

    // Attach click listeners to images
    document.querySelectorAll('.clickable-image').forEach(imgContainer => {
        imgContainer.addEventListener('click', (e) => {
            // Don't trigger if clicking carousel buttons
            if (e.target.closest('.card-carousel-btn')) {
                return;
            }
            const index = imgContainer.getAttribute('data-project-index');
            openModal(projects[index]);
        });
    });
}

// Card Carousel Functions
window.prevSlide = function(event, projectIndex) {
    event.stopPropagation(); // Prevent opening modal if clicking arrows (though arrows are separate, good practice)
    changeCardSlide(projectIndex, -1);
};

window.nextSlide = function(event, projectIndex) {
    event.stopPropagation();
    changeCardSlide(projectIndex, 1);
};

function changeCardSlide(projectIndex, direction) {
    const container = document.getElementById(`carousel-${projectIndex}`);
    if (!container) return;

    const slides = container.querySelectorAll('.carousel-slide');
    let activeIndex = 0;

    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            activeIndex = index;
            slide.classList.remove('active');
        }
    });

    let newIndex = activeIndex + direction;
    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;

    slides[newIndex].classList.add('active');
}

// Modal Logic
function setupModals() {
    // Project Modal
    closeProjectBtn.addEventListener('click', () => {
        projectModal.style.display = 'none';
        projectModal.classList.remove('active');
    });

    // Help Modal
    closeHelpBtn.addEventListener('click', () => {
        helpModal.style.display = 'none';
    });

    // Close on outside click
    window.addEventListener('click', (event) => {
        if (event.target === projectModal) {
            projectModal.style.display = 'none';
        }
        if (event.target === helpModal) {
            helpModal.style.display = 'none';
        }
    });

    // Close on Escape
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            projectModal.style.display = 'none';
            helpModal.style.display = 'none';
        }
    });
}

function openModal(project) {
    modalTitle.innerText = `./${project.title}`;
    modalDescription.innerText = project.details;
    modalChallenge.innerText = project.challenges;
    modalSolution.innerText = project.solution;
    
    // Tags
    modalTags.innerHTML = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    
    // Images - Create a carousel if multiple images
    modalImages.innerHTML = '';
    
    if (project.images && project.images.length > 0) {
        if (project.images.length > 1) {
            // Multiple images - create carousel
            const carouselHtml = `
                <div class="modal-carousel">
                    <div class="modal-carousel-main">
                        ${project.images.map((img, i) => `
                            <div class="modal-slide ${i === 0 ? 'active' : ''}" data-slide="${i}">
                                <img src="${img}" alt="${project.title} ${i + 1}" onerror="this.style.display='none'">
                            </div>
                        `).join('')}
                        <button class="modal-carousel-btn modal-prev" onclick="changeModalSlide(-1)">&#10094;</button>
                        <button class="modal-carousel-btn modal-next" onclick="changeModalSlide(1)">&#10095;</button>
                    </div>
                    <div class="modal-thumbnails">
                        ${project.images.map((img, i) => `
                            <img src="${img}" 
                                 class="modal-thumb ${i === 0 ? 'active' : ''}" 
                                 data-thumb="${i}"
                                 onclick="goToModalSlide(${i})"
                                 alt="Thumbnail ${i + 1}"
                                 onerror="this.style.display='none'">
                        `).join('')}
                    </div>
                </div>
            `;
            modalImages.innerHTML = carouselHtml;
        } else {
            // Single image - display centered
            const img = document.createElement('img');
            img.src = project.images[0];
            img.className = 'modal-single-image';
            img.onerror = function() { this.style.display = 'none'; };
            modalImages.appendChild(img);
        }
    }

    projectModal.style.display = 'flex';
}

// Modal Carousel Functions
let currentModalSlide = 0;

window.changeModalSlide = function(direction) {
    const slides = document.querySelectorAll('.modal-slide');
    const thumbs = document.querySelectorAll('.modal-thumb');
    
    if (slides.length === 0) return;
    
    slides[currentModalSlide].classList.remove('active');
    thumbs[currentModalSlide].classList.remove('active');
    
    currentModalSlide += direction;
    if (currentModalSlide < 0) currentModalSlide = slides.length - 1;
    if (currentModalSlide >= slides.length) currentModalSlide = 0;
    
    slides[currentModalSlide].classList.add('active');
    thumbs[currentModalSlide].classList.add('active');
};

window.goToModalSlide = function(index) {
    const slides = document.querySelectorAll('.modal-slide');
    const thumbs = document.querySelectorAll('.modal-thumb');
    
    if (slides.length === 0) return;
    
    slides[currentModalSlide].classList.remove('active');
    thumbs[currentModalSlide].classList.remove('active');
    
    currentModalSlide = index;
    
    slides[currentModalSlide].classList.add('active');
    thumbs[currentModalSlide].classList.add('active');
};

function openHelpModal() {
    helpModal.style.display = 'flex';
}


// Input Logic
const commandInput = document.getElementById('commandInput');

commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = commandInput.value.trim().toLowerCase();
        handleCommand(cmd);
        commandInput.value = '';
    }
});

// Always focus input when clicking terminal body
document.querySelector('.terminal-body').addEventListener('click', (e) => {
    // Don't steal focus if selecting text or clicking buttons/links/modals
    if(e.target.closest('.modal') || e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || window.getSelection().toString().length > 0) {
        return;
    }
    commandInput.focus();
});

function handleCommand(cmd) {
    if (!cmd) return;

    // Help command
    if (cmd === 'help' || cmd === '?') {
        openHelpModal();
        return;
    }
    
    // ... (rest of commands same)

    if (cmd === 'clear') {
        // Just scrolls to top or sets home? simpler to just set home
        setActiveSection('home');
        return;
    }
    
    if (cmd === 'whoami') {
        setActiveSection('home');
        return;
    }

    // Projects
    if (cmd.includes('projects') || cmd === 'ls') {
        setActiveSection('projects');
        return;
    }

    // About
    if (cmd.includes('about')) {
        setActiveSection('about_me');
        return;
    }

    // Experience
    if (cmd.includes('experience')) {
        setActiveSection('experience');
        return;
    }

    // Contact
    if (cmd.includes('contact')) {
        setActiveSection('contact');
        return;
    }

    // Default: try finding a section that matches
    // Only if simple single word
    const match = Array.from(sections).some(sec => sec.id === cmd);
    if(match) {
        setActiveSection(cmd);
    } else {
        // Visual feedback for error?
        // Using placeholder temporarily
        const originalPlaceholder = commandInput.placeholder;
        commandInput.placeholder = `command not found: ${cmd}`;
        setTimeout(() => commandInput.placeholder = '', 2000);
    }
}
