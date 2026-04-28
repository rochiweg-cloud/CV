# CV Web — Rocío Wegman

CV personal en formato web, bilingüe (ES/EN), con sección de proyectos.

## Cómo editarlo

**Toda la información del CV está en un solo archivo: `data.js`.**
No hace falta tocar HTML ni CSS para cambiar contenido.

### Cambios típicos

#### Cambiar un texto (ej: título, descripción)
Abrí `data.js` en cualquier editor. Buscá el campo y cambiá el texto entre comillas.
Si el campo tiene `{ es: "...", en: "..." }`, hay que cambiar las dos versiones.

#### Agregar una experiencia laboral
Buscá la sección `experience` en `data.js` y copiá un bloque entero (desde `{` hasta `},`).
Pegalo al principio de la lista (lo más reciente va arriba) y cambiá los datos.

#### Agregar un proyecto
Buscá `projects` en `data.js` y copiá un bloque completo. Pegalo en la posición que quieras.

#### Cambiar la foto
Reemplazá `images/profile.jpg` por la foto nueva (tiene que llamarse igual).
O cambiá el campo `profileImage` en `data.js`.

#### Reemplazar el CV descargable
Reemplazá `files/cv-rocio-wegman.docx` por la versión nueva (mismo nombre).

## Estructura de archivos

```
cv-rocio/
├── index.html          ← Página de inicio
├── projects.html       ← Página de proyectos
├── data.js             ← TODA tu info acá (editás esto)
├── app.js              ← Lógica de renderizado (no tocar)
├── styles.css          ← Estilos visuales
├── images/
│   └── profile.jpg     ← Tu foto
└── files/
    ├── cv-rocio-wegman.docx
    ├── accesibilidad-salud-ml.pdf
    ├── umbrales-introduccion.pdf
    ├── relaciones-intergeneracionales.pdf
    ├── trabajo-plataformizado.pdf
    └── chatgpt-educacion.pdf
```

## Cómo verlo localmente

Abrí `index.html` en un navegador haciendo doble click. Listo.

## Cómo publicarlo en GitHub Pages

Ya está todo subido al repo. En GitHub:

1. Andá a tu repo → **Settings** → **Pages**
2. En *Branch* elegí `master` y carpeta `/ (root)`
3. Click en **Save**
4. Esperá unos minutos
5. Tu CV va a estar disponible en: `https://rochiweg-cloud.github.io/CV/`
