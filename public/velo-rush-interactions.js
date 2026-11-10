(()=>{
if(window.__VELO_RUSH_INTERACTIONS__)return;
window.__VELO_RUSH_INTERACTIONS__=true;
const mobileMenu=document.getElementById('mobile-menu');
const mobileLinks=document.getElementById('mobile-links');
if(mobileMenu&&mobileLinks){
 mobileMenu.addEventListener('click',()=>{const open=mobileLinks.classList.toggle('open');mobileMenu.setAttribute('aria-expanded',open?'true':'false');mobileMenu.textContent=open?'CLOSE':'MENU'});
 mobileLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobileLinks.classList.remove('open');mobileMenu.setAttribute('aria-expanded','false');mobileMenu.textContent='MENU'}));
}
(()=>{const data=[{title:['RIDE','BEYOND'],img:window.VELO_ASSETS.photo_248547},{title:['CHASE','SPEED'],img:window.VELO_ASSETS.hero_25},{title:['OWN THE','ROAD'],img:window.VELO_ASSETS.photo_100582},{title:['RACE','TOGETHER'],img:window.VELO_ASSETS.photo_276517}];const slides=document.querySelector('#slides'),thumbs=document.querySelector('#thumbs'),heading=document.querySelector('#headline');data.forEach((d,i)=>{const s=document.createElement('div');s.className='slide'+(i===0?' active':'');s.style.backgroundImage=`url("${d.img}")`;slides.appendChild(s);const b=document.createElement('button');b.className='thumb'+(i===0?' active':'');b.style.backgroundImage=`url("${d.img}")`;b.setAttribute('aria-label','Show cycling scene '+(i+1));b.onclick=()=>{activate(i);restartAuto()};thumbs.appendChild(b)});let current=0;function activate(i){if(i===current)return;current=i;document.querySelectorAll('.slide').forEach((e,j)=>e.classList.toggle('active',j===i));document.querySelectorAll('.thumb').forEach((e,j)=>{e.classList.toggle('active',j===i);e.setAttribute('aria-pressed',j===i?'true':'false')});heading.innerHTML=data[i].title.map(t=>'<span>'+t+'</span>').join('');document.querySelector('#count').textContent=String(i+1).padStart(2,'0')+' / 04'}let autoTimer;function restartAuto(){clearInterval(autoTimer);autoTimer=setInterval(()=>activate((current+1)%data.length),2500)}restartAuto();document.addEventListener('visibilitychange',()=>{if(document.hidden)clearInterval(autoTimer);else restartAuto()});document.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){activate((current+1)%4);restartAuto()}if(e.key==='ArrowLeft'){activate((current+3)%4);restartAuto()}});})();

(()=>{
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');if(e.target.classList.contains('project')) e.target.nextElementSibling?.classList.add('in-view');}}),{threshold:.18});
document.querySelectorAll('.reveal,.logo-row,.project,.projects-head,.what-left').forEach(el=>io.observe(el));

const services=[...document.querySelectorAll('.service')];
function activate(item){services.forEach(s=>s.classList.toggle('active',s===item))}
services.forEach(s=>s.querySelector('.service-head').addEventListener('click',()=>activate(s)));
const serviceObserver=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);if(visible.length && window.innerWidth>700)activate(visible[0].target)},{rootMargin:'-28% 0px -38% 0px',threshold:[.15,.35,.6]});
services.forEach(s=>serviceObserver.observe(s));
})();

