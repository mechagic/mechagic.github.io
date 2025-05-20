// webstring by june @ webcatz.neocities.org

// settings
webring = {

  // list of sites in the ring 
  sites: [
    "https://mechagic.party/webring/",
    "https://tofutush.github.io/The-Iron-Ragdoll/misc/links/",
    "https://ironstar.nekoweb.org/",
    "https://bibliohound.neocities.org/webrings/",
    "https://bang1338.nekoweb.org/",
    "https://lockheartlove.neocities.org/",
    "https://entropically.neocities.org/",
    "https://theoliveoli.blahaj.land/links/",
    "https://jbcarreon123.nekoweb.org/webrings/",
    "https://riflesniper.art/funstuff/",
      ],

  // html inserted as your widget
  // PREV and NEXT get replaced with neighboring site urls
  widget: `
    <div id="gitgudring">
     <div id="gitgudlock">
       <br class="low">
         <a class="git" href="https://mechagic.party/extras/gitgudring"><img src="https://mechagic.party/2images/3giticon.webp" alt="go to webring"></a>
       <br class="low">
      </div>
     <div id="gitgudlock">
      <a class="git" href="PREV"><img class="nav" src="https://mechagic.party/2images/3gitprev.webp" alt="PREV"></a>
      <a class="git" href="RANDOM"><img src="https://mechagic.party/2images/3gitrand.webp" alt="RANDOM"></a>
      <a class="git" href="NEXT"><img class="nav" src="https://mechagic.party/2images/3gitnext.webp" alt="NEXT"></a>
    </div>
  `,

  // widget css
  stylesheet: "https://mechagic.party/1stylescripts/gitgudring.css",

  // html inserted instead of your widget on sites that aren't in the ring
  error: "<div>This website isn't part of the GitGudRing yet! GET TO IT NOW WEBMASTER MECHAGIC!!!</div>",

};



// code
webring.index = location.href.startsWith("file://") ? 0 : webring.sites.findIndex(url => location.href.startsWith(url));
if (webring.index === -1) document.currentScript.outerHTML = webring.error;
else {
  let sheet = document.createElement("link");
  sheet.rel = "stylesheet", sheet.href = webring.stylesheet;
  document.head.appendChild(sheet);
  webring.widget = webring.widget.replace("PREV", webring.sites.at(webring.index - 1));
  webring.widget = webring.widget.replace("NEXT", webring.sites[(webring.index + 1) % webring.sites.length]);
  webring.widget = webring.widget.replace("RANDOM", webring.sites[Math.floor(Math.random() * webring.sites.length)]);
  document.currentScript.outerHTML = webring.widget;
}
delete webring;