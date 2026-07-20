/*!
 * app.js
 * Filtering, rendering, flashcards and keyboard shortcuts.
 * Part of English-3000 — https://github.com/Sanlong-15/English-3000
 */

/* --- elements and state --- */
const list=document.getElementById('list'), q=document.getElementById('q'),
      count=document.getElementById('count'), modeBtn=document.getElementById('mode'),
      fc=document.getElementById('fc');
let view=DATA, fi=0, flashMode=false, fLvl='', fPos='', fGrp='';

/* --- helpers --- */
function esc(s){return s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
const LV=['A1','A2','B1'];

/* --- build the filter dropdowns --- */
const GRP=[...new Set(DATA.map(x=>x.g))].sort();
const ddGrpApi=makeDD(document.getElementById('ddGrp'),
  [{v:'',t:'All groups'}].concat(GRP.map(g=>({v:g,t:g+' ('+DATA.filter(x=>x.g===g).length+')'}))),
  v=>{fGrp=v; filter();});
makeDD(document.getElementById('ddLvl'),
  [{v:'',t:'All levels'},{v:'A1',t:'A1'},{v:'A2',t:'A2'},{v:'B1',t:'B1'},{v:'B2',t:'B2'}],
  v=>{fLvl=v; filter();});
makeDD(document.getElementById('ddPos'),
  [{v:'',t:'All types'}].concat([...new Set(DATA.map(x=>x.p))].sort().map(p=>({v:p,t:p}))),
  v=>{fPos=v; filter();});

/* --- click handling: speak buttons and group tags --- */
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-say]');
  if(b){ say(b.dataset.say, b.classList.contains('say')?b:null); return; }
  const g=e.target.closest('[data-grp]');
  if(g && typeof ddGrpApi!=='undefined'){
    fGrp=g.dataset.grp; ddGrpApi.set(fGrp); filter();
    window.scrollTo({top:0,behavior:'smooth'});
  }
});

/* --- filtering and rendering --- */
function filter(){
  const t=q.value.trim().toLowerCase(), L=fLvl, P=fPos, Gp=fGrp;
  view=DATA.filter(x=>
    (!L||x.c===L)&&(!P||x.p===P)&&(!Gp||x.g===Gp)&&
    (!t||x.w.toLowerCase().includes(t)||x.d.toLowerCase().includes(t)||x.k.includes(t)));
  fi=0; render();
}
function render(){
  count.textContent=view.length+' / '+DATA.length+' words';
  if(flashMode){drawCard();return;}
  if(!view.length){list.innerHTML='<div class="empty">No word found.</div>';return;}
  list.innerHTML=view.map(x=>{
    const n=DATA.indexOf(x)+1;
    return `<div class="card">
      <div class="top"><span class="w">${esc(x.w)}</span>
        <button class="say" data-say="${esc(x.w)}" title="Hear this word">${SPK}</button>
        <span class="tag">${esc(x.p)}</span>
        <span class="tag lvl ${x.c}">${x.c}</span>
        <span class="tag grp" data-grp="${esc(x.g)}" title="Show only this group">${esc(x.g)}</span>
        <span class="num">#${n}</span></div>
      <div class="def">${esc(x.d)}</div>
      <div class="kh">${esc(x.k)}</div>
      <ul>${x.e.map((s,i)=>`<li class="${LV[i]}"><b>${LV[i]}</b><span>${esc(s)}</span>`+
        `<button class="say saysm" data-say="${esc(s)}" title="Hear this sentence">${SPK}</button></li>`).join('')}</ul>
    </div>`;
  }).join('');
}
function drawCard(){
  if(!view.length){fc.innerHTML='<div class="empty">No word found.</div>';return;}
  const x=view[fi];
  fcn.textContent=(fi+1)+' of '+view.length;
  fcw.textContent=x.w;
  fcp.textContent=x.p+' · '+x.c+' · '+x.g;
  fcd.textContent=x.d; fck.textContent=x.k;
  fce.innerHTML=x.e.map((s,i)=>`<li class="${LV[i]}"><b>${LV[i]}</b><span>${esc(s)}</span>`+
    `<button class="say saysm" data-say="${esc(s)}" title="Hear this sentence">${SPK}</button></li>`).join('');
  fcsay.innerHTML=SPK; fcsay.dataset.say=x.w;
  fcb.classList.add('hide'); flipb.textContent='Show meaning';
}
function flip(){fcb.classList.toggle('hide');
  flipb.textContent=fcb.classList.contains('hide')?'Show meaning':'Hide meaning';}
function next(){fi=(fi+1)%view.length;drawCard();}
function prev(){fi=(fi-1+view.length)%view.length;drawCard();}

modeBtn.onclick=()=>{
  flashMode=!flashMode;
  modeBtn.classList.toggle('on',flashMode);
  modeBtn.textContent=flashMode?'List view':'Flashcards';
  list.style.display=flashMode?'none':'block';
  fc.classList.toggle('show',flashMode);
  render();
};
q.oninput=filter;

/* --- controls and keyboard --- */
const slowBtn=document.getElementById('slow');
slowBtn.onclick=()=>{
  SPEAK.rate = SPEAK.rate===0.9 ? 0.55 : 0.9;
  slowBtn.classList.toggle('on', SPEAK.rate===0.55);
};
if(!SPEAK.ok){ slowBtn.disabled=true; slowBtn.title='Your browser has no speech engine'; }

document.addEventListener('keydown',e=>{
  if(document.activeElement===q)return;
  if(e.key==='s'||e.key==='S'){
    const x = flashMode ? view[fi] : view[0];
    if(x) say(x.w, flashMode?fcsay:null);
    return;
  }
  if(!flashMode)return;
  if(e.key==='ArrowRight')next(); if(e.key==='ArrowLeft')prev();
  if(e.key===' '){e.preventDefault();flip();}
});
render();
