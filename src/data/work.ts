import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Flutter Developer",
    company: "Kinetic Software",
    region: "Córdoba, Argentina / Remote",
    description:
      "Desarrollo de aplicaciones móviles con Flutter aplicando arquitecturas MVVM, gestión de estado con Provider, integración con APIs REST y Firebase, diseño de interfaces responsivas basadas en Material Design y publicación en Google Play y App Store.",
    technologies: [
      "Flutter",
      "Dart",
      "Provider",
      "Firebase",
      "REST APIs",
      "Material Design",
      "Figma",
      "Git",
    ],
  },
  {
    title: "Odoo Developer",
    company: "Kinetic Software",
    region: "Córdoba, Argentina / Remote",
    description:
      "Personalización y desarrollo de módulos Odoo v18, creación de automatizaciones en Python/XML, modificación de vistas, integraciones con sistemas externos mediante FTP y módulos personalizados, despliegues en Odoo.sh y gestión de datos con PostgreSQL.",
    technologies: [
      "Odoo v18",
      "Python",
      "XML",
      "PostgreSQL",
      "Odoo.sh",
      "Automatizaciones",
      "Git",
    ],
  },
];


export type WorkItem = (typeof work)[number];

