---
layout: profile
profile: consulting
lang: es
page_key: about
permalink: /consulting/es/about/
title: "Sobre mí"
---

<h1>Sobre mí</h1>

Soy científico de datos con perfil interdisciplinario que combina formación en ciencia de datos e IA con antropología social. Trabajo en la intersección del machine learning, NLP y el análisis geoespacial, aplicados a problemas de política pública, urbanismo, medio ambiente y desarrollo social.

He trabajado con organismos internacionales como el **Banco Interamericano de Desarrollo (BID)**, gobiernos (Ciudad de Buenos Aires), ONGs (Techo) y universidades en Argentina, los Países Bajos e Italia. Tengo capacidad para coordinar equipos interinstitucionales y traducir entre lenguajes técnicos y de gestión.

Actualmente entre **Buenos Aires e Italia** (ciudadanía italiana/UE). Trilingüe: español (nativo), inglés (C2 — certificado EF), italiano (profesional).

---

## Habilidades Técnicas

<div class="skills-grid">
  <div class="skill-group">
    <h4>Lenguajes</h4>
    <p>Python, R, SQL</p>
  </div>
  <div class="skill-group">
    <h4>ML e IA</h4>
    <p>scikit-learn, XGBoost, PyTorch, TensorFlow, Hugging Face Transformers, NLP, Computer Vision</p>
  </div>
  <div class="skill-group">
    <h4>Geoespacial y Teledetección</h4>
    <p>QGIS, ArcGIS, Google Earth Engine, Rasterio, análisis LULC, clasificación de imágenes satelitales</p>
  </div>
  <div class="skill-group">
    <h4>Datos y Visualización</h4>
    <p>pandas, tidyverse, ggplot2, plotly, matplotlib</p>
  </div>
  <div class="skill-group">
    <h4>Infraestructura</h4>
    <p>Docker, Git, AWS / GCP / Azure</p>
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
