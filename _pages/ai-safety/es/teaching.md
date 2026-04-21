---
layout: profile
profile: ai-safety
lang: es
page_key: teaching
permalink: /ai-safety/es/teaching/
title: "Docencia"
---

<h1>Docencia</h1>

<p>Creo que enseñar es parte de la misión de seguridad en IA: construir una generación de profesionales que piensen críticamente sobre lo que están desarrollando.</p>

{% assign teaching_ids = "uba-lecturer,educacion-earth,idaes-unsam" | split: "," %}

{% for entry in site.data.experience %}
  {% if teaching_ids contains entry.id %}
<div class="exp-entry">
  <div class="exp-header">
    <span class="exp-role">{{ entry.role_es }}</span>
    <span class="exp-dates">{{ entry.start }}{% if entry.end %} – {{ entry.end }}{% endif %}</span>
  </div>
  <div class="exp-org">{{ entry.org }}{% if entry.context_es and entry.context_es != "" %} — {{ entry.context_es }}{% endif %}{% if entry.location %} · {{ entry.location }}{% endif %}</div>
  <ul>
    {% for bullet in entry.bullets_es %}
    <li>{{ bullet }}</li>
    {% endfor %}
  </ul>
</div>
  {% endif %}
{% endfor %}
