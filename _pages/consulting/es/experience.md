---
layout: profile
profile: consulting
lang: es
page_key: experience
permalink: /consulting/es/experience/
title: "Experiencia"
---

<h1>Experiencia</h1>

{% for entry in site.data.experience %}
  {% if entry.profiles contains "consulting" %}
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
