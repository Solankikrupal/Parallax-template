var nav = document.querySelector('.header-wrapper');

window.addEventListener('scroll',()=>{
  nav.classList.toggle('sticky',window.scrollY > 0);
})
