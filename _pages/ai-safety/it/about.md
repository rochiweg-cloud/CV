---
layout: profile
profile: ai-safety
lang: it
page_key: about
permalink: /ai-safety/it/about/
title: "Chi sono"
---

<h1>Chi sono</h1>

Sono un data scientist sociale che lavora all'intersezione tra **AI governance, costruzione di comunità e ricerca tecnica**. Il mio lavoro mira a rendere lo sviluppo dell'IA più sicuro e benefico — attraverso ricerca sulla governance, field building e didattica.

Attualmente sono **CORDA Democracy Fellow** (Apart Research / Odyssean Institute), contribuendo all'Odyssean Process for AI Governance: sviluppo di strumenti di supporto alle decisioni e materiali educativi per assemblee civiche sull'IA (UK 2026, globale 2027). Sono anche membro fondatore della **Italian AI Safety Community** e membro di **BAISH (Buenos Aires AI Safety Hub)**.

Il mio profilo è insolito: combino una laurea in antropologia sociale con un diploma in data science e IA, e un'esperienza professionale come data scientist in politiche pubbliche e sviluppo urbano. Porto una prospettiva sociotecnica al rischio dell'IA che va oltre i framework puramente tecnici.

Laureato al **Corso di Strategia AGI di BlueDot Impact** (2026). Trilingue: spagnolo (madrelingua), inglese (C2 — certificato EF), italiano (professionale).

---

## Competenze Tecniche

<div class="skills-grid">
  <div class="skill-group">
    <h4>AI/ML</h4>
    <p>Python, PyTorch, TensorFlow, Hugging Face Transformers, scikit-learn, XGBoost; NLP (classificazione, topic modelling, embeddings), Computer Vision</p>
  </div>
  <div class="skill-group">
    <h4>Strumenti di Ricerca e Dati</h4>
    <p>R (tidyverse), SQL, pandas, NumPy; QGIS, Google Earth Engine, Rasterio; Git, Docker, AWS/GCP/Azure</p>
  </div>
  <div class="skill-group">
    <h4>Metodi di Ricerca</h4>
    <p>Codifica qualitativa, analisi di elicitazione di esperti, analisi di sensitività, diagrammi causali, scenario modelling, ricerca sociale mista</p>
  </div>
</div>

---

## Formazione

{% for deg in site.data.education.degrees %}
<div class="edu-entry">
  <div class="edu-header">
    <span class="edu-title">{{ deg.title_it }}</span>
    <span class="edu-year">{{ deg.year_it | default: deg.year }}</span>
  </div>
  <div class="edu-inst">{{ deg.institution_it }}{% if deg.location %} · {{ deg.location }}{% endif %}</div>
  {% if deg.note_it %}<div class="edu-note">{{ deg.note_it }}</div>{% endif %}
</div>
{% endfor %}

---

## Premi e Borse

{% for award in site.data.education.awards %}
<div class="award-entry">
  <span class="award-title">{{ award.title_it }}</span>
  <span class="award-year">{{ award.year }}</span>
  {% if award.description_it and award.description_it != "" %}<span class="award-desc">{{ award.description_it }}</span>{% endif %}
</div>
{% endfor %}
