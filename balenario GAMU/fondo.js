// Función para crear el fondo animado
function iniciarAnimacionesFondo() {
  const background = document.querySelector('.animated-background');
  
  function crearBurbuja() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    
    const size = Math.random() * 40 + 10;
    const left = Math.random() * 100;
    const duration = Math.random() * 10 + 15;
    const delay = Math.random() * 5;
    
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.left = left + '%';
    bubble.style.animationDuration = duration + 's';
    bubble.style.animationDelay = delay + 's';
    
    background.appendChild(bubble);
    
    setTimeout(() => {
      if (bubble.parentNode) bubble.parentNode.removeChild(bubble);
    }, (duration + delay) * 1000);
  }

  function crearVapor() {
    const steam = document.createElement('div');
    steam.className = 'steam-particle';
    
    const size = Math.random() * 15 + 5;
    const left = Math.random() * 100;
    const duration = Math.random() * 8 + 12;
    const delay = Math.random() * 3;
    
    steam.style.width = size + 'px';
    steam.style.height = size + 'px';
    steam.style.left = left + '%';
    steam.style.animationDuration = duration + 's';
    steam.style.animationDelay = delay + 's';
    
    background.appendChild(steam);
    
    setTimeout(() => {
      if (steam.parentNode) steam.parentNode.removeChild(steam);
    }, (duration + delay) * 1000);
  }

  function crearOrbe() {
    const orb = document.createElement('div');
    orb.className = 'light-orb';
    
    const size = Math.random() * 60 + 20;
    const left = Math.random() * 100;
    const top = Math.random() * 80 + 10;
    const duration = Math.random() * 4 + 6;
    
    orb.style.width = size + 'px';
    orb.style.height = size + 'px';
    orb.style.left = left + '%';
    orb.style.top = top + '%';
    orb.style.animationDuration = duration + 's';
    
    background.appendChild(orb);
    
    setTimeout(() => {
      if (orb.parentNode) orb.parentNode.removeChild(orb);
    }, duration * 1000);
  }

  function crearCristal() {
    const crystal = document.createElement('div');
    crystal.className = 'mineral-crystal';
    
    const size = Math.random() * 25 + 10;
    const left = Math.random() * 100;
    const duration = Math.random() * 15 + 20;
    const delay = Math.random() * 8;
    
    crystal.style.width = size + 'px';
    crystal.style.height = size + 'px';
    crystal.style.left = left + '%';
    crystal.style.animationDuration = duration + 's';
    crystal.style.animationDelay = delay + 's';
    
    background.appendChild(crystal);
    
    setTimeout(() => {
      if (crystal.parentNode) crystal.parentNode.removeChild(crystal);
    }, (duration + delay) * 1000);
  }

  // Intervalos para crear elementos continuamente
  setInterval(crearBurbuja, 200);
  setInterval(crearVapor, 100);
  setInterval(crearOrbe, 800);
  setInterval(crearCristal, 1200);

  // Elementos iniciales
  for (let i = 0; i < 5; i++) {
    setTimeout(crearBurbuja, i * 1000);
    setTimeout(crearVapor, i * 1500);
  }
  
  for (let i = 0; i < 3; i++) {
    setTimeout(crearOrbe, i * 3000);
    setTimeout(crearCristal, i * 5000);
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', iniciarAnimacionesFondo);
