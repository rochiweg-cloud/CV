---
layout: profile
profile: ai-safety
lang: it
page_key: publications
permalink: /ai-safety/it/publications/
title: "Pubblicazioni"
---

<h1>Pubblicazioni e Interventi</h1>

{% for pub in site.data.publications %}
  {% if pub.profiles contains "ai-safety" %}
<div class="pub-entry">
  <div class="pub-title">{{ pub.title_it | default: pub.title }}</div>
  <div class="pub-venue">{{ pub.venue_it }} · {{ pub.date }}</div>
  {% if pub.note_it %}<div class="pub-note">{{ pub.note_it }}</div>{% endif %}
</div>
  {% endif %}
{% endfor %}
