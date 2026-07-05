#import "@preview/silver-dev-cv:1.0.2": *

#show: cv.with(
  font-type: "PT Serif",
  continue-header: "false",
  name: "Marcos Bustos",
  address: "Mar del Plata, Buenos Aires, Argentina",
  lastupdated: "false",
  pagecount: "false",
  contacts: (
    (text: "LinkedIn", link: "https://www.linkedin.com/in/marcos-bustos-7327962ab/"),
    (text: "GitHub", link: "https://github.com/markbus-ai"),
    (text: "marcosbustos.dev@gmail.com", link: "mailto:marcosbustos.dev@gmail.com"),
  ),
)

#section[Objetivo Profesional]
#descript[
Desarrollador Backend especializado en Python (FastAPI/Flask) y arquitecturas asincrónicas. Orientado al diseño de APIs escalables, optimización de consultas en bases de datos relacionales (PostgreSQL) y despliegue en entornos Linux. Busco integrarme a un equipo de producto para aportar en la construcción de servicios robustos, limpios y de alta disponibilidad.
]

#sectionsep

#section("Experiencia")

#job(
  position: "Desarrollador Backend & Full Stack | Consultor Freelance",
  institution: [Múltiples Clientes y Agencias],
  location: "Remoto / Mar del Plata, ARG",
  date: "2024 - Actualidad",
  description: [
    - *Beemore (Appi.ar):* Desarrollo full-stack de AppiarWeb, plataforma de gestión apícola en producción con React 19, TypeScript, Firebase (Auth, Firestore, Storage, Functions) y MUI. Integración con Cloudinary para gestión multimedia, refactorización de código legacy, optimización de performance y hardening de seguridad. Arquitectura offline-first para zonas sin conectividad estable. Desarrollo mobile con Flutter.
    - *Sistema MozoPlus:* Creación de backend escalable con FastAPI y sincronización en tiempo real mediante WebSockets y PostgreSQL para entorno de alta demanda.
    - *Bicicletería Amigorena:* Desarrollo de aplicación asincrónica en Python que procesó +5,000 mensajes mensuales (94.7% de éxito) e integración de lógica de negocio (atención 24/7).
    - *Cliente Internacional (EE.UU.):* Desarrollo de web scrapers asincrónicos para extraer datos de +39 productos en 6 plataformas distintas, generando reportes automatizados.
    - *Coaching Emocional:* Diseño de landing page y configuración de infraestructura en VPS Linux, reverse proxy y Cloudflare.
  ],
)

#sectionsep

#section("Proyectos Open Source")

#job(
  position: "Creador de Librería WhatsPlay",
  institution: [#link("https://github.com/markbus-ai/WhatsPlay")[GitHub / Proyecto Personal]],
  location: "Remoto",
  date: "2025",
  description: [
    - Librería propia para automatización de WhatsApp Web basada en Playwright y Python.
    - Manejo asincrónico y persistencia de sesión 24/7 en servidores Linux.
    - Sistema dinámico basado en XPath, resiliente a cambios de UI.
  ],
)

#sectionsep

#section("Habilidades")

#oneline-title-item(
  title: "Core Backend",
  content: [Python (Asyncio), FastAPI, Flask, PostgreSQL, SQL, Bash],
)

#oneline-title-item(
  title: "Frontend & Mobile",
  content: [TypeScript, React 19, Firebase, MUI, Flutter, JavaScript],
)

#oneline-title-item(
  title: "Automatización & Herramientas",
  content: [Playwright, WhatsPlay, WebSockets, Git, Docker],
)

#oneline-title-item(
  title: "Infraestructura",
  content: [Linux (SysAdmin), Cloudflare, VPS, Nginx],
)

#oneline-title-item(
  title: "Idiomas",
  content: [Español (Nativo), Inglés: Técnico (Lectura y Documentación)],
)

#sectionsep

#section("Educación")

#education(
  institution: [ISFT 204],
  major: [Tecnicatura en Desarrollo de Software],
  date: [2024 -- En curso],
  location: "Argentina",
)

#education(
  institution: [CFP 403],
  major: [Especializaciones: Base de Datos, Programador Backend y Testing],
  date: [2023 -- 2026],
  location: "Argentina",
)

#set document(author: "Marcos Bustos", title: "CV Marcos Bustos 2026")
