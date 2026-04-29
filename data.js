// ============================================================
// TODOS LOS DATOS DEL CV VAN ACÁ
// Para editar el CV, cambiá los textos de este archivo.
// No hace falta tocar el HTML ni el CSS.
// ============================================================

const DATA = {
  // ---------- INFO DE CONTACTO Y PERFIL ----------
  name: "Rocío Wegman",
  tagline: {
    es: "Investigadora · Analista de Datos · Gestión y evaluación de proyectos",
    en: "Researcher · Data Analyst · Project management and evaluation"
  },
  location: "CABA, Argentina",
  email: "rociobwegman@gmail.com",
  whatsapp: "+5491126781090",
  whatsappDisplay: "+54 11 2678 1090",
  linkedin: "https://www.linkedin.com/in/rocío-wegman-806643268/",
  // CV en dos idiomas — el botón descarga el que corresponde al idioma activo
  cvFile: {
    es: "files/cv-rocio-wegman-es.pdf",
    en: "files/cv-rocio-wegman-en.pdf"
  },
  profileImage: "images/profile.jpg",

  // ---------- PERFIL PROFESIONAL (en tercera persona) ----------
  about: {
    es: `Socióloga con experiencia en investigación aplicada, análisis de datos y evaluación de proyectos. Convierte datos complejos y problemas abiertos en preguntas claras, indicadores útiles y resultados comunicables a audiencias diversas. Integra mirada sociológica y pensamiento reflexivo con dominio técnico de herramientas de datos y entornos digitales. Busca sumarse a equipos interdisciplinarios que generen evidencia para la toma de decisiones.`,
    en: `Sociologist with experience in applied research, data analysis, and project evaluation. Turns complex data and open-ended problems into clear questions, useful indicators, and results communicable to diverse audiences. Combines a sociological perspective and reflective thinking with technical command of data tools and digital environments. Looking to join interdisciplinary teams that generate evidence for decision-making.`
  },

  // ---------- EXPERIENCIA ----------
  experience: [
    {
      role: { es: "Consultoría Freelance — Gestión de Proyectos & Machine Learning", en: "Freelance Consulting — Project Management & Machine Learning" },
      org: "CIPPEC",
      period: { es: "2026 — Actualidad", en: "2026 — Present" },
      bullets: {
        es: [
          "Diseño e implementación de modelo de machine learning para problemáticas de política pública.",
          "Gestión de proyectos de investigación, relevamiento y análisis de literatura, normativa y documentos técnicos."
        ],
        en: [
          "Design and implementation of a machine learning model for public policy problems.",
          "Management of research projects, literature reviews, and analysis of regulatory and technical documents."
        ]
      }
    },
    {
      role: { es: "Investigadora Voluntaria", en: "Volunteer Researcher" },
      org: { es: "Centro de Estudios sobre Capitalismo, Tecnología y Sociedad (UMAI)", en: "Center for Studies on Capitalism, Technology and Society (UMAI)" },
      period: { es: "2023 — Actualidad", en: "2023 — Present" },
      bullets: {
        es: [
          "Diseño e implementación de proyectos de investigación sobre transformación digital y adopción tecnológica.",
          "Elaboración, difusión y análisis de 4 encuestas de más de 500 respuestas cada una.",
          "Sistematización de resultados y elaboración de informes. Coautoría de 3 artículos académicos y exposición en 3 congresos."
        ],
        en: [
          "Design and implementation of research projects on digital transformation and technology adoption.",
          "Design, distribution and analysis of 4 surveys of more than 500 responses each.",
          "Systematization of results and report writing. Co-authorship of 3 academic articles and presentations at 3 conferences."
        ]
      }
    },
    {
      role: { es: "Analista de Datos", en: "Data Analyst" },
      org: { es: "Ministerio de Hábitat y Desarrollo Humano, GCBA", en: "Ministry of Habitat and Human Development, City of Buenos Aires" },
      period: "2024 — 2025",
      bullets: {
        es: [
          "Gestión e implementación de proyectos de investigación para la evaluación de políticas públicas.",
          "Construcción de indicadores, procesamiento y análisis de grandes bases de datos con cientos de miles de registros.",
          "Desarrollo de 4 dashboards interactivos (Power BI) para el monitoreo de más de 30 programas sociales.",
          "Comunicación efectiva de resultados y articulación con equipos multidisciplinarios."
        ],
        en: [
          "Management and implementation of research projects for public policy evaluation.",
          "Construction of indicators, processing and analysis of large databases with hundreds of thousands of records.",
          "Development of 4 interactive dashboards (Power BI) for the monitoring of more than 30 social programs.",
          "Effective communication of results and articulation with multidisciplinary teams."
        ]
      }
    },
    {
      role: { es: "Investigadora Voluntaria", en: "Volunteer Researcher" },
      org: { es: "Universidad Nacional de San Martín", en: "National University of San Martín (UNSAM)" },
      period: "2022 — 2025",
      bullets: {
        es: [
          "Participación en equipos interdisciplinarios y proyectos de investigación vinculados a salud, cultura y tecnologías digitales.",
          "Coordinación de más de 20 entrevistas y 5 grupos focales; autoría y coautoría de 3 artículos y realización de más de 5 ponencias."
        ],
        en: [
          "Participation in interdisciplinary teams and research projects related to health, culture, and digital technologies.",
          "Coordination of more than 20 interviews and 5 focus groups; authorship and co-authorship of 3 articles and more than 5 presentations."
        ]
      }
    }
  ],

  // ---------- FORMACIÓN ----------
  education: [
    {
      degree: { es: "Licenciatura en Sociología", en: "BA in Sociology" },
      org: { es: "Universidad Nacional de San Martín", en: "National University of San Martín (UNSAM)" },
      period: { es: "En curso (90% aprobado) · Promedio: 9,33", en: "In progress (90% completed) · GPA: 9.33/10" }
    },
    {
      degree: { es: "Especialización en Métodos Cuantitativos y Ciencias Sociales Computacionales", en: "Specialization in Quantitative Methods and Computational Social Sciences" },
      org: "IDAES",
      period: { es: "2024 – 2025 · Promedio: 9", en: "2024 – 2025 · GPA: 9/10" }
    },
    {
      degree: { es: "Bachiller en Ciencias Sociales y Humanidades", en: "High School Diploma in Social Sciences and Humanities" },
      org: { es: "Colegio de la Ciudad", en: "Colegio de la Ciudad" },
      period: "2020"
    }
  ],

  // ---------- FORMACIÓN COMPLEMENTARIA ----------
  additionalTraining: [
    {
      title: { es: "Diseño Integral de Aplicaciones Móviles para Salud Humana", en: "Comprehensive Design of Mobile Applications for Human Health" },
      org: "IDAES",
      period: { es: "En curso", en: "In progress" }
    },
    {
      title: { es: "Formación técnica en herramientas de IA avanzada y prompt engineering", en: "Technical training in advanced AI tools and prompt engineering" },
      org: "Anthropic",
      period: "2026"
    },
    {
      title: { es: "Marketing de Contenidos Avanzado & SEO", en: "Advanced Content Marketing & SEO" },
      org: "Semrush Academy",
      period: "2026"
    },
    {
      title: { es: "Intercambio académico Erasmus+", en: "Erasmus+ Academic Exchange" },
      org: { es: "Universidad de Hradec Králové, República Checa", en: "University of Hradec Králové, Czech Republic" },
      period: { es: "2025 · Promedio: 9,5", en: "2025 · GPA: 9.5/10" }
    }
  ],

  // ---------- HABILIDADES ----------
  skills: [
    {
      category: { es: "Datos & Analytics", en: "Data & Analytics" },
      items: "R · SPSS · Excel avanzado · Power BI · Machine Learning · Python (básico) · SQL (básico)"
    },
    {
      category: { es: "Herramientas & Tech", en: "Tools & Tech" },
      items: { es: "Microsoft 365 · Prompt engineering · Automatización · Web scraping", en: "Microsoft 365 · Prompt engineering · Automation · Web scraping" }
    }
  ],

  // ---------- IDIOMAS ----------
  languages: [
    { lang: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
    { lang: { es: "Inglés", en: "English" }, level: { es: "B2 — First Certificate (Cambridge) · Semestre académico cursado en inglés", en: "B2 — First Certificate (Cambridge) · Academic semester completed in English" } }
  ],

  // ---------- PROYECTOS ----------
  // Orden: accesibilidad → umbrales → ChatGPT → empleo doméstico → trabajo plataformizado → becas
  projects: [
    {
      id: "accesibilidad-salud",
      title: { es: "Predicción de Accesibilidad a la Salud con Machine Learning", en: "Predicting Healthcare Accessibility with Machine Learning" },
      org: { es: "Trabajo final de la Especialización en Métodos Cuantitativos y Ciencias Sociales Computacionales · IDAES", en: "Final project for the Specialization in Quantitative Methods and Computational Social Sciences · IDAES" },
      period: "2025",
      description: {
        es: "Trabajo final de la Especialización en Métodos Cuantitativos y Ciencias Sociales Computacionales (IDAES). Estudio que entrena, compara e interpreta dos modelos de Machine Learning supervisado (Random Forest y XGBoost) para predecir la accesibilidad a la salud en aglomerados urbanos de Argentina, medida como el tiempo de traslado a pie al hospital y centro de salud más cercano. El trabajo combina datos del Censo 2010, registros de establecimientos productivos (SIPA-AFIP) y una base de vulnerabilidad sanitaria, con una variable espacial creada a partir de la distancia al centroide urbano.",
        en: "Final project for the Specialization in Quantitative Methods and Computational Social Sciences (IDAES). Trains, compares, and interprets two supervised Machine Learning models (Random Forest and XGBoost) to predict healthcare accessibility in Argentine urban areas, measured as walking time to the nearest hospital and health center. The work combines data from the 2010 Census, productive establishment records (SIPA-AFIP), and a health vulnerability database, along with a spatial variable created from distance to the urban centroid."
      },
      tags: ["Machine Learning", "R", "Random Forest", "XGBoost", { es: "Política Pública", en: "Public Policy" }, { es: "Salud", en: "Health" }],
      links: [
        { label: { es: "Leer el paper (PDF)", en: "Read paper (PDF)" }, url: "files/accesibilidad-salud-ml.pdf" },
        { label: { es: "Ver código en GitHub", en: "View code on GitHub" }, url: "https://github.com/rochiweg-cloud/ml-vulnerabilidad-territorial" }
      ]
    },
    {
      id: "umbrales",
      title: { es: "Umbrales: Imaginarios tecnológicos y nuevas socializaciones", en: "Thresholds: Technological Imaginaries and New Socializations" },
      org: { es: "Núcleo sobre Tecnologías Digitales, Cultura y Sociedad (EIDAES-UNSAM) · OISTE · Coordinado por Marcelo Urresti y Fernando Peirone", en: "Center on Digital Technologies, Culture and Society (EIDAES-UNSAM) · OISTE · Coordinated by Marcelo Urresti and Fernando Peirone" },
      period: "2024 — 2025",
      description: {
        es: "Investigación realizada en el marco del Núcleo sobre Tecnologías Digitales, Cultura y Sociedad (EIDAES-UNSAM) y el Observatorio Interuniversitario de Sociedad, Tecnología y Educación (OISTE), bajo la dirección de Marcelo Urresti y Fernando Peirone. Estudio cualitativo sobre cómo la interacción de los preadolescentes con tecnologías digitales reconfigura los procesos de socialización primaria y las relaciones intergeneracionales. A partir de entrevistas en profundidad y grupos focales realizados en Buenos Aires con preadolescentes, madres, padres y docentes, el proyecto explora los imaginarios, prácticas y tensiones que emergen en hogares y escuelas atravesados por la tecnosociabilidad. Forma parte de un libro colectivo en proceso de publicación; sus primeros avances fueron publicados como número especial de la revista Ti. Futuros Comunes (2025).",
        en: "Research carried out within the Center on Digital Technologies, Culture and Society (EIDAES-UNSAM) and the Inter-University Observatory on Society, Technology and Education (OISTE), under the direction of Marcelo Urresti and Fernando Peirone. Qualitative study on how preadolescents' interaction with digital technologies reconfigures primary socialization processes and intergenerational relationships. Based on in-depth interviews and focus groups conducted in Buenos Aires with preadolescents, mothers, fathers, and teachers, the project explores the imaginaries, practices, and tensions emerging in households and schools shaped by technosociability. The work is part of a forthcoming collective book; initial findings were published as a special issue of Ti. Futuros Comunes (2025)."
      },
      tags: [{ es: "Investigación cualitativa", en: "Qualitative research" }, { es: "Sociología", en: "Sociology" }, { es: "Tecnología", en: "Technology" }, { es: "Educación", en: "Education" }],
      links: [
        { label: { es: "Introducción al número (PDF)", en: "Issue introduction (PDF)" }, url: "files/umbrales-introduccion.pdf" },
        { label: { es: "Artículo: Relaciones intergeneracionales y tecnologías digitales (PDF)", en: "Article: Intergenerational relations and digital technologies (PDF)" }, url: "files/relaciones-intergeneracionales.pdf" }
      ]
    },
    {
      id: "chatgpt-educacion",
      title: { es: "ChatGPT y Educación: Adopción y usos en estudiantes argentinos", en: "ChatGPT and Education: Adoption and uses by Argentine students" },
      org: { es: "Centro de Estudios sobre Capitalismo, Tecnología y Sociedad (UMAI) · Coautoría con Mariano Zukerfeld · Publicado en Argumentos. Revista de crítica social (IIGG-UBA)", en: "Center for Studies on Capitalism, Technology and Society (UMAI) · Co-authored with Mariano Zukerfeld · Published in Argumentos. Journal of Social Critique (IIGG-UBA)" },
      period: "2025",
      description: {
        es: "Artículo desarrollado en el marco del Centro de Estudios sobre Capitalismo, Tecnología y Sociedad (UMAI), en coautoría con Mariano Zukerfeld. Está basado en una encuesta nacional —pionera en Argentina— sobre los usos educativos de ChatGPT entre estudiantes de grado y posgrado. El trabajo inscribe a la inteligencia artificial generativa en la fase de plataformas del capitalismo digital y analiza la frecuencia de uso, los tipos de tareas para las que se utiliza, las representaciones sobre la productividad horaria, los niveles de conformidad y las prácticas de chequeo de información.",
        en: "Article developed at the Center for Studies on Capitalism, Technology and Society (UMAI), co-authored with Mariano Zukerfeld. It is based on a national survey —the first of its kind in Argentina— on the educational uses of ChatGPT among undergraduate and graduate students. The work situates generative artificial intelligence within the platform phase of digital capitalism and analyzes usage frequency, types of tasks, perceptions of hourly productivity, levels of satisfaction, and information-checking practices."
      },
      tags: [{ es: "IA Generativa", en: "Generative AI" }, { es: "Educación", en: "Education" }, { es: "Encuestas", en: "Surveys" }, { es: "Análisis cuantitativo", en: "Quantitative analysis" }],
      links: [
        { label: { es: "Leer el artículo (PDF)", en: "Read article (PDF)" }, url: "files/chatgpt-educacion.pdf" }
      ]
    },
    {
      id: "empleo-domestico",
      title: { es: "Digitalización, Plataformización y Automatización del trabajo en Empleo Doméstico", en: "Digitalization, Platformization and Automation of Work in Domestic Employment" },
      org: { es: "Centro de Estudios sobre Capitalismo, Tecnología y Sociedad (UMAI) · Coautoría con Guillermina Yansen, Mariano Fredes y Gonzalo Granara", en: "Center for Studies on Capitalism, Technology and Society (UMAI) · Co-authored with Guillermina Yansen, Mariano Fredes and Gonzalo Granara" },
      period: "2024",
      description: {
        es: "Artículo desarrollado en el marco del Centro de Estudios sobre Capitalismo, Tecnología y Sociedad (UMAI), donde participa como investigadora voluntaria. Caracteriza empíricamente las tres tendencias del trabajo vinculadas a las tecnologías digitales —digitalización, plataformización y automatización— en el empleo doméstico y las tareas de cuidado en Argentina. Se apoya en una encuesta realizada en 2023 a trabajadoras domésticas con perfil en Zolvers, principal plataforma de intermediación del sector, complementada con datos de la Encuesta Permanente de Hogares.",
        en: "Article developed at the Center for Studies on Capitalism, Technology and Society (UMAI), where she participates as a volunteer researcher. Empirically characterizes the three labor trends linked to digital technologies —digitalization, platformization, and automation— in domestic work and care tasks in Argentina. It draws on a 2023 survey of domestic workers with profiles on Zolvers, the main job-intermediation platform in the sector, complemented with data from the Permanent Household Survey."
      },
      tags: [{ es: "Sociología del trabajo", en: "Sociology of work" }, { es: "Empleo doméstico", en: "Domestic work" }, { es: "Plataformización", en: "Platformization" }, { es: "Encuestas", en: "Surveys" }],
      links: [
        { label: { es: "Leer el artículo (PDF)", en: "Read article (PDF)" }, url: "files/empleo-domestico-tendencias.pdf" }
      ]
    },
    {
      id: "trabajo-plataformizado",
      title: { es: "Trabajo, habilidades y remuneraciones en ocupaciones heterogéneas", en: "Labor, skills, and earnings in heterogeneous occupations" },
      org: { es: "Centro de Estudios sobre Capitalismo, Tecnología y Sociedad (UMAI) · Coautoría con Mariano Zukerfeld · Publicado en CESOT", en: "Center for Studies on Capitalism, Technology and Society (UMAI) · Co-authored with Mariano Zukerfeld · Published in CESOT" },
      period: "2025",
      description: {
        es: "Artículo desarrollado en el marco del Centro de Estudios sobre Capitalismo, Tecnología y Sociedad (UMAI), en coautoría con Mariano Zukerfeld. Compara los rasgos sociodemográficos, las habilidades laborales percibidas como importantes y los determinantes salariales en tres ocupaciones con distinto grado de mediación digital: servicio doméstico, trabajo informático y educación superior a distancia. La investigación se apoya en la armonización y el análisis comparado de dos encuestas independientes pero con cuestionarios compatibles: la encuesta PIP (2023), enfocada en mapear las tendencias de digitalización, plataformización y automatización en distintos sectores, y la encuesta PICTO (2024), centrada específicamente en trabajadores con actividades mediadas por plataformas. Sobre estos datos se aplican modelos de regresión lineal para identificar los determinantes del ingreso horario.",
        en: "Article developed at the Center for Studies on Capitalism, Technology and Society (UMAI), co-authored with Mariano Zukerfeld. Compares the sociodemographic characteristics, perceived important labor skills, and wage determinants in three occupations with different degrees of digital mediation: domestic service, IT work, and distance higher education. The research relies on the harmonization and comparative analysis of two independent surveys with compatible questionnaires: the PIP survey (2023), focused on mapping digitalization, platformization, and automation trends across sectors, and the PICTO survey (2024), specifically aimed at workers in platform-mediated activities. Linear regression models are applied to these data to identify the determinants of hourly earnings."
      },
      tags: [{ es: "Sociología del trabajo", en: "Sociology of work" }, { es: "Análisis cuantitativo", en: "Quantitative analysis" }, { es: "Plataformización", en: "Platformization" }, { es: "Género", en: "Gender" }],
      links: [
        { label: { es: "Leer el artículo (PDF)", en: "Read article (PDF)" }, url: "files/trabajo-plataformizado.pdf" }
      ]
    },
    {
      id: "becas-tribu",
      title: { es: "Becas para la Tribu — Web de difusión", en: "Becas para la Tribu — Outreach website" },
      org: { es: "Proyecto de la antropóloga Micaela Gueler", en: "Project by anthropologist Micaela Gueler" },
      period: "2025",
      description: {
        es: "Diseño y desarrollo de una página web para Becas para la Tribu, un proyecto de la antropóloga Micaela Gueler dedicado a la difusión de becas orientadas a estudiantes de ciencias sociales. Trabajo realizado de forma freelance, con foco en la accesibilidad, claridad informativa y experiencia de usuario en dispositivos móviles.",
        en: "Design and development of a website for Becas para la Tribu, a project led by anthropologist Micaela Gueler dedicated to disseminating scholarships aimed at social science students. Freelance work focused on accessibility, informational clarity, and mobile user experience."
      },
      tags: [{ es: "Diseño web", en: "Web design" }, { es: "Comunicación", en: "Communication" }, { es: "Educación", en: "Education" }],
      links: [
        { label: { es: "Visitar el sitio", en: "Visit website" }, url: "https://agent-69ef88ea5bec5708ab55--becasparalatribu-bpt.netlify.app/" }
      ]
    }
  ],

  // ---------- NOTA SOBRE MATERIAL NO PÚBLICO (en tercera persona) ----------
  projectsNote: {
    es: "Algunos proyectos en los que trabajó —como los desarrollados durante su paso por el Ministerio de Hábitat y Desarrollo Humano del GCBA— no se encuentran incluidos aquí porque sus productos (dashboards, indicadores, informes internos) pertenecen a las instituciones para las que fueron desarrollados.",
    en: "Some projects she worked on —such as those developed during her time at the Ministry of Habitat and Human Development of the City of Buenos Aires— are not included here because their outputs (dashboards, indicators, internal reports) belong to the institutions for which they were developed."
  },

  // ---------- TEXTOS DE LA INTERFAZ ----------
  ui: {
    nav: {
      about: { es: "Inicio", en: "Home" },
      projects: { es: "Proyectos", en: "Projects" }
    },
    sections: {
      about: { es: "Sobre mí", en: "About" },
      experience: { es: "Experiencia", en: "Experience" },
      education: { es: "Formación", en: "Education" },
      additional: { es: "Formación complementaria", en: "Additional training" },
      skills: { es: "Habilidades técnicas", en: "Technical skills" },
      languages: { es: "Idiomas", en: "Languages" },
      projects: { es: "Proyectos y publicaciones", en: "Projects and publications" }
    },
    downloadCV: { es: "Descargar CV", en: "Download CV" },
    seeProjects: { es: "Ver proyectos", en: "See projects" },
    backHome: { es: "← Volver al inicio", en: "← Back to home" },
    note: { es: "Nota", en: "Note" }
  }
};
