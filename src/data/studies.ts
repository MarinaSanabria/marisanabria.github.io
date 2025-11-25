export const studies = [
  {
    title: "Certified Tech Developer",
    institution: "Digital House",
    description:
      "Formación orientada al desarrollo de software, incluyendo fundamentos de programación, estructura de datos, bases de datos, prácticas ágiles y desarrollo web.",
    tags: [
      "Programación",
      "Bases de Datos",
      "Estructuras de Datos",
      "Metodologías Ágiles",
      "Desarrollo Web",
    ],
  },
  {
    title: "Metodologías Ágiles de Gestión",
    institution: "Universidad Tecnológica Nacional (UTN)",
    description:
      "Capacitación en prácticas ágiles para trabajo en equipo, planificación, mejora continua y colaboración en entornos de desarrollo.",
    tags: ["Scrum", "Kanban", "Trabajo en Equipo", "Planificación Ágil"],
  },
  {
    title: "Licenciatura en Relaciones Internacionales",
    institution: "Universidad Siglo 21",
    description:
      "Formación universitaria que fortaleció habilidades analíticas, comunicación efectiva, pensamiento crítico y trabajo interdisciplinario.",
    tags: ["Comunicación", "Análisis", "Investigación", "Trabajo Interdisciplinario"],
  },
];


export type StudyItem = (typeof studies)[number];

