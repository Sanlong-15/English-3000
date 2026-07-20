const fs=require('fs');
const h=fs.readFileSync('english-3000-words.html','utf8');
const D=eval('['+h.match(/const DATA = \[([\s\S]*?)\n\];/)[1]+']');

const L=s=>s.trim().split(/\s+/);
const G={};
const add=(g,words)=>L(words).forEach(w=>G[w]=g);

add('People & family',`people person man woman child boy girl baby adult brother sister son daughter husband wife
parent uncle aunt cousin grandmother grandfather neighbour stranger partner couple generation youth family friend
friendship relative nephew niece kid orphan peasant gentleman fellow companion guest host visitor crowd group team
member individual human citizen resident population community society public majority minority tribe gang couple
prince princess queen king emperor saint monk priest hero slave twin peer`);

add('Body & health',`body head face eye ear nose mouth hair arm leg foot hand finger knee shoulder stomach tooth throat
muscle nerve heart blood skin voice bone breath brain chest elbow jaw forehead lip neck palm spine rib limb liver lung
kidney organ flesh pulse sight health illness disease fever cough headache pain treatment recovery fitness injury wound
surgery therapy medicine doctor nurse dentist surgeon patient clinic hospital pharmacy prescription dose pill drug
symptom diagnose infection bacteria virus cancer disability pregnancy pregnant hygiene nutrition diet obesity scar
ambulance emergency depression anxiety`);

add('Food & drink',`food meal breakfast lunch dinner rice bread meat fruit vegetable milk coffee tea water egg cheese
butter flour noodle chicken beef pork snack dessert recipe flavour taste smell salt sugar oil pepper sauce soup menu
restaurant waiter chef cook kitchen spoon fork knife pot pan bowl plate dish cup mug fridge oven kettle freezer
microwave onion garlic lemon potato mango grape pear peanut pineapple salad sausage shrimp lettuce pasta pizza pie
cake biscuit honey jam jelly pudding cream juice alcohol spice herb protein appetite feast picnic grocery drink eat
bake boil roast peel slice appetite`);

add('Home & furniture',`house home room bedroom bathroom kitchen garden yard wall floor ceiling roof door window
furniture table chair bed shelf drawer cupboard mirror lamp curtain carpet blanket pillow towel soap brush comb
scissors needle rope nail screw hammer ladder basement stair lid bin bucket basket jar bottle box cushion rug sofa
mat mattress bath shower sink candle clock cage shed hut cottage lock key hook pipe tank`);

add('Clothes',`clothes shirt trousers dress skirt jacket coat sock shoe glove belt tie uniform pocket button sleeve
cotton leather hat cap bag wallet purse suitcase luggage jeans scarf necklace jewellery silk wool outfit collar
helmet mask fashion razor shampoo perfume makeup handbag`);

add('Work & business',`work job career profession occupation business company corporation enterprise factory office
workshop staff employee employer worker manager boss owner colleague assistant secretary supervision leadership
management meeting project task deadline schedule appointment contract salary wage overtime pension retirement
recruitment interview vacancy promotion productivity performance efficiency quality standard procedure policy strategy
client customer supplier vendor consultant partnership agency team department headquarters premises industry sector
labour workforce shift training apprentice trade craft engineer mechanic electrician plumber builder farmer cleaner
guard driver operator technician`);

add('Money & shopping',`money cash price cost value profit payment bill invoice receipt discount sale refund tax
budget bank loan credit debt deposit mortgage income revenue expense fund investment investor economy economics
inflation recession currency coin dollar penny pound stock goods product brand package market shop store mall shopping
buy sell purchase pay afford bargain auction lottery insurance warranty guarantee fee wealth poverty bankruptcy
turnover margin ratio percent commission compensation charity donation`);

add('Technology & repair',`computer laptop phone screen keyboard mouse printer software hardware program application
system network server internet email password folder file data database backup storage update download upload driver
device machine engine motor battery cable charger socket switch wire fan sensor circuit voltage electricity power
component part tool equipment machinery repair fix install maintenance fault defect bug error crash signal interface
platform website robot satellite radar disk memory chip terminal port plug outlet code script technology innovation
digital electronic camera radio television speaker microphone`);

add('Travel & transport',`travel trip journey route destination transport vehicle car bus train plane aircraft boat
ship taxi truck lorry bicycle motorbike helicopter ferry rocket ticket fare passenger driver flight airport station
harbour port terminal road street highway motorway lane path bridge tunnel traffic parking petrol fuel tyre brake
wheel seat map luggage baggage passport hotel tourism tourist visitor holiday vacation departure arrival delay sail
sailor navy cart pedal`);

add('Nature & weather',`nature weather rain sun wind cloud snow ice storm fog mist frost lightning rainbow hurricane
drought flood temperature heat climate season winter summer autumn spring sky air water sea ocean river lake stream
mountain hill valley island beach shore coast desert forest jungle field farm land soil ground earth rock stone sand
mud dust dirt fire smoke wave tide reef glacier cave cliff canal pond waterfall environment pollution conservation
wildlife energy oxygen gravity horizon dawn shade shadow breeze moon planet globe`);

add('Animals & plants',`animal dog cat bird fish cow pig horse goat duck chicken snake elephant monkey tiger frog
spider ant bee butterfly rat mouse rabbit sheep lamb eagle owl parrot pigeon shark moth insect mosquito worm creature
mammal species herd cattle nest cage tree flower plant leaf seed root grass bush crop harvest wood oak palm rose
mushroom moss agriculture gene`);

