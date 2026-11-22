import { Content } from './content.model';

export const EN: Content = {
  meta: {
    title: 'Abel Almada Meza | IT Technical Support',
    description:
      'Portfolio of Abel Marcial Almada Meza: IT Technical Support and Help Desk Tier 1/2, networking, Active Directory and software development.',
  },
  nav: [
    { id: 'sobre-mi', label: 'About' },
    { id: 'experiencia', label: 'Experience' },
    { id: 'habilidades', label: 'Skills' },
    { id: 'proyectos', label: 'Projects' },
    { id: 'formacion', label: 'Education' },
    { id: 'contacto', label: 'Contact' },
  ],
  ui: {
    skip: 'Skip to content',
    openMenu: 'Open menu',
    toggleTheme: 'Toggle light/dark theme',
    switchLang: 'Cambiar a español',
    backToTop: 'Back to top',
    demo: 'Demo',
    statusWip: 'In progress',
    statusDone: 'Completed',
  },
  hero: {
    availability: 'Available full time · Buenos Aires, Argentina',
    role: 'IT Technical Support | Help Desk Tier 1 / 2',
    lead:
      '5+ years solving connectivity, hardware and software incidents for users over the phone, chat and on site. I also build tools and automations while studying Software Development.',
    downloadCv: 'Download CV',
    contactMe: 'Contact me',
    photoAlt: 'Photo of Abel Almada Meza',
    badges: [
      { icon: 'bi-headset', label: 'Help Desk T1/T2' },
      { icon: 'bi-hdd-network', label: 'TCP/IP Networking' },
      { icon: 'bi-windows', label: 'Active Directory' },
    ],
  },
  about: {
    title: 'About me',
    paragraphs: [
      "I'm a <strong>Computer and Networking Technician</strong> with experience in <strong>Tier 1 and 2 technical support and Help Desk / Service Desk</strong>. I diagnose and resolve incidents, manage tickets through to closure and escalate to Tier 2 and NOC with full documentation of the work done.",
      'I have worked with Windows, Linux, TCP/IP networks, Active Directory and GPOs, and I provide remote support using AnyDesk and TeamViewer. I am also studying <strong>Software Development</strong>, which helps me automate repetitive support tasks and better understand the systems I support.',
    ],
    stats: [
      { value: '5+', label: 'years in IT support' },
      { value: 'T1 / T2', label: 'phone, chat and on site' },
      { value: '3', label: 'support companies' },
      { value: '5', label: 'courses and certifications' },
    ],
  },
  experience: {
    title: 'Experience',
    jobs: [
      {
        company: 'CAT Technologies',
        period: 'Jan 2025 – Present',
        roles: [
          {
            title: 'Tier 1 & 2 Chat Technical Support Agent',
            meta: 'Personal Flow account · Oct 2025 – Present',
            bullets: [
              'Resolve internet, phone and TV incidents via chat with Tier 1 and 2 remote diagnostics.',
              'Escalate complex cases to NOC and specialized teams with complete records of actions taken.',
              'Manage and follow up tickets through to closure; verify services and assist with device configuration.',
            ],
          },
          {
            title: 'Tier 1 Technical Support Agent',
            meta: 'Personal Flow account · Jan 2025 – Oct 2025',
            bullets: [
              'Phone support for residential customers on connectivity (internet, TV, phone).',
              'Diagnosed home network issues: Wi-Fi, LAN, routers and set-top boxes.',
              'Remote troubleshooting, incident logging and escalation to Tier 2 or field technicians.',
            ],
            highlight: 'Promoted to Tier 1 & 2 chat support in October 2025.',
          },
        ],
      },
      {
        company: 'ACC Group',
        period: 'Jul 2023 – Jan 2025',
        roles: [
          {
            title: 'Tier 1 Technical Support Agent',
            meta: 'Telecentro account · Part-time',
            bullets: [
              'Technical support for internet, phone and TV users.',
              'Resolved incidents in the ticketing system, handled escalations and field visits.',
              'Logged, escalated and followed up on critical incidents.',
            ],
          },
        ],
      },
      {
        company: 'Crear Informática',
        period: 'Jun 2021 – Mar 2024',
        roles: [
          {
            title: 'IT Support Technician',
            meta: 'Part-time',
            bullets: [
              'Administered Active Directory, GPOs and security policies.',
              'Remote user support using AnyDesk and TeamViewer.',
              'Installed and configured local and network printers.',
              'Preventive and corrective hardware maintenance and CCTV camera installation.',
            ],
          },
        ],
      },
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        icon: 'bi-headset',
        title: 'Support',
        items: ['Help Desk T1 / T2', 'Ticket management', 'Troubleshooting', 'T2 / NOC escalation', 'Remote support'],
      },
      {
        icon: 'bi-hdd-rack',
        title: 'Systems & networking',
        items: ['Windows', 'Linux', 'Active Directory', 'GPOs', 'TCP/IP · LAN · Wi-Fi', 'Routers & set-top boxes', 'Network printers', 'Hardware · CCTV'],
      },
      {
        icon: 'bi-tools',
        title: 'Tools',
        items: ['Jira', 'AnyDesk', 'TeamViewer', 'Postman', 'Google Cloud (fundamentals)'],
      },
      {
        icon: 'bi-code-slash',
        title: 'Development',
        items: ['Python', 'PowerShell', 'C#', 'SQL Server', 'JavaScript', 'HTML · CSS', 'Node.js · Express', 'MongoDB', 'Angular'],
      },
    ],
  },
  projects: {
    title: 'Projects',
    intro: 'Projects that bridge IT support and development: automations, labs and technical documentation.',
    items: [
      {
        icon: 'bi-terminal',
        title: 'Support automation scripts',
        description:
          'PowerShell scripts for common help desk tasks: creating and disabling Active Directory users, hardware inventory and quick network diagnostics.',
        tags: ['PowerShell', 'Active Directory', 'Automation'],
        status: 'wip',
        repoUrl: 'https://github.com/AbelAlmada92',
        repoLabel: 'Code',
      },
      {
        icon: 'bi-diagram-3',
        title: 'Active Directory lab',
        description:
          'Test domain on Windows Server virtual machines: organizational units, GPOs, users, groups and shared folders, documented step by step.',
        tags: ['Windows Server', 'GPOs', 'Virtualization'],
        status: 'wip',
        repoUrl: 'https://github.com/AbelAlmada92',
        repoLabel: 'Docs',
      },
      {
        icon: 'bi-journal-text',
        title: 'Troubleshooting knowledge base',
        description:
          'Step-by-step guides for common incidents: no internet connection, slow Wi-Fi, network printers and DNS/DHCP issues.',
        tags: ['Networking', 'Documentation', 'Help Desk'],
        status: 'wip',
        repoUrl: 'https://github.com/AbelAlmada92',
        repoLabel: 'View guides',
      },
      {
        icon: 'bi-clipboard-check',
        title: 'API testing with Postman',
        description:
          'Test case collection and bug reports applying the QA Tester course, on a REST API built with Node.js, Express and MongoDB.',
        tags: ['Postman', 'QA', 'Node.js'],
        status: 'wip',
        repoUrl: 'https://github.com/AbelAlmada92',
        repoLabel: 'Code',
      },
    ],
    reposTitle: 'Latest GitHub repositories',
    noDescription: 'No description.',
    updated: 'Updated',
  },
  education: {
    title: 'Education',
    educationTitle: 'Education',
    coursesTitle: 'Courses',
    languagesTitle: 'Languages',
    education: [
      { title: 'Higher Technical Degree in Software Development', detail: 'I.F.T.S. No. 11 · 2022 – Present' },
      { title: 'Computer and Networking Technician', detail: 'E.E.S.T. No. 4 · 2007 – 2009' },
      { title: 'Bachelor of Music', detail: 'National University of La Plata · Enrolled' },
    ],
    courses: [
      { title: 'Google Cloud Engineer', detail: 'Talento Tech · 2025' },
      { title: 'QA Tester', detail: 'Talento Tech · 2025' },
      { title: 'Corporate Networks', detail: 'UTN · 2023' },
      { title: 'Python Workshop', detail: 'UTN · 2023' },
      { title: 'Python', detail: 'Udemy · 2023 – 2024' },
    ],
    languages: [
      { title: 'Spanish', detail: 'Native' },
      { title: 'English', detail: 'Basic (A2)' },
    ],
  },
  contact: {
    title: 'Contact',
    intro: 'Looking for someone for your help desk or support team? Send me a message and I will get back to you soon.',
    location: 'Buenos Aires, Argentina · Available full time',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      required: 'This field is required.',
      invalidEmail: 'Please enter a valid email.',
      fixErrors: 'Please check the highlighted fields.',
      success: 'Thank you! Your message was sent. I will reply soon.',
      error: 'Could not send the message. Email me directly at',
      subject: 'New message from the portfolio',
    },
  },
  footer: { rights: 'All rights reserved.' },
};
