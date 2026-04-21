---
layout: profile
profile: ai-safety
lang: en
page_key: publications
permalink: /ai-safety/en/publications/
title: "Publications"
---

<h1>Publications & Talks</h1>

{% for pub in site.data.publications %}
  {% if pub.profiles contains "ai-safety" %}
<div class="pub-entry">
  <div class="pub-title">{{ pub.title_en | default: pub.title }}</div>
  <div class="pub-venue">{{ pub.venue_en }} · {{ pub.date }}</div>
  {% if pub.note_en %}<div class="pub-note">{{ pub.note_en }}</div>{% endif %}
</div>
  {% endif %}
{% endfor %}
