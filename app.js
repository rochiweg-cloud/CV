// ============================================================
// LÓGICA DEL CV — Idioma + Renderizado
// ============================================================

// Idioma por defecto (cambia al hacer click en ES/EN)
let currentLang = localStorage.getItem('cv-lang') || 'es';

// Helper: si el valor tiene {es, en}, devuelve el del idioma actual; si no, el valor tal cual
function t(value) {
  if (value && typeof value === 'object' && (value.es !== undefined || value.en !== undefined)) {
    return value[currentLang] ?? value.es ?? value.en ?? '';
  }
  return value;
}

// Helper para escapar HTML (seguridad básica)
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ============================================================
// SVG ICONS
// ============================================================
const ICONS = {
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  pdf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>'
};

// ============================================================
// RENDER: PROFILE CARD (compartido en ambas páginas)
// ============================================================
function renderProfileCard() {
  const wpp = DATA.whatsapp.replace(/\D/g, '');
  return `
    <div class="profile-card">
      <img src="${DATA.profileImage}" alt="${DATA.name}" class="profile-photo">
      <h1 class="profile-name">${DATA.name}</h1>
      <p class="profile-tagline">${esc(t(DATA.tagline))}</p>
      <p class="profile-location">${esc(DATA.location)}</p>
      <div class="contact-bar">
        <a href="mailto:${DATA.email}" title="${DATA.email}">${ICONS.mail}<span>${DATA.email}</span></a>
        <a href="https://wa.me/${wpp}" target="_blank" rel="noopener" title="WhatsApp">${ICONS.whatsapp}<span>${DATA.whatsappDisplay}</span></a>
        <a href="${DATA.linkedin}" target="_blank" rel="noopener" title="LinkedIn">${ICONS.linkedin}<span>LinkedIn</span></a>
      </div>
      <div class="cta-buttons">
        <a href="${DATA.cvFile}" download class="btn btn-primary">${ICONS.download} ${t(DATA.ui.downloadCV)}</a>
      </div>
    </div>
  `;
}

// ============================================================
// RENDER: NAVIGATION
// ============================================================
function renderNav(activePage) {
  return `
    <header class="site-header">
      <nav class="nav-container">
        <ul class="nav-links">
          <li><a href="index.html" class="${activePage === 'about' ? 'active' : ''}" data-i18n="nav.about">${t(DATA.ui.nav.about)}</a></li>
          <li><a href="projects.html" class="${activePage === 'projects' ? 'active' : ''}" data-i18n="nav.projects">${t(DATA.ui.nav.projects)}</a></li>
        </ul>
        <div class="lang-switcher">
          <button data-lang="es" class="${currentLang === 'es' ? 'active' : ''}">ES</button>
          <button data-lang="en" class="${currentLang === 'en' ? 'active' : ''}">EN</button>
        </div>
      </nav>
    </header>
  `;
}

