---
layout: t2
title: My Writing
details: Some are good, some are bad, and some were made by a bug having a bad day
templateEngineOverride: njk, md
---

[rss feed <i class="ph ph-link"></i>](/2feed/writing_feed.xml) for all categories

### Short Stories And Concepts <i class="ph ph-notebook"></i>
My short stories, I mostly make them up on the fly.
<br>[rss feed <i class="ph ph-link"></i>](/2feed/story_feed.xml)

<ul>
{%- for post in collections.story | reverse -%}
    <li><a style="font-style: normal;" href="{{ post.url }}">{{ post.data.title }}</a> - <span style=" font-style: normal;">{{ post.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).replace('.', '') }}</span></li>
  {%- endfor -%}
</ul>

### Poetry <i class="ph ph-scroll"></i>
All of these are experimental and some of these are pretentious
<br>[rss feed <i class="ph ph-link"></i>](/2feed/poetry_feed.xml)

<ul>
{%- for post in collections.poetry | reverse -%}
     <li><a style="font-style: normal;" href="{{ post.url }}">{{ post.data.title }}</a> - <span style=" font-style: normal;">{{ post.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).replace('.', '') }}</span></li>
  {%- endfor -%}
</ul>

### Archives <i class="ph ph-archive"></i>
Old stuff from my original writing blog on Tumblr, might rewrite IOTD. SaH is under rewriting.
<br>No rss feed needed

<ul>
{%- for post in collections.archive | reverse -%}
     <li><a style="font-style: normal;" href="{{ post.url }}">{{ post.data.title }}</a> - <span style=" font-style: normal;">{{ post.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).replace('.', '') }}</span></li>
  {%- endfor -%}
</ul>