(()=>{const track=document.getElementById('race-track'),raceImgs=[...document.querySelectorAll('.race-bg img')],tabs=[...document.querySelectorAll('.race-tabs button')],bar=document.querySelector('.race-progress span'),data=[['01 / 04 — COMPETITIVE','ROAD<br>RACE.','Take your place on the start line. Find your rhythm, read the road, and race for the feeling of giving it everything.'],['02 / 04 — SPEED','SPRINT<br>CHALLENGE.','A short, sharp test of timing and acceleration. Hold your nerve, find the opening, and make your move.'],['03 / 04 — DISTANCE','ENDURANCE<br>RIDE.','Settle into the miles. Discover the rhythm of a longer ride and the quiet satisfaction of going further together.'],['04 / 04 — TOGETHER','COMMUNITY<br>RIDE.','Bring your crew, meet new riders, and enjoy the road as a shared experience. Every pace has a place here.']];let ri=0;function setRace(i){ri=i;raceImgs.forEach((x,n)=>x.classList.toggle('active',n===i));tabs.forEach((x,n)=>x.classList.toggle('active',n===i));document.getElementById('race-num').textContent=data[i][0];document.getElementById('race-title').innerHTML=data[i][1];document.getElementById('race-desc').textContent=data[i][2];bar.style.width=((i+1)*25)+'%'}tabs.forEach(b=>b.onclick=()=>{let i=+b.dataset.i;setRace(i);window.scrollTo({top:track.offsetTop+i*innerHeight,behavior:'smooth'})});let raf=false;addEventListener('scroll',()=>{if(!raf){requestAnimationFrame(()=>{let r=track.getBoundingClientRect(),travel=track.offsetHeight-innerHeight,p=Math.max(0,Math.min(-r.top,travel)),i=Math.min(3,Math.floor(p/Math.max(travel,1)*4));if(i!==ri)setRace(i);raf=false});raf=true}},{passive:true});
})();


(()=> {
 const reveal = new IntersectionObserver(entries=>entries.forEach(entry=>{
   if(entry.isIntersecting){entry.target.classList.add('in-view');reveal.unobserve(entry.target);}
 }),{threshold:.08,rootMargin:'0px 0px -4% 0px'});
 document.querySelectorAll('.highlights-label,.highlights-heading,.highlight-card').forEach(el=>reveal.observe(el));
})();



(()=>{
 const track=document.getElementById('motion-track');
 if(!track)return;
 const imgs=[...track.querySelectorAll('.motion-backdrop img')];
 const steps=[...track.querySelectorAll('.motion-step')];
 const data=[
  ['01','ARRIVE<br><em>TOGETHER.</em>','Start with a warm welcome, meet the riders and get ready for a day shaped by the cycling community.','WELCOME / CONNECTION','WELCOME & CONNECT'],
  ['02','IDEAS<br><em>IN MOTION.</em>','Hear fresh perspectives, exchange knowledge and explore the ideas moving cycling culture forward.','TALKS / CONVERSATION','TALKS & DISCUSSIONS'],
  ['03','TAKE IT<br><em>TO THE ROAD.</em>','Step out of the room and into the ride. Share the road, find your pace and experience the energy together.','GROUP RIDE / RACE','RIDE & RACE EXPERIENCE'],
  ['04','STAY FOR<br><em>THE STORIES.</em>','Close the day with new connections, shared stories and a community that keeps moving beyond the event.','NETWORK / CELEBRATE','CONNECT & CELEBRATE']
 ];
 let active=0, raf=false;
 const title=document.getElementById('motion-title'),desc=document.getElementById('motion-desc');
 function setStep(i){
  i=Math.max(0,Math.min(3,i));active=i;
  imgs.forEach((im,n)=>im.classList.toggle('active',n===i));
  steps.forEach((b,n)=>b.classList.toggle('active',n===i));
  document.getElementById('motion-count').innerHTML=data[i][0]+' <i>/ 04</i>';
  title.classList.remove('visible');desc.classList.remove('visible');
  setTimeout(()=>{title.innerHTML=data[i][1];desc.textContent=data[i][2];title.classList.add('visible');desc.classList.add('visible')},100);
  document.getElementById('motion-type').textContent=data[i][3];
  document.getElementById('motion-caption').textContent=data[i][4];
  document.getElementById('motion-progress').style.width=((i+1)*25)+'%';
 }
 steps.forEach(b=>b.addEventListener('click',()=>{
  const i=+b.dataset.step;setStep(i);
  window.scrollTo({top:track.offsetTop+i*(track.offsetHeight/4)+10,behavior:'smooth'});
 }));
 function update(){
  const r=track.getBoundingClientRect(),travel=track.offsetHeight-innerHeight;
  const p=Math.max(0,Math.min(-r.top,travel));
  const i=Math.min(3,Math.floor(p/Math.max(travel,1)*4));
  if(i!==active)setStep(i);raf=false;
 }
 window.addEventListener('scroll',()=>{if(!raf){requestAnimationFrame(update);raf=true}},{passive:true});
 setStep(0);
})();



