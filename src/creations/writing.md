---
layout: t2
title: My Writing
details: Some are good, some are bad, and some were made by a bug having a bad day
templateEngineOverride: njk, md
---

[rss feed](/2feed/writing_feed.xml) for all categories, if you want to read my fanfiction go [here](https://archiveofourown.org/users/mechagic_party)  

### Short Stories And Concepts
My short stories, I mostly make them up on the fly.
<br>[rss feed](/2feed/story_feed.xml)

<ul>
{%- for post in collections.story | reverse -%}
    <li><a style="font-style: normal;" href="{{ post.url }}">{{ post.data.title }}</a> - <span style=" font-style: normal;">{{ post.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).replace('.', '') }}</span></li>
  {%- endfor -%}
</ul>

### Poetry
All of these are experimental and some of these are pretentious
<br>[rss feed](/2feed/poetry_feed.xml)

<ul>
{%- for post in collections.poetry | reverse -%}
     <li><a style="font-style: normal;" href="{{ post.url }}">{{ post.data.title }}</a> - <span style=" font-style: normal;">{{ post.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).replace('.', '') }}</span></li>
  {%- endfor -%}
</ul>

### Archives
Old stuff from my original writing blog on Tumblr, might rewrite IOTD. SaH is under rewriting.
<br>No rss feed needed

<ul>
{%- for post in collections.archive | reverse -%}
     <li><a style="font-style: normal;" href="{{ post.url }}">{{ post.data.title }}</a> - <span style=" font-style: normal;">{{ post.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).replace('.', '') }}</span></li>
  {%- endfor -%}
</ul>