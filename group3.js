const fs=require('fs');
const D=JSON.parse(fs.readFileSync('grouped.json'));
const L=s=>s.trim().split(/\s+/);
const think=new Set(L(`think know understand learn remember forget believe decide consider assume suppose guess
imagine realise recognise expect hope wish want need prefer choose doubt wonder mean intend plan judge compare
analyse examine investigate discover determine conclude estimate calculate predict solve identify define explain
interpret reflect focus concentrate notice observe perceive suspect trust agree disagree accept refuse admit deny
argue persuade convince justify prove indicate suggest imply assess evaluate review regard`));

const move=new Set(L(`go come get take walk run move turn lift carry bring send pull push drop throw catch climb
jump kick hit knock touch hold sit stand lie rise fall fly swim ride drive travel arrive leave return enter exit
follow chase escape hurry rush slide slip bounce float dive bend fold stretch shake squeeze press pour fill empty
open close cut break build dig plant wash clean cook bake boil roast peel wear dress pack tie
lock reach approach cross pass enter`));

let n={phrasal:0,think:0,move:0,adv:0};
D.forEach(x=>{
  const w=x.w.toLowerCase();
  if(x.p==='phrasal verb'){x.g='Phrasal verbs';n.phrasal++;return;}
  if(x.g==='Common actions'){
    if(think.has(w)){x.g='Thinking & deciding';n.think++;}
    else if(move.has(w)){x.g='Actions & movement';n.move++;}
  }
  if(x.g==='Describing words' && /adverb/.test(x.p)){x.g='Adverbs & linking words';n.adv++;}
});
console.log(n);

const counts=D.reduce((a,x)=>(a[x.g]=(a[x.g]||0)+1,a),{});
console.log('\nGROUPS:',Object.keys(counts).length);
Object.entries(counts).sort((a,b)=>b[1]-a[1]).forEach(([k,v])=>console.log(String(v).padStart(5),k));
fs.writeFileSync('grouped.json',JSON.stringify(D));
