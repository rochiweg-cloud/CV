---
layout: profile
profile: ai-safety
lang: es
page_key: about
permalink: /ai-safety/es/about/
title: "Sobre mí"
---

<h1>Sobre mí</h1>

Soy científico de datos social trabajando en la intersección de la **gobernanza de IA, la construcción de comunidad y la investigación técnica**. Mi trabajo se orienta a hacer que el desarrollo de la IA sea más seguro y beneficioso: a través de investigación en gobernanza, construcción de campo y docencia.

Actualmente soy **CORDA Democracy Fellow** (Apart Research / Odyssean Institute), contribuyendo al Proceso Odyssean para la Gobernanza de IA: construyendo herramientas de apoyo a la decisión y materiales educativos para asambleas ciudadanas sobre IA (UK 2026, global 2027). También soy miembro fundador de la **Italian AI Safety Community** y miembro de **BAISH (Buenos Aires AI Safety Hub)**.

Mi perfil es inusual: combino una licenciatura en antropología social con una diplomatura en ciencia de datos e IA, y experiencia profesional como científico de datos en política pública y desarrollo urbano. Aporto una perspectiva sociotécnica al riesgo de la IA que va más allá de los enfoques puramente técnicos.

Graduado del **Curso de Estrategia AGI de BlueDot Impact** (2026). Trilingüe: español (nativo), inglés (C2 — certificado EF), italiano (profesional).

---

## Habilidades Técnicas

<div class="skills-grid">
  <div class="skill-group">
    <h4>IA/ML</h4>
    <p>Python, PyTorch, TensorFlow, Hugging Face Transformers, scikit-learn, XGBoost; NLP (clasificación, topic modelling, embeddings), Computer Vision</p>
  </div>
  <div class="skill-group">
    <h4>Herramientas de Datos e Investigación</h4>
    <p>R (tidyverse), SQL, pandas, NumPy; QGIS, Google Earth Engine, Rasterio; Git, Docker, AWS/GCP/Azure</p>
  </div>
  <div class="skill-group">
    <h4>Métodos de Investigación</h4>
    <p>Codificación cualitativa, análisis de elicitación de expertos, análisis de sensibilidad, diagramas de bucle causal, modelado de escenarios, investigación social mixta</p>
  </div>
</div>

---

## Educación

{% for deg in site.data.education.degrees %}
<div class="edu-entry">
  <div class="edu-header">
    <span class="edu-title">{{ deg.title_es }}</span>
    <span class="edu-year">{{ deg.year_es | default: deg.year }}</span>
  </div>
  <div class="edu-inst">{{ deg.institution_es }}{% if deg.location %} · {{ deg.location }}{% endif %}</div>
  {% if deg.note_es %}<div class="edu-note">{{ deg.note_es }}</div>{% endif %}
</div>
{% endfor %}

---

## Distinciones

{% for award in site.data.education.awards %}
<div class="award-entry">
  <span class="award-title">{{ award.title_es }}</span>
  <span class="award-year">{{ award.year }}</span>
  {% if award.description_es and award.description_es != "" %}<span class="award-desc">{{ award.description_es }}</span>{% endif %}
</div>
{% endfor %}
