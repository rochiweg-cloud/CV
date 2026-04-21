---
layout: profile
profile: consulting
lang: en
page_key: about
permalink: /consulting/en/about/
title: "About"
---

<h1>About</h1>

I'm a data scientist with an interdisciplinary background combining data science and AI with social anthropology. I work at the intersection of machine learning, NLP, and geospatial analysis — applied to problems in public policy, urbanism, environment, and social development.

I've worked with international organizations including the **Inter-American Development Bank (IDB)**, government agencies (City of Buenos Aires), NGOs (Techo), and universities in Argentina, the Netherlands, and Italy. I'm comfortable coordinating cross-institutional teams and translating between technical and management languages.

Currently based between **Buenos Aires and Italy** (EU citizen). Trilingual: Spanish (native), English (C2 — EF certified), Italian (professional).

---

## Technical Skills

<div class="skills-grid">
  <div class="skill-group">
    <h4>Languages</h4>
    <p>Python, R, SQL</p>
  </div>
  <div class="skill-group">
    <h4>ML & AI</h4>
    <p>scikit-learn, XGBoost, PyTorch, TensorFlow, Hugging Face Transformers, NLP, Computer Vision</p>
  </div>
  <div class="skill-group">
    <h4>Geospatial & Remote Sensing</h4>
    <p>QGIS, ArcGIS, Google Earth Engine, Rasterio, LULC analysis, satellite image classification</p>
  </div>
  <div class="skill-group">
    <h4>Data & Visualisation</h4>
    <p>pandas, tidyverse, ggplot2, plotly, matplotlib</p>
  </div>
  <div class="skill-group">
    <h4>Infrastructure</h4>
    <p>Docker, Git, AWS / GCP / Azure</p>
  </div>
</div>

---

## Education

{% for deg in site.data.education.degrees %}
<div class="edu-entry">
  <div class="edu-header">
    <span class="edu-title">{{ deg.title_en }}</span>
    <span class="edu-year">{{ deg.year }}</span>
  </div>
  <div class="edu-inst">{{ deg.institution_en }}{% if deg.location %} · {{ deg.location }}{% endif %}</div>
  {% if deg.note_en %}<div class="edu-note">{{ deg.note_en }}</div>{% endif %}
</div>
{% endfor %}

---

## Awards

{% for award in site.data.education.awards %}
<div class="award-entry">
  <span class="award-title">{{ award.title_en }}</span>
  <span class="award-year">{{ award.year }}</span>
  {% if award.description_en and award.description_en != "" %}<span class="award-desc">{{ award.description_en }}</span>{% endif %}
</div>
{% endfor %}
