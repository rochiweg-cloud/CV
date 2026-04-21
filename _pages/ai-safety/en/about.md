---
layout: profile
profile: ai-safety
lang: en
page_key: about
permalink: /ai-safety/en/about/
title: "About"
---

<h1>About</h1>

I'm a social data scientist working at the intersection of **AI governance, community building, and technical research**. My work focuses on making AI development safer and more beneficial — through governance research, field-building, and teaching.

Currently a **CORDA Democracy Fellow** (Apart Research / Odyssean Institute), contributing to the Odyssean Process for AI Governance: building decision-support tools and educational materials for citizens' assemblies on AI (UK 2026, global 2027). I'm also a founding team member of the **Italian AI Safety Community** and a member of **BAISH (Buenos Aires AI Safety Hub)**.

My background is unusual: I combine a degree in social anthropology with a diploma in data science and AI, and professional experience as a data scientist in public policy and urban development. I bring a sociotechnical perspective to AI risk that goes beyond purely technical framings — asking not just *what* AI can do, but *how* it reshapes institutions, power, and decision-making.

Graduate of the **BlueDot Impact AGI Strategy Course** (2026). Trilingual: Spanish (native), English (C2 — EF certified), Italian (professional).

---

## Technical Skills

<div class="skills-grid">
  <div class="skill-group">
    <h4>AI/ML</h4>
    <p>Python, PyTorch, TensorFlow, Hugging Face Transformers, scikit-learn, XGBoost; NLP (classification, topic modelling, embeddings), Computer Vision</p>
  </div>
  <div class="skill-group">
    <h4>Data & Research Tools</h4>
    <p>R (tidyverse), SQL, pandas, NumPy; QGIS, Google Earth Engine, Rasterio; Git, Docker, AWS/GCP/Azure</p>
  </div>
  <div class="skill-group">
    <h4>Research Methods</h4>
    <p>Qualitative coding, expert elicitation analysis, sensitivity analysis, causal loop diagramming, scenario modelling, mixed-methods social research</p>
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
