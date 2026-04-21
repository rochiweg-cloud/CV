---
layout: profile
profile: ai-safety
lang: it
page_key: projects
permalink: /ai-safety/it/projects/
title: "Progetti"
---

<h1>Progetti</h1>

{% for project in site.data.projects %}
  {% if project.profiles contains "ai-safety" %}
<div class="project-card">
  <h3>{{ project.title_it }}</h3>
  <div class="project-meta">{{ project.org }} · {{ project.year }}</div>
  <p>{{ project.description_it }}</p>
  {% if project.conference_it %}<p><em>{{ project.conference_it }}</em></p>{% endif %}
  <div class="project-tags">
    {% for tag in project.tags_it %}
    <span class="project-tag">{{ tag }}</span>
    {% endfor %}
  </div>
</div>
  {% endif %}
{% endfor %}
