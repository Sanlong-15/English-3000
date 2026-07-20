const fs=require('fs');
const D=JSON.parse(fs.readFileSync('grouped.json'));
const L=s=>s.trim().split(/\s+/);
const G2={};
const add=(g,w)=>L(w).forEach(x=>G2[x]=g);

add('Time & dates',`Monday Tuesday Wednesday Thursday Friday Saturday Sunday January February March April May June July
August September October November December half quarter dozen occasion session stage interval cycle phase pause
beginning birth childhood lifetime`);

add('People & family',`accountant developer photographer musician actor player coach captain champion critic crew
detective expert folk genius hunter inspector landlord master opponent participant pilot producer representative
rival runner specialist spy volunteer graduate consumer executive candidate sponsor leader enemy guide`);

add('Sport & free time',`sport game match prize football golf soccer race tournament score hobby leisure
entertainment puzzle kite balloon picnic camp album piano guitar orchestra melody rhythm drum trick magic joke
comedy toy medal`);

add('Society & law',`religion ceremony tradition custom festival wedding funeral civilisation heritage embassy riot
invasion battle murder abuse unemployment territory revolution independence identity gender security defeat victory
oath cabinet convention`);

add('Feelings & character',`excitement satisfaction suffering surprise suspicion thought mercy praise panic horror
nightmare pity respect soul talent trouble wisdom honour imagination impulse intention motive luck fate faith belief
doubt confidence concern confusion glory shock ease relief silence mess quarrel insult`);

add('Communication & media',`channel conference contest criticism episode excuse exhibition gesture illustration
interpretation interruption introduction invitation logo poster portrait query questionnaire remark scene sculpture
signature sketch survey tone paint envelope mail post stamp diary log note title label expression contact
misunderstanding nonsense`);

add('Technology & repair',`filter gear kit lens loop magnet pump spark drill pin rod joint blade seal shield slot
indicator infrastructure mechanism version mode output patch shortcut input installation inspection interface
integration parameter net wire spray`);

add('Home & furniture',`bell bench cloth counter deck decoration desk elevator fence gate glue lawn laundry napkin
packet pad parcel pillar pile pool pot powder rag ribbon sack sheet stain string tissue ink column clay coal shelter
fabric ornament marriage divorce household crown`);

add('Money & shopping',`account asset finance funding retail transaction queue reward worth waste rubbish garbage
quota advantage disadvantage benefit`);

add('Work & business',`administration agenda arrangement assembly assessment attendance availability collaboration
commitment committee competition cooperation delivery employment engagement evaluation expertise guidance improvement
initiative institution marketing membership mission monopoly negotiation objective opening operation opportunity
organisation ownership panel preparation production programme proposal registration rejection reliability replacement
reputation requirement reservation resolution resource restriction routine scenario scheme scope selection sequence
series shortage solution stability status structure summary target venue layout legacy manner manufacturer agreement
achievement approval award recommendation deal demand supply agency board branch instruction manual draft record file`);

add('Science & measurement',`dimension radiation reduction segment magnitude maximum minimum mixture motion orbit
peak probability quota ray reflection resistance similarity strain strength threshold variation variety friction
fraction fossil echo evolution earthquake flame flash consumption addition adjustment conversion extension index
proof analysis observation experiment discovery invention finding`);

add('Nature & weather',`fur grain litter horizon flu spot ridge landscape fountain footprint`);
add('Animals & plants',`lion puppy feather shell nut`);
add('Places & buildings',`forum institute interior railway resort suburb domain pavement`);
add('Body & health',`tissue harm poison remedy disaster accident alarm emergency`);
add('Education & learning',`edition psychology architecture`);
add('Travel & transport',`jet flag souvenir`);
add('Function words',`plenty`);

let moved=0;
D.forEach(x=>{
  const w=x.w.toLowerCase();
  if(x.g==='Ideas & concepts' && G2[w]){x.g=G2[w];moved++;}
});
console.log('moved out of catch-all:',moved);

const counts=D.reduce((a,x)=>(a[x.g]=(a[x.g]||0)+1,a),{});
console.log('\nGROUPS:',Object.keys(counts).length);
Object.entries(counts).sort((a,b)=>b[1]-a[1]).forEach(([k,v])=>console.log(String(v).padStart(5),k));
fs.writeFileSync('grouped.json',JSON.stringify(D));