(()=>{
 const rail=document.getElementById('speaker-carousel');
 if(!rail)return;
 const prev=document.getElementById('speaker-prev'),next=document.getElementById('speaker-next');
 const step=()=>Math.min(rail.clientWidth*.72,rail.querySelector('.speaker-card').getBoundingClientRect().width+14);
 prev.addEventListener('click',()=>rail.scrollBy({left:-step(),behavior:'smooth'}));
 next.addEventListener('click',()=>rail.scrollBy({left:step(),behavior:'smooth'}));
 let down=false,start=0,left=0;
 rail.addEventListener('pointerdown',e=>{down=true;start=e.clientX;left=rail.scrollLeft;rail.classList.add('dragging');rail.setPointerCapture(e.pointerId)});
 rail.addEventListener('pointermove',e=>{if(down)rail.scrollLeft=left-(e.clientX-start)});
 const stop=()=>{down=false;rail.classList.remove('dragging')};
 rail.addEventListener('pointerup',stop);rail.addEventListener('pointercancel',stop);rail.addEventListener('pointerleave',stop);
})();



(()=>{
 const form=document.getElementById('entry-form');if(!form)return;
 let step=0,experience='Enthusiast',category='Road Race';
 const steps=[...form.querySelectorAll('.entry-step')],back=document.getElementById('entry-back'),next=document.getElementById('entry-next');
 const names=['RIDER DETAILS','YOUR EXPERIENCE','CHOOSE YOUR RIDE','FINAL CHECK'];
 const error=document.getElementById('entry-error');
 const pass=document.getElementById('race-pass');
 function updatePass(){
  const name=document.getElementById('rider-name').value.trim();
  document.getElementById('pass-name').textContent=name?name.toUpperCase():'YOUR NAME';
  document.getElementById('pass-category').textContent=category.toUpperCase();
  document.getElementById('pass-experience').textContent=experience.toUpperCase();
  pass.classList.add('updated');setTimeout(()=>pass.classList.remove('updated'),450);
 }
 function render(){
  steps.forEach((el,i)=>el.classList.toggle('active',i===step));
  document.getElementById('entry-step-label').textContent='STEP 0'+(step+1)+' / 04';
  document.getElementById('entry-step-name').textContent=names[step];
  document.getElementById('entry-progress-bar').style.width=((step+1)*25)+'%';
  back.disabled=step===0;next.innerHTML=step===3?'SUBMIT INTEREST <span>↗</span>':'CONTINUE <span>↗</span>';
  error.textContent='';
  if(step===3){
   const val=id=>document.getElementById(id).value.trim();
   document.getElementById('entry-review').innerHTML=[
    ['RIDER',val('rider-name')],['EMAIL',val('rider-email')],['PHONE',val('rider-phone')],['EXPERIENCE',experience],['RIDE',category]
   ].map(([a,b])=>`<div><span>${a}</span><b>${b||'—'}</b></div>`).join('');
  }
  updatePass();
 }
 function validate(){
  if(step===0){
   const name=document.getElementById('rider-name'),email=document.getElementById('rider-email'),phone=document.getElementById('rider-phone');
   if(!name.value.trim()){name.focus();error.textContent='Please enter your name.';return false}
   if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){email.focus();error.textContent='Please enter a valid email address.';return false}
   if(!phone.value.trim()){phone.focus();error.textContent='Please enter your phone number.';return false}
  }
  if(step===3&&!document.getElementById('entry-consent').checked){error.textContent='Please confirm the contact permission to continue.';return false}
  return true;
 }
 next.addEventListener('click',()=>{
  if(!validate())return;
  if(step<3){step++;render()}else{
   form.style.display='none';document.querySelector('.entry-progress-head').style.display='none';document.querySelector('.entry-progress').style.display='none';document.getElementById('entry-success').classList.add('show');
  }
 });
 back.addEventListener('click',()=>{if(step>0){step--;render()}});
 document.querySelectorAll('#experience-options .entry-option').forEach(btn=>btn.addEventListener('click',()=>{experience=btn.dataset.value;document.querySelectorAll('#experience-options .entry-option').forEach(b=>b.classList.toggle('selected',b===btn));updatePass()}));
 document.querySelectorAll('#category-options .entry-option').forEach(btn=>btn.addEventListener('click',()=>{category=btn.dataset.value;document.querySelectorAll('#category-options .entry-option').forEach(b=>b.classList.toggle('selected',b===btn));updatePass()}));
 document.getElementById('rider-name').addEventListener('input',updatePass);
 document.getElementById('entry-again').addEventListener('click',()=>{
  step=0;experience='Enthusiast';category='Road Race';form.reset();form.style.display='';document.querySelector('.entry-progress-head').style.display='';document.querySelector('.entry-progress').style.display='';document.getElementById('entry-success').classList.remove('show');
  document.querySelectorAll('.entry-option').forEach((b)=>b.classList.toggle('selected',b.dataset.value==='Enthusiast'||b.dataset.value==='Road Race'));render();
 });
 render();
})();



