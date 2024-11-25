---
layout: t1
title: Website
ogd: A very cool personal website that belongs to a cockroach that learned how to type
propd: A very cool personal website that belongs to a cockroach that learned how to type
---

# !!! greetings !!!
# !! users !!
---
<link rel="prefetch" href="/_img/1entrance_hover.webp" />

***click the image below to enter the website!***

[<img src="/_img/1entrance.webp" onclick="this.src = '/_img/1entrance_hover.webp;" onmouseover="this.src = '/_img/1entrance_hover.webp';"  onmouseout="this.src = '/_img/1entrance.webp';" style="width:80%; border-radius:15px; border:2px solid var(--brdr);">](/home)
<br>This website is mobile friendly<br> For desktop it is best viewed on a 1536x702 screen with firefox and javascript enabled.

## Some Extra Stuff
<div class="bx1">
  <div class="crnlft">
Have a button that I made:
<br><br>
<img class="bton" src="/_img/1button.webp">
<br><br>
<textarea class="copyButton"><a href="https://mechagic.lexiqqq.com/" target="_blank"><img src="https://i.ibb.co/wyKpKxK/1button.png"></a></textarea>
</div>
 <hr class="vr">
<div class="crnrht">
    Sign my guestbook!

[<img src="/_img/1guestbook.webp" style="width:50%; border-radius:15px; border:2px solid var(--brdr);">](/guestbook)

  </div>
</div>

## My Friendos

A buncha people I met on the `r/neocities discord server`

[<img class="bton" style="image-rendering: smooth;" src="https://xobyte.org/files/poyo-reporter.png">](https://reporter.poyo.study/) [<img class="bton" src="https://april.lexiqqq.com/buttons/button.webp">](https://april.lexiqqq.com/) [<img class="bton" src="https://xobyte.org/files/button.gif">](https://xobyte.org/) [<img class="bton" src="https://moosyu.github.io/assets/swirlCatppuccin.gif">](https://moosyu.github.io/)

## Latest Updates
Code taken from [moosyu <i class="ph ph-link"></i>](https://moosyu.nekoweb.org/pages/guides/latest_commit/)
<br> `Disclaimer`: It takes a while for the changes to appear on the website
<div id="commitLink"><div id="shortHash"></div><div id="commitLatest"></div></div>
<script>
  fetch('https://api.github.com/repos/GenoTheMundane/mechasite/commits?per_page=1')
      .then(res => res.json())
      .then(res => {
          let sha = res[0].sha;
          let authorDate = new Date(res[0].commit.author.date);
          document.getElementById('commitLatest').innerText = res[0].commit.message;
          document.getElementById('shortHash').innerText = "latest commit:" + sha.substring(0, 7) + " on " + authorDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' });
          document.getElementById('commitLink').href = "https://github.com/GenoTheMundane/mechasite/commit/" + sha
      });
</script>

## Microblog
Code taken from [bechnokid <i class="ph ph-link"></i>](https://bechnokid.neocities.org/resources/tut_statuscafefeed)

<div id='feed-reader'></div>

<script>
  const feedURL = 'https://status.cafe/users/mechagic.atom';
  fetch(feedURL).then(response =>response.text()).then(str =>new window.DOMParser().parseFromString(str, "text/xml")).then(data =>{
    const entries = data.querySelectorAll("entry");
    let html = ``;
    let title,
    content,
    dateString = ``;
    entries.forEach(el =>{
      title = el.querySelector("title").innerHTML.slice(0, 11).trim();
      content = el.querySelector("content").textContent.trim();
      dateString = el.querySelector("published").innerHTML.slice(0, 10);
      html += ` 
      <p> $ {title} - $ {dateString}<p> 
      <p> $ {content} </p>`;});
    let html2 = ``;for (i = 0; i < 5; i++) {title = entries[i].querySelector("title").innerHTML.slice(0, 12).trim();content = entries[i].querySelector("content").textContent.trim();dateString = entries[i].querySelector("published").innerHTML.slice(0,10);html2 += `<p>${title} - ${dateString}<p><p>${content}</p>  <hr class="th">`;
    }
    html2 += ` <p> <a href='https://status.cafe/users/mechagic'> See more at StatusCafe <i class="ph ph-link"></i></a></p> `; document.getElementById("feed-reader").innerHTML = html; document.getElementById("feed-reader").innerHTML = html2;
  })
</script>

## Webrings

<div class="invis">
     <button style="margin:0px 0px 15px 0px;" class="accordion">Open</button>
        <div class="panel">
          <div style="width:90%; margin:auto;" class="bx2">
            <div class="flex">
                    <div style="width:20%; margin: auto;">
                      <a href="https://peanits.lol/webrings/musicring/index.php"><img src="https://peanits.lol/webrings/musicring/assets/button.gif"></a><br>
                      <a href="https://peanits.lol/webrings/musicring/prev.php?slug=mechagic">prev</a>
                      <a href="https://peanits.lol/webrings/musicring/rand.php">rand</a>
                      <a href="https://peanits.lol/webrings/musicring/next.php?slug=mechagic">next</a>
                    </div>
                    <div style="width: fit-content; margin: auto;" id='furryring'>
                        <script type="text/javascript" src="https://furryring.neocities.org/onionring-variables.js"></script>
                        <script type="text/javascript" src="https://furryring.neocities.org/onionring-widget.js"></script>
                    </div>
                    <div id='xenicRing'>
                        <script type="text/javascript" src="https://xenics.neocities.org/onionring-variables.js"></script>
                        <script type="text/javascript" src="https://xenics.neocities.org/onionring-widget.js"></script>
                        <link rel="stylesheet" href="https://xenics.neocities.org/onionring.css">
                    </div>
                    <script src="https://webcatz.neocities.org/beepbox-webring/ring.js"></script>
                    <!--START OF SELF INSERT WEBRING-->
                    <div id="selfinsertwebring">
                        <script src="/_assets/showWebring.js"></script>
                    </div>
                    <!--END OF SELF INSERT WEBRING-->
        </div>
        </div>
      </div>
</div>