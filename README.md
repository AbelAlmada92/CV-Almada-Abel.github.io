# Portfolio · Abel Marcial Almada Meza

Portfolio personal orientado a **Soporte Técnico IT / Mesa de Ayuda N1–N2**, con una sección de proyectos que lo une con el desarrollo de software. Disponible en **español e inglés**, con tema claro/oscuro.

Hecho con **Angular 22** (componentes standalone + signals) y **Bootstrap 5.3** + **Bootstrap Icons**.

## Requisitos

- [Node.js](https://nodejs.org/) 22 o 24 (incluye npm)

## Verlo en tu computadora

```bash
npm install
npm start
```

Abrí <http://localhost:4200>. Los cambios que hagas en el código se ven al instante.

## Estructura

```
src/
  index.html                  HTML base, meta tags y tema inicial
  styles.scss                 Bootstrap personalizado (colores, tarjetas, timeline…)
  app/
    app.ts                    Arma la página con todas las secciones
    i18n/
      profile.ts              Datos fijos: mail, LinkedIn, GitHub, rutas de foto y CV
      content.es.ts           TODOS los textos en español
      content.en.ts           TODOS los textos en inglés
      content.model.ts        Estructura que deben respetar ambos idiomas
    core/
      language.service.ts     Idioma activo (ES/EN), título y meta tags
      theme.service.ts        Tema claro/oscuro (data-bs-theme de Bootstrap)
      github.service.ts       Últimos repos públicos de GitHub
    sections/                 Un componente por sección (navbar, hero, about, …)
    shared/reveal.directive.ts  Animación de aparición al hacer scroll
public/assets/                Foto, favicon y CV en PDF
```

## Cómo editar el contenido

- **Textos:** se editan en `src/app/i18n/content.es.ts` y `content.en.ts`. Si agregás un campo en uno, TypeScript te avisa si falta en el otro.
- **Proyectos:** en `projects.items` de ambos archivos. Cuando termines uno, poné `status: 'done'`, el `repoUrl` real y, si existe, `demoUrl`. Si un proyecto no lo vas a hacer, borralo de los dos idiomas.
- **Idioma por link:** `https://tu-sitio/?lang=en` abre directo en inglés (útil para postulaciones en inglés). Si no, se usa el idioma del navegador o el último elegido.
- **CV:** reemplazá `public/assets/cv/Abel-Almada-Meza-CV.pdf`. Si armás uno en inglés, guardalo en la misma carpeta y cambiá `cv.en` en `profile.ts`.
- **Colores:** variables al inicio de `src/styles.scss` (`$primary`, etc.).

## Publicarlo en internet

Primero compilá para producción (opcional, para probar):

```bash
npm run build
```

El sitio listo para subir queda en `dist/portfolio/browser/`.

### Opción 1 · GitHub Pages (gratis, automático)
Ya está incluido el workflow `.github/workflows/deploy-pages.yml`.
1. Subí el proyecto a GitHub (rama `main`).
2. En el repositorio: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada `git push` a `main` compila y publica solo. La URL aparece en la pestaña **Actions**:
   - repo `AbelAlmada92.github.io` → `https://abelalmada92.github.io/`
   - cualquier otro nombre → `https://abelalmada92.github.io/<nombre-del-repo>/`

### Opción 2 · Netlify (gratis)
*Add new site → Import an existing project*, elegí el repositorio. La configuración ya está en `netlify.toml`.

### Opción 3 · Vercel (gratis)
*Add New → Project*, elegí el repositorio. Vercel detecta Angular solo; si pide la carpeta de salida, usá `dist/portfolio/browser`.

### Dominio propio (opcional)
Los tres permiten conectar un dominio (por ejemplo `abelalmada.com.ar`, de NIC Argentina) desde su panel.

## Después de publicar

- [ ] **Activar el formulario:** enviá un mensaje de prueba desde la web publicada. FormSubmit manda un mail de activación a tu casilla; confirmalo una vez y desde ahí llegan los mensajes.
- [ ] En `src/index.html`, usar URLs absolutas en `og:image` y agregar `og:url` (para que se vea la foto al compartir el link).
- [ ] Agregar el link del portfolio en LinkedIn y en el encabezado del CV.
