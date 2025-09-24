// mobile nav toggle + footer year
document.addEventListener('DOMContentLoaded', function(){
  const nav = document.getElementById('nav');
  const btn = document.getElementById('nav-toggle');
  const year = document.getElementById('year');

  // year
  if(year) year.textContent = new Date().getFullYear();

  // toggle for small screens
  btn.addEventListener('click', function(){
    nav.classList.toggle('open');
  });

  // close nav on link click (mobile)
  Array.from(nav.querySelectorAll('a')).forEach(a=>{
    a.addEventListener('click', ()=> nav.classList.remove('open'));
  });
});
