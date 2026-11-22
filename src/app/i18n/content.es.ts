import { Content } from './content.model';

export const ES: Content = {
  meta: {
    title: 'Abel Almada Meza | Soporte Técnico IT',
    description:
      'Portfolio de Abel Marcial Almada Meza: Soporte Técnico IT y Mesa de Ayuda N1/N2, redes, Active Directory y desarrollo de software.',
  },
  nav: [
    { id: 'sobre-mi', label: 'Sobre mí' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'formacion', label: 'Formación' },
    { id: 'contacto', label: 'Contacto' },
  ],
  ui: {
    skip: 'Saltar al contenido',
    openMenu: 'Abrir menú',
    toggleTheme: 'Cambiar tema claro/oscuro',
    switchLang: 'Switch to English',
    backToTop: 'Volver arriba',
    demo: 'Demo',
    statusWip: 'En desarrollo',
    statusDone: 'Terminado',
  },
  hero: {
    availability: 'Disponible full time · Berazategui, Buenos Aires',
    role: 'Soporte Técnico IT | Mesa de Ayuda N1 / N2',
    lead:
      'Más de 5 años resolviendo incidentes de conectividad, hardware y software para usuarios por teléfono, chat y en sitio. Ahora también construyo herramientas y automatizaciones mientras curso la Tecnicatura en Desarrollo de Software.',
    downloadCv: 'Descargar CV',
    contactMe: 'Contactarme',
    photoAlt: 'Foto de Abel Almada Meza',
    badges: [
      { icon: 'bi-headset', label: 'Help Desk N1/N2' },
      { icon: 'bi-hdd-network', label: 'Redes TCP/IP' },
      { icon: 'bi-windows', label: 'Active Directory' },
    ],
  },
  about: {
    title: 'Sobre mí',
    paragraphs: [
      'Soy <strong>Técnico en Informática y Redes</strong> con experiencia en <strong>soporte técnico y mesa de ayuda (Help Desk / Service Desk) Nivel 1 y 2</strong>. Diagnostico y resuelvo incidentes, gestiono tickets hasta su cierre y escalo a Nivel 2 y NOC con el registro completo de lo realizado.',
      'Trabajé con Windows, Linux, redes TCP/IP, Active Directory y GPOs, y doy soporte remoto con AnyDesk y TeamViewer. En paralelo estudio <strong>Desarrollo de Software</strong>, lo que me permite automatizar tareas repetitivas de soporte y entender mejor los sistemas que atiendo.',
    ],
    stats: [
      { value: '5+', label: 'años en soporte IT' },
      { value: 'N1 / N2', label: 'teléfono, chat y en sitio' },
      { value: '3', label: 'empresas de soporte' },
      { value: '5', label: 'cursos y certificaciones' },
    ],
  },
  experience: {
    title: 'Experiencia',
    jobs: [
      {
        company: 'CAT Technologies',
        period: 'Ene 2025 – Actualidad',
        roles: [
          {
            title: 'Operador de Soporte Técnico por Chat Nivel 1 y 2',
            meta: 'Cuenta Personal Flow · Oct 2025 – Actualidad',
            bullets: [
              'Resuelvo incidencias de internet, telefonía y TV por chat con diagnóstico remoto N1 y N2.',
              'Escalo casos complejos a NOC y sectores especializados con el registro completo de lo realizado.',
              'Gestiono y doy seguimiento a tickets hasta su cierre; verifico servicios y asisto en la configuración de equipos.',
            ],
          },
          {
            title: 'Operador de Soporte Técnico Nivel 1',
            meta: 'Cuenta Personal Flow · Ene 2025 – Oct 2025',
            bullets: [
              'Soporte telefónico de conectividad (internet, TV, telefonía) a clientes residenciales.',
              'Diagnóstico de fallas en redes domésticas: Wi-Fi, LAN, routers y decodificadores.',
              'Troubleshooting remoto, registro de incidentes y derivación a Nivel 2 o visita técnica.',
            ],
            highlight: 'Promovido a soporte por chat Nivel 1 y 2 en octubre de 2025.',
          },
        ],
      },
      {
        company: 'ACC Group',
        period: 'Jul 2023 – Ene 2025',
        roles: [
          {
            title: 'Operador de Soporte Técnico Nivel 1',
            meta: 'Cuenta Telecentro · Part-time',
            bullets: [
              'Soporte técnico a usuarios de internet, telefonía y TV.',
              'Resolución de incidentes en el sistema de tickets, escalamientos y visitas técnicas.',
              'Registro, escalamiento y seguimiento de incidentes críticos.',
            ],
          },
        ],
      },
      {
        company: 'Crear Informática',
        period: 'Jun 2021 – Mar 2024',
        roles: [
          {
            title: 'Técnico de Soporte IT',
            meta: 'Part-time',
            bullets: [
              'Administración de Active Directory, GPOs y políticas de seguridad.',
              'Soporte remoto a usuarios mediante AnyDesk y TeamViewer.',
              'Instalación y configuración de impresoras locales y en red.',
              'Mantenimiento preventivo y correctivo de equipos e instalación de cámaras CCTV.',
            ],
          },
        ],
      },
    ],
  },
  skills: {
    title: 'Habilidades',
    groups: [
      {
        icon: 'bi-headset',
        title: 'Soporte',
        items: ['Mesa de ayuda N1 / N2', 'Gestión de tickets', 'Troubleshooting', 'Escalamiento N2 / NOC', 'Soporte remoto'],
      },
      {
        icon: 'bi-hdd-rack',
        title: 'Sistemas y redes',
        items: ['Windows', 'Linux', 'Active Directory', 'GPOs', 'TCP/IP · LAN · Wi-Fi', 'Routers y decodificadores', 'Impresoras en red', 'Hardware · CCTV'],
      },
      {
        icon: 'bi-tools',
        title: 'Herramientas',
        items: ['Jira', 'AnyDesk', 'TeamViewer', 'Postman', 'Google Cloud (fundamentos)'],
      },
      {
        icon: 'bi-code-slash',
        title: 'Desarrollo',
        items: ['Python', 'PowerShell', 'C#', 'SQL Server', 'JavaScript', 'HTML · CSS', 'Node.js · Express', 'MongoDB', 'Angular'],
      },
    ],
  },
  projects: {
    title: 'Proyectos',
    intro: 'Proyectos que unen el soporte IT con el desarrollo: automatizaciones, laboratorios y documentación técnica.',
    // Cuando termines un proyecto: status 'done' y repoUrl al repositorio real.
    items: [
      {
        icon: 'bi-terminal',
        title: 'Scripts de automatización para soporte',
        description:
          'Scripts de PowerShell para tareas frecuentes de mesa de ayuda: alta y baja de usuarios en Active Directory, inventario de equipos y diagnóstico rápido de red.',
        tags: ['PowerShell', 'Active Directory', 'Automatización'],
        status: 'wip',
        repoUrl: 'https://github.com/AbelAlmada92',
        repoLabel: 'Código',
      },
      {
        icon: 'bi-diagram-3',
        title: 'Laboratorio de Active Directory',
        description:
          'Dominio de prueba en máquinas virtuales con Windows Server: unidades organizativas, GPOs, usuarios, grupos y carpetas compartidas, documentado paso a paso.',
        tags: ['Windows Server', 'GPOs', 'Virtualización'],
        status: 'wip',
        repoUrl: 'https://github.com/AbelAlmada92',
        repoLabel: 'Documentación',
      },
      {
        icon: 'bi-journal-text',
        title: 'Base de conocimiento de troubleshooting',
        description:
          'Guías de resolución para incidentes comunes: sin conexión a internet, Wi-Fi lento, impresoras en red y problemas de DNS/DHCP, con diagnóstico paso a paso.',
        tags: ['Redes', 'Documentación', 'Help Desk'],
        status: 'wip',
        repoUrl: 'https://github.com/AbelAlmada92',
        repoLabel: 'Ver guías',
      },
      {
        icon: 'bi-clipboard-check',
        title: 'Pruebas de API con Postman',
        description:
          'Colección de casos de prueba y reportes de bugs aplicando lo aprendido en el curso Tester QA, sobre una API REST con Node.js, Express y MongoDB.',
        tags: ['Postman', 'QA', 'Node.js'],
        status: 'wip',
        repoUrl: 'https://github.com/AbelAlmada92',
        repoLabel: 'Código',
      },
    ],
    reposTitle: 'Últimos repositorios en GitHub',
    noDescription: 'Sin descripción.',
    updated: 'Actualizado',
  },
  education: {
    title: 'Formación',
    educationTitle: 'Educación',
    coursesTitle: 'Cursos',
    languagesTitle: 'Idiomas',
    education: [
      { title: 'Tecnicatura Superior en Desarrollo de Software', detail: 'I.F.T.S. N.º 11 · 2022 – Actualidad' },
      { title: 'Técnico en Informática y Redes', detail: 'E.E.S.T. N.º 4 · 2007 – 2009' },
      { title: 'Licenciatura en Música', detail: 'Universidad Nacional de La Plata · Alumno regular' },
    ],
    courses: [
      { title: 'Google Cloud Engineer', detail: 'Talento Tech · 2025' },
      { title: 'Tester QA', detail: 'Talento Tech · 2025' },
      { title: 'Redes Corporativas', detail: 'UTN · 2023' },
      { title: 'Taller de Python', detail: 'UTN · 2023' },
      { title: 'Python', detail: 'Udemy · 2023 – 2024' },
    ],
    languages: [
      { title: 'Español', detail: 'Nativo' },
      { title: 'Inglés', detail: 'Básico (A2)' },
    ],
  },
  contact: {
    title: 'Contacto',
    intro: '¿Buscás a alguien para tu mesa de ayuda o equipo de soporte? Escribime y te respondo a la brevedad.',
    location: 'Berazategui, Buenos Aires · Disponibilidad full time',
    form: {
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando…',
      required: 'Este campo es obligatorio.',
      invalidEmail: 'Ingresá un email válido.',
      fixErrors: 'Revisá los campos marcados.',
      success: '¡Gracias! Tu mensaje fue enviado. Te respondo a la brevedad.',
      error: 'No se pudo enviar. Escribime directamente a',
      subject: 'Nuevo mensaje desde el portfolio',
    },
  },
  footer: { rights: 'Todos los derechos reservados.' },
};
