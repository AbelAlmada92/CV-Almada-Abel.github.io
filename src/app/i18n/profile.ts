/**
 * Datos personales que no cambian con el idioma.
 * Editá acá links, mail y archivos.
 */
export const PROFILE = {
  name: 'Abel Marcial Almada Meza',
  shortName: 'Abel Almada',
  email: 'abel.almada.1992@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abel-marcial-almada-meza-4b5274202/',
  linkedinLabel: 'linkedin.com/in/abel-marcial-almada-meza',
  github: 'https://github.com/AbelAlmada92',
  githubUser: 'AbelAlmada92',
  photo: 'assets/img/abel-almada.jpg',
  /** CV por idioma. Si tenés una versión en inglés, cambiá la ruta de `en`. */
  cv: {
    es: 'assets/cv/Abel-Almada-Meza-CV.pdf',
    en: 'assets/cv/Abel-Almada-Meza-CV.pdf',
  },
  /** Cantidad de repos de GitHub a mostrar automáticamente. */
  maxRepos: 6,
  /**
   * Servicio que reenvía el formulario a tu mail (https://formsubmit.co).
   * El primer envío llega como mail de activación: confirmalo una sola vez.
   */
  formEndpoint: 'https://formsubmit.co/ajax/abel.almada.1992@gmail.com',
} as const;
