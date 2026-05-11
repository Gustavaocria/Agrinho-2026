// Modo Claro/Escuro
const toggleButton = document.getElementById('toggleTheme');
const body = document.body;
toggleButton.addEventListener('click', ()=>{
    body.classList.toggle('dark-mode');
    toggleButton.textContent = body.classList.contains('dark-mode')?'☀️ Modo Claro':'🌙 Modo Escuro';
});

// Carousel automático + botões
const slides = document.querySelectorAll('.carousel .slides img');
let index=0;
function showSlide(i){ slides.forEach(slide=>slide.classList.remove('active')); slides[i].classList.add('active'); }
showSlide(index);
const nextBtn=document.querySelector('.carousel .next');
const prevBtn=document.querySelector('.carousel .prev');
nextBtn.addEventListener('click', ()=>{ index=(index+1)%slides.length; showSlide(index); });
prevBtn.addEventListener('click', ()=>{ index=(index-1+slides.length)%slides.length; showSlide(index); });
setInterval(()=>{ index=(index+1)%slides.length; showSlide(index); },5000);

// Mostrar/Ocultar Links
const toggleLinksBtn=document.getElementById('toggleLinks');
const linksList=document.querySelector('#links ul');
toggleLinksBtn.addEventListener('click', ()=>{
    if(linksList.style.display==='none'||linksList.style.display===''){ linksList.style.display='block'; toggleLinksBtn.textContent='Ocultar Links Úteis'; }
    else{ linksList.style.display='none'; toggleLinksBtn.textContent='Mostrar Links Úteis'; }
});

// Contador de visitas na sessão
let contador=sessionStorage.getItem('contador')||0;
contador++; sessionStorage.setItem('contador',contador);
document.getElementById('contador').textContent=contador;
