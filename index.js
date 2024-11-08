import{a as p,S as h,i as C}from"./assets/vendor-Qob_5Ba8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function u(l,t=1,a=15){const s="46805132-7b6e04e5dd5e788bcfb9e4740";try{return(await p.get("https://pixabay.com/api/",{params:{key:s,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data}catch(e){throw console.error("Error fetching images:",e),e}}function f(l){const t=document.querySelector(".gallery"),a=l.hits.map(s=>`<li class="gallery-item">
      <a class="gallery-link" href=${s.largeImageURL} data-source=${s.largeImageURL}>
          <div class='image-container'>
          
            <img
              class="gallery-image"
              src=${s.webformatURL}
              alt=${s.tags}
            />
         
           </div>
          <ul class='states-list'>
          <li class='states'>
          <p class='text states-title'>Likes</p>
          <p class='text states-number'>${s.likes}</p>
          </li>
          <li class='states'>
          <p class='text states-title'>Views</p>
          <p class='text states-number'>${s.views}</p>
          </li>
          <li class='states'>
          <p class='text states-title'>Comments</p>
          <p class='text states-number'>${s.comments}</p>
          </li>
          <li class='states'>
          <p class='text states-title'>Downloads</p>
          <p class='text states-number'>${s.downloads}</p>
          </li>
          </ul>
           </a>
        </li>
        `);t.insertAdjacentHTML("beforeend",a.join(""))}const L="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.969C7.03867%206.89915%207.12143%206.84374%207.21255%206.80593C7.30366%206.76812%207.40135%206.74866%207.5%206.74866C7.59865%206.74866%207.69633%206.76812%207.78745%206.80593C7.87857%206.84374%207.96133%206.89915%208.031%206.969L12%2010.9395L15.969%206.969C16.0387%206.89927%2016.1215%206.84395%2016.2126%206.80621C16.3037%206.76847%2016.4014%206.74905%2016.5%206.74905C16.5986%206.74905%2016.6963%206.76847%2016.7874%206.80621C16.8785%206.84395%2016.9613%206.89927%2017.031%206.969C17.1007%207.03873%2017.156%207.12151%2017.1938%207.21262C17.2315%207.30373%2017.2509%207.40138%2017.2509%207.5C17.2509%207.59861%2017.2315%207.69626%2017.1938%207.78737C17.156%207.87848%2017.1007%207.96127%2017.031%208.031L13.0605%2012L17.031%2015.969C17.1007%2016.0387%2017.156%2016.1215%2017.1938%2016.2126C17.2315%2016.3037%2017.2509%2016.4014%2017.2509%2016.5C17.2509%2016.5986%2017.2315%2016.6963%2017.1938%2016.7874C17.156%2016.8785%2017.1007%2016.9613%2017.031%2017.031C16.9613%2017.1007%2016.8785%2017.156%2016.7874%2017.1938C16.6963%2017.2315%2016.5986%2017.2509%2016.5%2017.2509C16.4014%2017.2509%2016.3037%2017.2315%2016.2126%2017.1938C16.1215%2017.156%2016.0387%2017.1007%2015.969%2017.031L12%2013.0605L8.031%2017.031C7.96127%2017.1007%207.87848%2017.156%207.78737%2017.1938C7.69626%2017.2315%207.59861%2017.2509%207.5%2017.2509C7.40138%2017.2509%207.30373%2017.2315%207.21262%2017.1938C7.12151%2017.156%207.03873%2017.1007%206.969%2017.031C6.89927%2016.9613%206.84395%2016.8785%206.80621%2016.7874C6.76847%2016.6963%206.74905%2016.5986%206.74905%2016.5C6.74905%2016.4014%206.76847%2016.3037%206.80621%2016.2126C6.84395%2016.1215%206.89927%2016.0387%206.969%2015.969L10.9395%2012L6.969%208.031C6.89915%207.96133%206.84374%207.87857%206.80593%207.78745C6.76812%207.69633%206.74866%207.59865%206.74866%207.5C6.74866%207.40135%206.76812%207.30366%206.80593%207.21255C6.84374%207.12143%206.89915%207.03867%206.969%206.969Z'%20fill='%23FAFAFB'/%3e%3c/svg%3e",y=document.querySelector(".form"),b=document.querySelector(".gallery"),n=document.getElementById("loader"),o=document.querySelector("#load-btn");let i=1,c=15,m="",w=0,g=new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});y.addEventListener("submit",v);o.addEventListener("click",x);async function v(l){l.preventDefault();let t=l.currentTarget.elements.search.value.trim();if(t){t!==m&&(m=t,i=1,b.innerHTML=""),n.classList.remove("hidden"),o.classList.replace("btn","load-more-hidden");try{const a=await u(t,i,c);a.total===0?C.error({backgroundColor:"#ef4040",position:"topRight",titleColor:"#fff",message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#fff",messageSize:"16",iconColor:"#fff",iconUrl:L,timeout:3e3,maxWidth:432}):(w=a.totalHits,f(a),g.refresh(),o.classList.replace("load-more-hidden","btn"),i+=1,a.hits.length<c&&o.classList.replace("btn","load-more-hidden"))}catch(a){console.log("Error fetching images:",a)}finally{n.classList.add("hidden"),l.target.elements.search.value=""}}}async function x(l){n.classList.remove("hidden"),o.disabled=!0;try{const t=await u(m,i,c);t.hits.length>0?(f(t),g.refresh(),i+=1,t.hits.length<c&&(o.classList.replace("btn","load-more-hidden"),console.log("lll"))):o.classList.replace("btn","load-more-hidden")}catch(t){console.log("Error fetching images:",t)}finally{n.classList.add("hidden"),o.disabled=!1}}
//# sourceMappingURL=index.js.map
