---
layout: t2
title: Journal
details: I'm calling this a journal instead of a blog because all it really is are my thoughts and ramblings
templateEngineOverride: njk, md
---

[rss feed](/2feed/feeds.xml)
<ul>
{%- for post in collections.posts | reverse -%}
    <li><a style="font-style: normal;" href="{{ post.url }}">{{ post.data.title }}</a> - <span style=" font-style: normal;">{{ post.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).replace('.', '') }}</span></li>
  {%- endfor -%}
</ul>