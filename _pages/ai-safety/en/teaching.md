---
layout: profile
profile: ai-safety
lang: en
page_key: teaching
permalink: /ai-safety/en/teaching/
title: "Teaching"
---

<h1>Teaching</h1>

<p>I believe teaching is part of the AI safety mission — building a generation of practitioners who think critically about what they're building and deploying.</p>

{% assign teaching_ids = "uba-lecturer,educacion-earth,idaes-unsam" | split: "," %}

{% for entry in site.data.experience %}
  {% if teaching_ids contains entry.id %}
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
