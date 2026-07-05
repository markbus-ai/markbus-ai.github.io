// Project Data
const projects = [
  {
    title: "AppiarWeb / Beemore",
    description: "Plataforma integral de gestión apícola en producción. React + TypeScript + Firebase.",
    details: "Sistema completo para la administración de apiarios, tambores, producción de miel y relevamientos técnicos. Incluye dashboard con métricas en tiempo real, mapas interactivos con Leaflet, gestión de usuarios con roles, i18n completo y un sistema de semáforo para estado sanitario de colmenas. Backend en Firebase con sincronización offline-first.",
    images: ["img/beemore_frontend_demo.mp4"],
    tech: ["React 19", "TypeScript", "Firebase", "MUI", "TanStack Query", "Leaflet", "Recharts", "Vite"],
    link: "",
    impact: "Sistema en producción para Beemore, apícola argentina, con cobertura de gestión técnica y administrativa.",
    challenges: "Sincronización offline-first en zonas rurales sin conectividad estable, y modelado de datos apícolas con semáforo sanitario y esquema de relevamientos complejo.",
    solution: "Firebase con persistencia local, optimistic updates con TanStack Query, y arquitectura de features modular con tipos estrictos en TypeScript."
  },
  {
    title: "BlackFire E-Commerce",
    description: "Plataforma e-commerce completa con backend en Django y frontend moderno en React.",
    details: "Sistema comercial integral con gestión de cuentas de usuario, carrito de compras persistente, procesamiento de pedidos, catálogo jerárquico de categorías y productos, y panel de administración dinámico. Empaquetado y orquestado completamente con Docker y Docker Compose.",
    images: ["img/blackfire.jpg"],
    tech: ["Python", "Django", "React", "Docker", "PostgreSQL"],
    link: "https://blackfire.com.ar/",
    impact: "Sitio web de e-commerce en producción con diseño y experiencia de usuario optimizados para conversión.",
    challenges: "Sincronización de estados del carrito entre React y la API de Django, y orquestación del entorno de desarrollo y producción mediante contenedores.",
    solution: "Endpoints REST robustos con autenticación JWT, contenedores Docker optimizados para backend/frontend y comunicación por sockets locales."
  },
  {
    title: "MozoPlus",
    description: "Sistema de gestión de pedidos en tiempo real (FastAPI + WebSockets + PostgreSQL).",
    details: "Sincronización instantánea de comandas entre mozos y cocina. Backend asíncrono altamente escalable diseñado para soportar picos de alta demanda en redes locales.",
    images: ["img/comanda1.png", "img/comanda2.png"],
    tech: ["FastAPI", "WebSockets", "PostgreSQL", "Flutter"],
    link: "",
    impact: "Sincronización instantánea de comandas sin retraso percibido.",
    challenges: "Latencia cero y reconexión automática en redes locales inestables.",
    solution: "Arquitectura asíncrona robusta apoyada en WebSockets y manejadores de conexiones persistentes."
  },
  {
    title: "whatsapp-bot",
    description: "Bot automatizado de WhatsApp para gestión comercial de clientes. +5000 mensajes procesados.",
    details: "Desarrollado para Bicicletería Amigorena. Procesa solicitudes de clientes 24/7 con detección de intenciones, cola de mensajes inteligentes y soporte para fallos de conexión.",
    images: ["img/wsp1.png"],
    tech: ["Python", "Playwright", "Asyncio"],
    link: "", // Private
    impact: "Automatizó el 99.5% de las consultas de clientes con un 94.7% de efectividad.",
    challenges: "Mantenimiento y persistencia de sesiones web en entornos headless frente a desconexiones.",
    solution: "Estrategias de persistencia de sesión local y re-conexión automática con lógica exponencial de reintentos."
  },
  {
    title: "whatsplay",
    description: "Librería Open Source para automatizar WhatsApp Web via Playwright.",
    details: "API wrapper modular para login, envío de mensajes, detección de estados de entrega e interacciones del chat sin requerir la API oficial.",
    images: ["img/wsp1.png"],
    tech: ["Python", "Playwright", "XPath"],
    link: "https://github.com/markbus-ai/whatsplay",
    impact: "Facilita la automatización y creación de agentes/bots para integradores independientes.",
    challenges: "Selectores dinámicos y updates constantes en el DOM de WhatsApp Web.",
    solution: "Selectores XPath robustos e independientes del árbol DOM primario combinados con esperas inteligentes."
  },
  {
    title: "mutils",
    description: "Colección modular de micro-utilidades CLI en C para optimizar flujos de trabajo en Linux.",
    details: "Reemplaza comandos complejos de shell con binarios nativos rápidos. Incluye extracción de texto con OCR en Wayland, gestión de umbrales de carga de batería, finalizador automático de procesos por puerto (port slayer), limpieza recursiva de basura de desarrollo (nuke), verificador de variables de entorno (.env) y Smart Extract (x) multiformato.",
    images: ["img/mutils.jpg"],
    tech: ["C", "Tesseract OCR", "Linux CLI", "libcurl", "libarchive"],
    link: "https://github.com/markbus-ai/mutils",
    impact: "Automatiza y acelera tareas comunes de desarrollo y administración de sistemas en Linux con binarios de alto rendimiento.",
    challenges: "Integración de librerías nativas como Tesseract OCR y libarchive en C, control estricto de buffers y llamadas a APIs de bajo nivel.",
    solution: "Arquitectura modular separando comandos en archivos individuales, orquestados bajo un makefile común y un despachador en main.c."
  },
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
        
        function isVideo(src) {
            return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov');
        }

        if (project.images && project.images.length > 0) {
            if (hasMultipleImages) {
                // Carousel Structure
                const slidesHtml = project.images.map((img, i) => `
                    <div class="carousel-slide ${i === 0 ? 'active' : ''}" data-index="${i}">
                                ${isVideo(img)
                                    ? `<video src="${img}" muted autoplay loop playsinline style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'"></video>`
                                    : `<img src="${img}" alt="${project.title} - screenshot ${i + 1}" loading="lazy" decoding="async" onerror="this.src=''; this.style.display='none'">`
                                }
                            </div>
                `).join('');

                imageHtml = `
                    <div class="project-card-image carousel-container clickable-image" id="carousel-${index}" data-project-index="${index}">
                        <div class="carousel-track">
                            ${slidesHtml}
                        </div>
                        <button class="card-carousel-btn card-prev" onclick="prevSlide(event, ${index})" onkeydown="if(event.key==='Enter'||event.key===' ')prevSlide(event,${index})" aria-label="Anterior imagen">&#10094;</button>
                        <button class="card-carousel-btn card-next" onclick="nextSlide(event, ${index})" onkeydown="if(event.key==='Enter'||event.key===' ')nextSlide(event,${index})" aria-label="Siguiente imagen">&#10095;</button>
                    </div>
                `;
            } else {
                // Single Image / Video
                const src = project.images[0];
                const mediaHtml = isVideo(src)
                    ? `<video src="${src}" muted autoplay loop playsinline style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'"></video>`
                    : `<img src="${src}" alt="${project.title}" loading="lazy" decoding="async" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">`;

                imageHtml = `
                    <div class="project-card-image clickable-image" data-project-index="${index}">
                        ${mediaHtml}
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
let lastFocusedElement = null;

function setupModals() {

    // Project Modal
    closeProjectBtn.addEventListener('click', () => {
        projectModal.style.display = 'none';
        projectModal.classList.remove('active');
        if (lastFocusedElement) lastFocusedElement.focus();
    });

    // Help Modal
    closeHelpBtn.addEventListener('click', () => {
        helpModal.style.display = 'none';
        if (lastFocusedElement) lastFocusedElement.focus();
    });

    // Close on outside click
    window.addEventListener('click', (event) => {
        if (event.target === projectModal) {
            projectModal.style.display = 'none';
            projectModal.classList.remove('active');
            if (lastFocusedElement) lastFocusedElement.focus();
        }
        if (event.target === helpModal) {
            helpModal.style.display = 'none';
            if (lastFocusedElement) lastFocusedElement.focus();
        }
    });

    // Close on Escape
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (projectModal.style.display === 'flex') {
                projectModal.style.display = 'none';
                projectModal.classList.remove('active');
                if (lastFocusedElement) lastFocusedElement.focus();
            }
            if (helpModal.style.display === 'flex') {
                helpModal.style.display = 'none';
                if (lastFocusedElement) lastFocusedElement.focus();
            }
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
    
    function isVideo(src) {
        return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov');
    }

    if (project.images && project.images.length > 0) {
        if (project.images.length > 1) {
            // Multiple images - create carousel
            const carouselHtml = `
                <div class="modal-carousel">
                    <div class="modal-carousel-main">
                        ${project.images.map((img, i) => `
                            <div class="modal-slide ${i === 0 ? 'active' : ''}" data-slide="${i}">
                                ${isVideo(img)
                                    ? `<video src="${img}" controls muted autoplay loop playsinline style="max-width:100%;max-height:500px;border-radius:4px;" onerror="this.style.display='none'"></video>`
                                    : `<img src="${img}" alt="${project.title} - screenshot ${i + 1}" loading="lazy" decoding="async" onerror="this.style.display='none'">`
                                }
                            </div>
                        `).join('')}
                        <button class="modal-carousel-btn modal-prev" onclick="changeModalSlide(-1)" onkeydown="if(event.key==='Enter'||event.key===' ')changeModalSlide(-1)" aria-label="Anterior imagen">&#10094;</button>
                        <button class="modal-carousel-btn modal-next" onclick="changeModalSlide(1)" onkeydown="if(event.key==='Enter'||event.key===' ')changeModalSlide(1)" aria-label="Siguiente imagen">&#10095;</button>
                    </div>
                    <div class="modal-thumbnails">
                        ${project.images.map((img, i) => `
                            ${isVideo(img)
                                ? `<div class="modal-thumb video-thumb" data-thumb="${i}" onclick="goToModalSlide(${i})" style="width:60px;height:40px;background:#1a1a2e;display:flex;align-items:center;justify-content:center;cursor:pointer;border:2px solid transparent;border-radius:4px;font-size:1.2rem;">▶</div>`
                                : `<img src="${img}" 
                                     class="modal-thumb ${i === 0 ? 'active' : ''}" 
                                     data-thumb="${i}"
                                     onclick="goToModalSlide(${i})"
                                     alt="Thumbnail ${i + 1}"
                                     onerror="this.style.display='none'">`
                            }
                        `).join('')}
                    </div>
                </div>
            `;
            modalImages.innerHTML = carouselHtml;
        } else {
            // Single image / video - display centered
            const src = project.images[0];
            if (isVideo(src)) {
                const video = document.createElement('video');
                video.src = src;
                video.controls = true;
                video.muted = true;
                video.autoplay = true;
                video.loop = true;
                video.playsInline = true;
                video.className = 'modal-single-image';
                video.style.maxHeight = '500px';
                modalImages.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.src = src;
                img.className = 'modal-single-image';
                img.alt = project.title;
                img.loading = 'lazy';
                img.decoding = 'async';
                img.onerror = function() { this.style.display = 'none'; };
                modalImages.appendChild(img);
            }
        }
    }

    // Save last focused element before opening
    if (document.activeElement && document.activeElement !== document.body) {
        lastFocusedElement = document.activeElement;
    }

    projectModal.style.display = 'flex';

    // Focus management: move focus to modal close button
    requestAnimationFrame(() => {
        const closeBtn = document.getElementById('closeProjectModal');
        if (closeBtn) closeBtn.focus();
    });
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
    if (document.activeElement && document.activeElement !== document.body) {
        lastFocusedElement = document.activeElement;
    }
    helpModal.style.display = 'flex';
    requestAnimationFrame(() => {
        const closeBtn = document.getElementById('closeHelpModal');
        if (closeBtn) closeBtn.focus();
    });
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
