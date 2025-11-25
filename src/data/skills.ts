export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h10V4H7z"/></svg>`,
    title: "Desarrollo Mobile con Flutter",
    description: "Construcción de aplicaciones móviles escalables con Flutter y Dart; arquitecturas MVVM, manejo de estado con Provider, componentes personalizados, responsive UI y publicación en Google Play y App Store.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 17l-5-5 5-5v3l-2 2 2 2v3zm8-10l5 5-5 5v-3l2-2-2-2V7z"/></svg>`,
    title: "Integración de APIs & Backend Services",
    description: "Consumo e integración de APIs REST, autenticación, manejo de errores, persistencia local, y comunicación con servicios externos; experiencia en integración con Firebase Authentication, Firestore y Storage.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm7.4 3a6.6 6.6 0 0 0-.5-1.6l2-1.5-2-3.5-2.3 1a7 7 0 0 0-2-1.1L14 2h-4l-.6 2.3a7 7 0 0 0-2 1.1l-2.3-1-2 3.5 2 1.5a7 7 0 0 0-.5 1.6L2 12v4l2.6.6a6.6 6.6 0 0 0 .5 1.6L3 19.7l2 3.5 2.3-1a7 7 0 0 0 2 1.1L10 26h4l.6-2.3a7 7 0 0 0 2-1.1l2.3 1 2-3.5-2-1.5a6.6 6.6 0 0 0 .5-1.6L22 16v-4l-2.6-.6z"/></svg>`,
    title: "Desarrollo y Personalización en Odoo",
    description: "Personalización de módulos Odoo v18 en Python/XML; automatizaciones, vistas personalizadas, workflows, integraciones externas (FTP, módulos propios), y despliegues/configuraciones en Odoo.sh.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3v18h18V3H3zm2 2h14v14H5V5zm3 3l9 9H8V8z"/></svg>`,
    title: "Arquitectura & Buenas Prácticas",
    description: "Aplicación de principios SOLID, Clean Architecture, separación por capas, diseño modular, reutilización de componentes y enfoque en mantenibilidad y escalabilidad del código.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C7 3 4 4.79 4 7v10c0 2.21 3 4 8 4s8-1.79 8-4V7c0-2.21-3-4-8-4zm0 2c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2zm0 6c3.87 0 6 .93 6 2s-2.13 2-6 2-6-.93-6-2 2.13-2 6-2z"/></svg>`,
    title: "Bases de Datos & Gestión de Datos",
    description: "Diseño y consulta en PostgreSQL; integración de datos entre sistemas; uso de Firebase Realtime Database / Firestore; análisis y manejo eficiente de estructuras y sincronización de datos.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a3 3 0 110 6 3 3 0 010-6zm0 6v6m0 0a3 3 0 100 6 3 3 0 000-6zm0 0a3 3 0 10-6 0 3 3 0 006 0zm6 0a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    title: "Metodologías Ágiles & Trabajo Colaborativo",
    description: "Experiencia trabajando con Scrum y Kanban, participación en ceremonias ágiles, trabajo con equipos multidisciplinarios y enfoque en la entrega continua de valor al usuario.",
  },
];

export type Skill = (typeof skills)[number];

