const screens=[...document.querySelectorAll('.screen')];
function show(i){screens.forEach(s=>s.classList.remove('active'));screens[i].classList.add('active');}
function startExperience(){document.getElementById('bgMusic').play();show(1);}
const captions=Array.from({length:18},(_,i)=>`Kenangan indah #${i+1} ❤️`);
let idx=0;
function render(){photo.src=`images/foto${idx+1}.jpg`;caption.textContent=captions[idx];counter.textContent=`${idx+1}/18`; }
render();
function nextPhoto(){idx=(idx+1)%18;render();}
function prevPhoto(){idx=(idx+17)%18;render();}
function gotoLetter(){show(2);typeLetter();}
let typed=false;
function typeLetter(){
if(typed)return; typed=true;
const text=`Selamat ulang tahun ke-22, Tuti.\n\nTerima kasih karena sudah hadir dalam hidupku. Setiap tawa, cerita, dan momen yang kita lalui menjadi kenangan yang sangat berarti bagiku. Aku berharap di usia yang baru ini kamu selalu sehat, bahagia, dan dikelilingi oleh orang-orang yang menyayangimu.\n\nAku mungkin tidak sempurna, tetapi aku akan selalu berusaha menjadi seseorang yang bisa mendukungmu dan membuatmu tersenyum.\n\nDan ada satu hal lagi...\nAku ingin mengundang putri kesayanganku untuk dinner pada tanggal 5 pukul 19.00 WIB.\n\nLove,\nIza ❤️`;
let i=0; const el=document.getElementById('letter');
const t=setInterval(()=>{el.textContent+=text[i++]||''; if(i>text.length)clearInterval(t)},25);
}
function gotoGift(){show(3);}
const winner=Math.floor(Math.random()*3)+1;
function gift(n){if(n===winner){giftResult.textContent='Kamu menemukan kejutan spesial ❤️'; setTimeout(()=>show(4),1000);} else giftResult.textContent='Hehe, coba lagi 😋';}
function gotoFinal(){show(5);}
function accept(){finalMessage.innerHTML='<h2>Yeay! ❤️</h2><p>Aku tidak sabar menghabiskan malam spesial itu bersamamu.<br>Love, Iza</p>';}
const target=new Date('2026-06-05T19:00:00+07:00').getTime();
setInterval(()=>{
const d=target-Date.now();
const days=Math.floor(d/86400000);
const hrs=Math.floor(d%86400000/3600000);
const mins=Math.floor(d%3600000/60000);
const secs=Math.floor(d%60000/1000);
countdown.textContent=`${days} Hari ${hrs} Jam ${mins} Menit ${secs} Detik`;
},1000);
