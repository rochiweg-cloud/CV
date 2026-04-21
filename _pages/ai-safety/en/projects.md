---
layout: profile
profile: ai-safety
lang: en
page_key: projects
permalink: /ai-safety/en/projects/
title: "Projects"
---

<h1>Projects</h1>

{% for project in site.data.projects %}
  {% if project.profiles contains "ai-safety" %}
<div class="project-card">
  <h3>{{ project.title_en }}</h3>
  <div class="project-meta">{{ project.org }} · {{ project.year }}</div>
  <p>{{ project.description_en }}</p>
  {% if project.conference_en %}<p><em>{{ project.conference_en }}</em></p>{% endif %}
  <div class="project-tags">
    {% for tag in project.tags_en %}
    <span class="project-tag">{{ tag }}</span>
    {% endfor %}
  </div>
</div>
  {% endif %}
{% endfor %}
