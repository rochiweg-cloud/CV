---
layout: profile
profile: consulting
lang: it
page_key: about
permalink: /consulting/it/about/
title: "Chi sono"
---

<h1>Chi sono</h1>

Sono un data scientist con un profilo interdisciplinare che combina data science e IA con l'antropologia sociale. Lavoro all'intersezione tra machine learning, NLP e analisi geospaziale, applicati a problemi di politiche pubbliche, urbanistica, ambiente e sviluppo sociale.

Ho lavorato con organizzazioni internazionali tra cui la **Banca Interamericana di Sviluppo (IDB)**, enti governativi (Comune di Buenos Aires), ONG (Techo) e università in Argentina, Paesi Bassi e Italia. Sono in grado di coordinare team cross-istituzionali e di fare da ponte tra linguaggi tecnici e gestionali.

Attualmente tra **Buenos Aires e l'Italia** (cittadino UE). Trilingue: spagnolo (madrelingua), inglese (C2 — certificato EF), italiano (professionale).

---

## Competenze Tecniche

<div class="skills-grid">
  <div class="skill-group">
    <h4>Linguaggi</h4>
    <p>Python, R, SQL</p>
  </div>
  <div class="skill-group">
    <h4>ML e IA</h4>
    <p>scikit-learn, XGBoost, PyTorch, TensorFlow, Hugging Face Transformers, NLP, Computer Vision</p>
  </div>
  <div class="skill-group">
    <h4>Geospaziale e Telerilevamento</h4>
    <p>QGIS, ArcGIS, Google Earth Engine, Rasterio, analisi LULC, classificazione di immagini satellitari</p>
  </div>
  <div class="skill-group">
    <h4>Dati e Visualizzazione</h4>
    <p>pandas, tidyverse, ggplot2, plotly, matplotlib</p>
  </div>
  <div class="skill-group">
    <h4>Infrastruttura</h4>
    <p>Docker, Git, AWS / GCP / Azure</p>
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
