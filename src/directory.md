---
layout: t4
title: Directory
details: The map to find the non-existant treasure on this website
---
The map to find the non-existent treasure on this website

<div class="drctry">
<div id="mbrd" class="rflex">
	<div id="rdir">
		<h3>Regular Directory</h3>
		<p>A regular ol' site map</p>
		<ul>
			<li><a href="/">Landing Page</a></li>
			<ul>
				<li><a href="/creations/guestbook">Guestbook</a></li>
			</ul>
			<li><a href="/about">About Me</a></li>
			<li><a href="/journal">Journal</a></li>
			<li><a href="/creations">Creations</a></li>
			<ul>
				<li><a href="/creations/oc_wiki">OC Wiki</a></li>
				<li><a href="/creations/art">Art</a></li>
				<li><a href="/creations/pixels">Pixels</a></li>
				<li><a href="/creations/writing">Writing</a></li>
				<li><a href="/creations/music">Music</a></li>
				<li><a href="/creations/other_works">Other Works</a></li>
			</ul>
			<li><a href="/platforms">Platforms</a></li>
			<li><a href="/resources">Resources</a></li>
			<li><a href="/extras">Extras</a></li>
			<ul>
				<li><a href="/extras/gitgudring">Webring</a></li>
				<li><a href="/extras/quizzes">Quizzes</a></li>
				<li><a href="/extras/tjarp">The June Archive</a></li>
				<li><a href="/extras/unorthodox_kitten">Unorthodox Kitten</a> (coming soon)</li>
			</ul>
			<li><a href="/directory">Directory</a> <- You're here!</li>
		</ul>
	</div>
	<hr id="brd" class="vr">
	<div id="afyd">
		<h3>All For You Directory</h3>
		<p>Pages full of stuff you can use!</p>
		<ul>
			<li><a href="/creations">Creations</a></li>
			<ul>
				<li><a href="/creations/pixels">Pixels</a></li>
			</ul>
			<li><a href="/resources">Resources</a></li>
			<li><a href="/extras">Extras</a></li>
			<ul>
				<li><a href="/extras/gitgudring">Webring</a></li>
			</ul>
		</ul>
	</div>
</div>
</div>

<style>
	.drctry{
		width:75%;
		margin: auto;
	}
	@media screen and (max-width:801px) {
		.drctry{
			width:80%;
		}
	@media screen and (max-width:601px) {
		.drctry{
			width:100%;
		}
		.rflex{
			display: flex!important;
			flex-direction: column!important;
		}
		#rdir{
			order:1;
		}
		#afyd{
			order: 3;
		}
		#brd{
			order: 2;
		}
	}
</style>