add('Education & learning',`school university college class classroom lesson course subject student pupil teacher
professor lecture seminar homework assignment exam test grade certificate diploma degree scholarship library
laboratory education study learn teach knowledge skill practice experience training research analysis theory
mathematics maths science biology chemistry physics geography history literature grammar vocabulary pronunciation
dictionary notebook pencil pen ruler paper book page chapter essay paragraph sentence word letter spelling reading
writing curriculum qualification quiz`);

add('Time & dates',`time hour minute second day week month year decade century date today tomorrow yesterday morning
afternoon evening night midnight noon midday weekend holiday birthday anniversary period era age future past present
moment while duration schedule calendar deadline season timing pace delay Monday Tuesday Wednesday Thursday Friday
Saturday Sunday January February March April May June July August September October November December`);

add('Places & buildings',`place location area region district zone city town village country province capital
neighbourhood countryside building house shop market restaurant hotel hospital school office factory warehouse church
temple mosque palace museum gallery theatre stadium park playground garage shed tower monument memorial bridge street
square centre corner border boundary frontier entrance exit lobby corridor hall room floor site premises estate
property housing accommodation residence address`);

add('Society & law',`government law legal court judge lawyer police officer soldier army military prison crime
criminal prisoner justice rights freedom liberty democracy election vote politician minister president mayor council
parliament constitution policy regulation legislation treaty union strike protest campaign war peace conflict violence
victim witness offence penalty punishment fine ban prohibit arrest evidence trial settlement dispute inquiry
corruption fraud scandal discrimination equality welfare refugee immigration citizenship nation empire kingdom
authority official duty obligation responsibility privilege`);

add('Feelings & character',`feeling emotion happy sad angry afraid tired excited nervous worried calm proud
ashamed jealous lonely bored surprised shocked confident anxious patient impatient kind cruel generous greedy selfish
honest brave shy stubborn lazy polite rude friendly loyal wise clever talented curious optimistic reluctant desperate
love hate fear joy anger hope worry stress pride shame guilt grief sorrow relief delight pleasure comfort sympathy
courage honesty loyalty dignity patience attitude character personality mood temper spirit humour laughter smile
enthusiasm ambition desire instinct`);

add('Communication & media',`communication conversation talk speak say tell ask answer question reply message
letter email text call phone news newspaper magazine journal article report story headline media television radio
internet website advertisement announcement statement speech presentation discussion debate argument interview
comment feedback opinion advice suggestion complaint apology explanation description translation language accent
dialogue idiom phrase slogan gossip rumour publicity broadcast publication editor journalist writer author reader
audience film movie music song band concert opera theatre drama comedy fiction novel poem poetry poet art artist
painting photograph picture image design designer`);

add('Science & measurement',`science scientist researcher experiment hypothesis method measurement measure size
length width height depth weight volume mass distance speed rate ratio proportion percentage average number amount
quantity total unit metre kilometre centimetre litre kilogram gram inch mile pound degree temperature pressure force
energy power current voltage frequency intensity density particle molecule atom chemical acid mineral metal steel
iron gold silver copper plastic rubber glass concrete cement fibre material substance element compound liquid fluid
gas solid statistics data figure graph chart diagram formula calculation equation angle curve shape square circle
oval triangle sample scale sensor instrument laboratory technique analysis`);

add('Common actions',`go come get take make do have give put keep let run walk sit stand move turn look see watch
hear listen touch hold carry bring send pull push lift drop throw catch open close start stop begin finish continue
try use work play win lose buy sell find lose search choose decide think know understand learn remember forget
believe feel want need like love hate hope wait stay leave arrive return visit meet help follow lead show explain
teach study read write draw count check test build create fix repair clean wash cut break fill empty cook eat drink
sleep wake dress wear live die grow change improve increase reduce save spend cost pay earn borrow lend`);

add('Describing words',`good bad big small large tiny huge enormous long short tall high low wide narrow thick thin
heavy light hot cold warm cool dry wet clean dirty new old young fresh full empty fast slow quick easy difficult hard
soft strong weak rich poor cheap expensive free busy ready sure certain true false right wrong correct safe dangerous
important necessary possible real clear simple complex complicated special normal usual common rare strange similar
different same other main major minor primary basic general specific exact precise accurate perfect beautiful nice
lovely ugly quiet loud bright dark deep flat smooth rough sharp blunt straight round square red blue green yellow
black white brown grey orange pink purple silver golden very really quite rather too enough almost nearly hardly
barely completely totally entirely absolutely extremely highly slightly mostly mainly largely especially particularly
usually normally generally often sometimes rarely always never still already yet soon late early again together
alone quickly slowly carefully clearly easily properly badly well suddenly finally eventually recently currently
previously originally immediately gradually constantly frequently occasionally`);

// fallback by part of speech
const posMap={
 'determiner':'Function words','pronoun':'Function words','preposition':'Function words',
 'conjunction':'Function words','modal verb':'Function words','number':'Function words',
 'verb':'Common actions','phrasal verb':'Common actions',
 'adjective':'Describing words','adverb':'Describing words'
};

let unassigned=[];
D.forEach(x=>{
  const w=x.w.toLowerCase();
  let g=G[w];
  if(!g){
    const base=x.p.split(' / ')[0].trim();
    g=posMap[base]||posMap[x.p]||null;
  }
  if(!g){ g='Ideas & concepts'; unassigned.push(x.w); }
  x.g=g;
});

const counts=D.reduce((a,x)=>(a[x.g]=(a[x.g]||0)+1,a),{});
console.log('GROUPS:',Object.keys(counts).length);
Object.entries(counts).sort((a,b)=>b[1]-a[1]).forEach(([k,v])=>console.log(String(v).padStart(5),k));
console.log('\nfell through to Ideas & concepts:',unassigned.length);
fs.writeFileSync('grouped.json',JSON.stringify(D));
