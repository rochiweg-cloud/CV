---
layout: profile
profile: consulting
lang: it
page_key: experience
permalink: /consulting/it/experience/
title: "Esperienza"
---

<h1>Esperienza</h1>

{% for entry in site.data.experience %}
  {% if entry.profiles contains "consulting" %}
<div class="exp-entry">
  <div class="exp-header">
    <span class="exp-role">{{ entry.role_it }}</span>
    <span class="exp-dates">{{ entry.start }}{% if entry.end %} – {{ entry.end }}{% endif %}</span>
  </div>
  <div class="exp-org">{{ entry.org }}{% if entry.context_it and entry.context_it != "" %} — {{ entry.context_it }}{% endif %}{% if entry.location %} · {{ entry.location }}{% endif %}</div>
  <ul>
    {% for bullet in entry.bullets_it %}
    <li>{{ bullet }}</li>
    {% endfor %}
  </ul>
</div>
  {% endif %}
{% endfor %}
