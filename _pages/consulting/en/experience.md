---
layout: profile
profile: consulting
lang: en
page_key: experience
permalink: /consulting/en/experience/
title: "Experience"
---

<h1>Experience</h1>

{% for entry in site.data.experience %}
  {% if entry.profiles contains "consulting" %}
<div class="exp-entry">
  <div class="exp-header">
    <span class="exp-role">{{ entry.role_en }}</span>
    <span class="exp-dates">{{ entry.start }}{% if entry.end %} – {{ entry.end }}{% endif %}</span>
  </div>
  <div class="exp-org">{{ entry.org }}{% if entry.context_en and entry.context_en != "" %} — {{ entry.context_en }}{% endif %}{% if entry.location %} · {{ entry.location }}{% endif %}</div>
  <ul>
    {% for bullet in entry.bullets_en %}
    <li>{{ bullet }}</li>
    {% endfor %}
  </ul>
</div>
  {% endif %}
{% endfor %}
