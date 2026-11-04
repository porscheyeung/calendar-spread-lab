(()=>{
const chapters=[['basics','01','理解原理'],['visual','02','互動圖解'],['papers','03','文獻導讀'],['lab','04','損益試算'],['plan','05','研究路線'],['quiz','06','自我檢查']];
const rail=document.createElement('aside');rail.className='chapter-rail';rail.setAttribute('aria-label','學習章節');
chapters.forEach(([id,num,title])=>{const a=document.createElement('a');a.href='#'+id;a.textContent=num;a.title=title;a.setAttribute('aria-label',num+' '+title);rail.append(a)});document.body.append(rail);
const links=[...document.querySelectorAll('header nav a,.chapter-rail a')];const sections=[...document.querySelectorAll('main section[id]')];const progress=document.querySelector('.reading-progress');let queued=false;
function refresh(){const height=document.documentElement.scrollHeight-innerHeight;progress.style.transform='scaleX('+(height>0?Math.min(1,scrollY/height):0)+')';let active='';sections.forEach(s=>{if(s.getBoundingClientRect().top<=180)active=s.id});if(active.startsWith('paper'))active='papers';links.forEach(a=>{if(a.hash==='#'+active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});queued=false}
addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(refresh)}},{passive:true});addEventListener('resize',refresh);refresh();
const motion=document.querySelector('#motion-toggle');motion.addEventListener('click',()=>{const on=document.body.classList.toggle('motion-paused');motion.setAttribute('aria-pressed',String(on));motion.textContent=on?'播放封面動畫':'暫停封面動畫'});
const focus=document.querySelector('#focus-toggle');focus.addEventListener('click',()=>{const on=document.body.classList.toggle('focus-reading');focus.setAttribute('aria-pressed',String(on));focus.textContent=on?'顯示互動圖解':'純文字閱讀';refresh()});

const reduceM=matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.story .card').forEach((c,i)=>c.style.setProperty('--i',i));
if(!reduceM){
const hero=document.querySelector('.hero');
if(hero&&matchMedia('(pointer:fine)').matches){hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;hero.style.setProperty('--px',(x*30).toFixed(1)+'px');hero.style.setProperty('--py',(y*20).toFixed(1)+'px')},{passive:true});}
document.querySelectorAll('.viz').forEach(v=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const s=v.querySelector('.chart-scroll svg');if(s&&s.animate)s.animate([{opacity:0,transform:'translateY(14px)'},{opacity:1,transform:'none'}],{duration:700,easing:'cubic-bezier(.2,.8,.2,1)'});io.disconnect()}}),{threshold:.25});io.observe(v)});
const cta=document.querySelector('.hero-cta');if(cta)cta.classList.add('pulse');
}
})();