(()=>{
 const items=[...document.querySelectorAll('.faq-item')];
 items.forEach(item=>{
  const button=item.querySelector('.faq-question');
  button.addEventListener('click',()=>{
   const wasOpen=item.classList.contains('open');
   items.forEach(other=>{other.classList.remove('open');other.querySelector('.faq-question').setAttribute('aria-expanded','false');other.querySelector('.faq-question i').textContent='+'});
   if(!wasOpen){item.classList.add('open');button.setAttribute('aria-expanded','true');button.querySelector('i').textContent='−'}
  });
 });
})();



(()=>{const el=document.querySelector('.final-cta');if(!el)return;const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){el.classList.add('in-view');io.unobserve(el)}}),{threshold:.12});io.observe(el)})();



(()=>{
 const about=document.querySelector('#about');
 const projects=document.querySelector('.projects');
 if(!about||!projects)return;
 const heading=about.querySelector('.intro-right h1');
 if(heading&&!heading.dataset.s2Prepared){
  const words=heading.textContent.trim().split(/\s+/);
  heading.innerHTML=words.map((word,i)=>`<span class="s2-word" style="transition-delay:${Math.min(i,18)*28}ms">${word}</span>`).join(' ');
  heading.dataset.s2Prepared='true';
 }
 const targets=[
  about.querySelector('.intro .tag'),
  heading,
  ...about.querySelectorAll('.logo-row .client'),
  projects.querySelector('.projects-head'),
  ...projects.querySelectorAll('.project'),
  ...projects.querySelectorAll('.project-caption')
 ].filter(Boolean);
 const reveal=(el)=>el.classList.add('s2-visible');
 if(!('IntersectionObserver' in window)){targets.forEach(reveal);return}
 const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
   if(entry.isIntersecting){reveal(entry.target);observer.unobserve(entry.target)}
  });
 },{threshold:.08,rootMargin:'0px 0px -5% 0px'});
 targets.forEach(el=>observer.observe(el));
})();

})();
