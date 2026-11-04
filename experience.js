(()=>{
const chapters=[['basics','01','理解原理'],['visual','02','互動圖解'],['papers','03','文獻導讀'],['lab','04','損益試算'],['plan','05','研究路線'],['quiz','06','自我檢查']];
const rail=document.createElement('aside');rail.className='chapter-rail';rail.setAttribute('aria-label','學習章節');
chapters.forEach(([id,num,title])=>{const a=document.createElement('a');a.href='#'+id;a.textContent=num;a.title=title;a.setAttribute('aria-label',num+' '+title);rail.append(a)});document.body.append(rail);
const links=[...document.querySelectorAll('header nav a,.chapter-rail a')];const sections=[...document.querySelectorAll('main section[id]')];const progress=document.querySelector('.reading-progress');let queued=false;
function refresh(){const height=document.documentElement.scrollHeight-innerHeight;progress.style.transform='scaleX('+(height>0?Math.min(1,scrollY/height):0)+')';let active='';sections.forEach(s=>{if(s.getBoundingClientRect().top<=180)active=s.id});if(active.startsWith('paper'))active='papers';links.forEach(a=>{if(a.hash==='#'+active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});queued=false}
addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(refresh)}},{passive:true});addEventListener('resize',refresh);refresh();
const motion=document.querySelector('#motion-toggle');motion.addEventListener('click',()=>{const on=document.body.classList.toggle('motion-paused');motion.setAttribute('aria-pressed',String(on));motion.textContent=on?'播放封面動畫':'暫停封面動畫'});
const focus=document.querySelector('#focus-toggle');focus.addEventListener('click',()=>{const on=document.body.classList.toggle('focus-reading');focus.setAttribute('aria-pressed',String(on));focus.textContent=on?'顯示互動圖解':'純文字閱讀';refresh()});
})();
