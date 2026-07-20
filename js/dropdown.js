/*!
 * dropdown.js
 * Minimal custom dropdown. Replaces <select>, which cannot be styled.
 * Part of English-3000 — https://github.com/Sanlong-15/English-3000
 */

const CHEV='<svg width="11" height="7" viewBox="0 0 11 7" fill="none">'+
  '<path d="M1 1.5L5.5 5.5L10 1.5" stroke="currentColor" stroke-width="1.6" '+
  'stroke-linecap="round" stroke-linejoin="round"/></svg>';

function makeDD(host, opts, onPick){
  host.innerHTML='<button class="dd-t" type="button"><span></span>'+CHEV+'</button>'+
    '<div class="dd-m">'+opts.map(o=>
      `<button class="dd-o" type="button" data-v="${o.v}">${o.t}</button>`).join('')+'</div>';
  const trig=host.querySelector('.dd-t'), lab=trig.querySelector('span'),
        items=[...host.querySelectorAll('.dd-o')];
  function set(v){
    const o=opts.find(x=>x.v===v)||opts[0];
    lab.textContent=o.t;
    items.forEach(i=>i.classList.toggle('sel', i.dataset.v===o.v));
  }
  trig.onclick=e=>{
    e.stopPropagation();
    const wasOpen=host.classList.contains('open');
    document.querySelectorAll('.dd.open').forEach(d=>d.classList.remove('open'));
    if(!wasOpen) host.classList.add('open');
  };
  items.forEach(i=>i.onclick=e=>{
    e.stopPropagation();
    set(i.dataset.v); host.classList.remove('open'); onPick(i.dataset.v);
  });
  set(opts[0].v);
  return {set};
}
document.addEventListener('click',()=>
  document.querySelectorAll('.dd.open').forEach(d=>d.classList.remove('open')));
document.addEventListener('keydown',e=>{ if(e.key==='Escape')
  document.querySelectorAll('.dd.open').forEach(d=>d.classList.remove('open')); });
