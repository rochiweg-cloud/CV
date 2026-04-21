---
layout: profile
profile: ai-safety
lang: es
page_key: projects
permalink: /ai-safety/es/projects/
title: "Proyectos"
---

<h1>Proyectos</h1>

{% for project in site.data.projects %}
  {% if project.profiles contains "ai-safety" %}
<div class="project-card">
  <h3>{{ project.title_es }}</h3>
  <div class="project-meta">{{ project.org }} · {{ project.year }}</div>
  <p>{{ project.description_es }}</p>
  {% if project.conference_es %}<p><em>{{ project.conference_es }}</em></p>{% endif %}
  <div class="project-tags">
    {% for tag in project.tags_es %}
    <span class="project-tag">{{ tag }}</span>
    {% endfor %}
  </div>
</div>
  {% endif %}
{% endfor %}
