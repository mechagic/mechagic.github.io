---
layout: t4
title: Directory (WIP)
details: The map to find the non-existant treasure on this website
---
The map to find the non-existent treasure on this website

<div id="mbrd" class="rflex">
	<div id="afmd">
		<h3>All For Me Directory</h3>
		<p>Pages of self-indulgence</p>
		<ul>
			<li><a href="/about">About Me</a></li>
			<li><a href="/about">About Me</a></li>
		</ul>
	</div>
	<hr id="rbrd" class="vr">
	<div id="rdir">
		<h3>Regular Directory</h3>
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
				<li><a href="/extras/tjarp">The June Archive</a> (coming soon)</li>
				<li><a href="/extras/unorthodox_kitten">Unorthodox Kitten</a> (coming soon)</li>
			</ul>
			<li><a href="/directory">Directory</a> <- You're here!</li>
		</ul>
	</div>
	<hr id="ybrd" class="vr">
	<div id="afyd">
		<h3>All For You Directory</h3>
		<p>Pages full of stuff you can use as well!</p>
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

<style>
	h3{
		text-align: center;
	}
	@media screen and (max-width:601px) {
		.rflex{
			display: flex!important;
			flex-direction: column!important;
		}
		#afmd{
			order: 5;
		}
		#rdir{
			order:1;
		}
		#afyd{
			order: 3;
		}

		#mbrd{
			order: 6;
		}
		#rbrd{
			order:2;
		}
		#ybrd{
			order: 4;
		}
	}
</style>