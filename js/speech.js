/*!
 * speech.js
 * Text-to-speech using the browser engine. No audio files needed.
 * Part of English-3000 — https://github.com/Sanlong-15/English-3000
 */

const SPK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" '+
  'stroke-linecap="round" stroke-linejoin="round">'+
  '<path d="M11 5 6 9H2v6h4l5 4V5z"/>'+
  '<path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/></svg>';
const SPEAK={voice:null,rate:0.9,ok:('speechSynthesis' in window)};

function pickVoice(){
  if(!SPEAK.ok)return;
  const vs=speechSynthesis.getVoices();
  if(!vs.length)return;
  SPEAK.voice =
    vs.find(v=>/^en-GB/i.test(v.lang)&&/natural|neural|google/i.test(v.name)) ||
    vs.find(v=>/^en-US/i.test(v.lang)&&/natural|neural|google/i.test(v.name)) ||
    vs.find(v=>/^en-GB/i.test(v.lang)) ||
    vs.find(v=>/^en-US/i.test(v.lang)) ||
    vs.find(v=>/^en/i.test(v.lang)) || null;
}
if(SPEAK.ok){ pickVoice(); speechSynthesis.onvoiceschanged=pickVoice; }

let sayTimer=null;
function say(text,btn){
  if(!SPEAK.ok||!text)return;
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  if(SPEAK.voice){u.voice=SPEAK.voice;u.lang=SPEAK.voice.lang;}else{u.lang='en-GB';}
  u.rate=SPEAK.rate; u.pitch=1;
  if(btn){
    document.querySelectorAll('.say.on').forEach(b=>b.classList.remove('on'));
    btn.classList.add('on');
    clearTimeout(sayTimer);
    const clear=()=>btn.classList.remove('on');
    u.onend=clear; u.onerror=clear;
    sayTimer=setTimeout(clear,6000);
  }
  speechSynthesis.speak(u);
}
