---
layout: t2
title: Blog
ogd: Rambling about a lot of things
propd: Rambling about a lot of things
templateEngineOverride: njk, md
---
# blog
---
These are just my rambles about things
<br>[rss feed <i class="ph ph-link"></i>](/_feed/feeds.xml)

<ul>
{%- for post in collections.posts | reverse -%}
    <li><a style="font-style: normal;" href="{{ post.url }}">{{ post.data.title }}</a> - <span style=" font-style: normal;">{{ post.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).replace('.', '') }}</span></li>
  {%- endfor -%}
</ul>