// ============================================================
// RENDER: ABOUT PAGE
// ============================================================
function renderAboutPage() {
  const exp = DATA.experience.map(e => `
    <div class="timeline-item">
      <div class="item-header">
        <div>
          <h3 class="item-title">${esc(t(e.role))}</h3>
          <div class="item-org">${esc(t(e.org))}</div>
        </div>
        <span class="item-period">${esc(t(e.period))}</span>
      </div>
      <ul class="item-bullets">
        ${t(e.bullets).map(b => `<li>${esc(b)}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  const edu = DATA.education.map(e => `
    <div class="timeline-item">
      <div class="item-header">
        <div>
          <h3 class="item-title">${esc(t(e.degree))}</h3>
          <div class="item-org">${esc(t(e.org))}</div>
        </div>
        <span class="item-period">${esc(t(e.period))}</span>
      </div>
    </div>
  `).join('');

  const additional = DATA.additionalTraining.map(e => `
    <div class="timeline-item">
      <div class="item-header">
        <div>
          <h3 class="item-title">${esc(t(e.title))}</h3>
          <div class="item-org">${esc(t(e.org))}</div>
        </div>
        <span class="item-period">${esc(t(e.period))}</span>
      </div>
    </div>
  `).join('');

  const skills = DATA.skills.map(s => `
    <div class="skill-row">
      <div class="skill-category">${esc(t(s.category))}</div>
      <div class="skill-items">${esc(t(s.items))}</div>
    </div>
  `).join('');

  const langs = DATA.languages.map(l => `
    <div class="skill-row">
      <div class="skill-category">${esc(t(l.lang))}</div>
      <div class="skill-items">${esc(t(l.level))}</div>
    </div>
  `).join('');

  return `
    ${renderNav('about')}
    ${renderProfileCard()}
    <main>
      <section id="about">
        <h2>${t(DATA.ui.sections.about)}</h2>
        <p class="about-text">${esc(t(DATA.about))}</p>
      </section>

      <section id="experience">
        <h2>${t(DATA.ui.sections.experience)}</h2>
        ${exp}
      </section>

      <section id="education">
        <h2>${t(DATA.ui.sections.education)}</h2>
        ${edu}
      </section>

      <section id="additional">
        <h2>${t(DATA.ui.sections.additional)}</h2>
        ${additional}
      </section>

      <section id="skills">
        <h2>${t(DATA.ui.sections.skills)}</h2>
        <div class="skills-grid">${skills}</div>
      </section>

      <section id="languages">
        <h2>${t(DATA.ui.sections.languages)}</h2>
        <div class="skills-grid">${langs}</div>
      </section>

      <div style="text-align:center;margin-top:3rem;">
        <a href="projects.html" class="btn btn-primary">${t(DATA.ui.seeProjects)} ${ICONS.arrow}</a>
      </div>
    </main>
    <footer>
      © ${new Date().getFullYear()} ${DATA.name}
    </footer>
  `;
}

// ============================================================
// RENDER: PROJECTS PAGE
// ============================================================
function renderProjectsPage() {
  const projects = DATA.projects.map(p => {
    const tags = p.tags.map(tag => `<span class="tag">${esc(t(tag))}</span>`).join('');
    const links = p.links.map(l => {
      const isExternal = l.url.startsWith('http');
      const isPdf = l.url.endsWith('.pdf');
      const icon = isPdf ? ICONS.pdf : (isExternal ? ICONS.external : ICONS.download);
      const target = isExternal ? 'target="_blank" rel="noopener"' : '';
      return `<a href="${l.url}" class="project-link" ${target}>${icon} ${esc(t(l.label))}</a>`;
    }).join('');

    return `
      <article class="project-card" id="${p.id}">
        <div class="project-header">
          <h3 class="project-title">${esc(t(p.title))}</h3>
          <span class="item-period">${esc(t(p.period))}</span>
        </div>
        <div class="project-meta">${esc(t(p.org))}</div>
        <p class="project-description">${esc(t(p.description))}</p>
        <div class="project-tags">${tags}</div>
        <div class="project-links">${links}</div>
      </article>
    `;
  }).join('');

  return `
    ${renderNav('projects')}
    ${renderProfileCard()}
    <main>
      <section>
        <h1>${t(DATA.ui.sections.projects)}</h1>
        ${projects}
        <div class="note-box">
          <span class="note-label">${t(DATA.ui.note)}</span>
          ${esc(t(DATA.projectsNote))}
        </div>
        <div style="text-align:center;margin-top:3rem;">
          <a href="index.html" class="btn btn-secondary">${t(DATA.ui.backHome)}</a>
        </div>
      </section>
    </main>
    <footer>
      © ${new Date().getFullYear()} ${DATA.name}
    </footer>
  `;
}

// ============================================================
// LANGUAGE SWITCHER + INIT
// ============================================================
function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('cv-lang', lang);
  document.documentElement.lang = lang;
  render();
}

function attachLangListeners() {
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

function render() {
  const page = document.body.dataset.page;
  const root = document.getElementById('app');
  if (page === 'projects') {
    root.innerHTML = renderProjectsPage();
  } else {
    root.innerHTML = renderAboutPage();
  }
  attachLangListeners();
  document.documentElement.lang = currentLang;
}

document.addEventListener('DOMContentLoaded', render);
