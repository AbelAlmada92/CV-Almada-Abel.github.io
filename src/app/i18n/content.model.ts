/** Idiomas disponibles en el portfolio. */
export type Lang = 'es' | 'en';

export interface NavItem {
  id: string;
  label: string;
}

export interface Role {
  title: string;
  /** Cuenta, modalidad y período del puesto. */
  meta: string;
  bullets: string[];
  /** Logro destacado (opcional), se muestra resaltado. */
  highlight?: string;
}

export interface Job {
  company: string;
  period: string;
  roles: Role[];
}

export interface SkillGroup {
  icon: string;
  title: string;
  items: string[];
}

export type ProjectStatus = 'wip' | 'done';

export interface Project {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  status: ProjectStatus;
  repoUrl: string;
  repoLabel: string;
  /** Link a la demo publicada (opcional). */
  demoUrl?: string;
}

export interface EduItem {
  title: string;
  detail: string;
}

export interface Content {
  meta: { title: string; description: string };
  nav: NavItem[];
  ui: {
    skip: string;
    openMenu: string;
    toggleTheme: string;
    switchLang: string;
    backToTop: string;
    demo: string;
    statusWip: string;
    statusDone: string;
  };
  hero: {
    availability: string;
    role: string;
    lead: string;
    downloadCv: string;
    contactMe: string;
    photoAlt: string;
    badges: { icon: string; label: string }[];
  };
  about: {
    title: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  experience: { title: string; jobs: Job[] };
  skills: { title: string; groups: SkillGroup[] };
  projects: {
    title: string;
    intro: string;
    items: Project[];
    reposTitle: string;
    noDescription: string;
    updated: string;
  };
  education: {
    title: string;
    educationTitle: string;
    coursesTitle: string;
    languagesTitle: string;
    education: EduItem[];
    courses: EduItem[];
    languages: EduItem[];
  };
  contact: {
    title: string;
    intro: string;
    location: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      required: string;
      invalidEmail: string;
      fixErrors: string;
      success: string;
      error: string;
      subject: string;
    };
  };
  footer: { rights: string };
}
