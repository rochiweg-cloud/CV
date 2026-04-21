---
layout: profile
profile: ai-safety
lang: es
page_key: publications
permalink: /ai-safety/es/publications/
title: "Publicaciones"
---

<h1>Publicaciones y Ponencias</h1>

{% for pub in site.data.publications %}
  {% if pub.profiles contains "ai-safety" %}
<div class="pub-entry">
  <div class="pub-title">{{ pub.title_es | default: pub.title }}</div>
  <div class="pub-venue">{{ pub.venue_es }} · {{ pub.date }}</div>
  {% if pub.note_es %}<div class="pub-note">{{ pub.note_es }}</div>{% endif %}
</div>
  {% endif %}
{% endfor %}
