<<<<<<< HEAD
// features.js
// 1. Typewriter effect for main title
function typewriter(element, text, speed = 60, callback) {
  let i = 0;
  element.textContent = '';
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      callback();
    }
  }
  typing();
}

document.addEventListener('DOMContentLoaded', () => {
  // Typewriter effect for .title
  const title = document.querySelector('.home-texts .title');
  if (title) {
    typewriter(title, title.textContent.trim());
  }

  // 2. Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.length > 1 && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 3. Animate elements on scroll (fade-in)
  const fadeEls = document.querySelectorAll('.fade-in-on-scroll');
  function handleFadeIn() {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', handleFadeIn);
  handleFadeIn();

  function setTheme(mode) {
    if (mode === 'light') {
      document.body.classList.add('light-mode');
      modeBtn.innerHTML = '🌞';
    } else {
      document.body.classList.remove('light-mode');
      modeBtn.innerHTML = '🌙';
    }
    localStorage.setItem('theme', mode);
  }
  modeBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    setTheme(isLight ? 'light' : 'dark');
  });
  // Load theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') setTheme('light');

  // 5. Back-to-top button
  const topBtn = document.createElement('button');
  topBtn.id = 'back-to-top';
  topBtn.innerHTML = '↑';
  topBtn.style.position = 'fixed';
  topBtn.style.bottom = '80px';
  topBtn.style.right = '28px';
  topBtn.style.zIndex = '3002';
  topBtn.style.background = '#00ff6a';
  topBtn.style.color = '#080e11';
  topBtn.style.border = 'none';
  topBtn.style.borderRadius = '50%';
  topBtn.style.width = '44px';
  topBtn.style.height = '44px';
  topBtn.style.fontSize = '1.3rem';
  topBtn.style.cursor = 'pointer';
  topBtn.style.display = 'none';
  document.body.appendChild(topBtn);
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      topBtn.style.display = 'block';
    } else {
      topBtn.style.display = 'none';
    }
  });
  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
=======
// features.js
// 1. Typewriter effect for main title
function typewriter(element, text, speed = 60, callback) {
  let i = 0;
  element.textContent = '';
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) {
      callback();
    }
  }
  typing();
}

document.addEventListener('DOMContentLoaded', () => {
  // Typewriter effect for .title
  const title = document.querySelector('.home-texts .title');
  if (title) {
    typewriter(title, title.textContent.trim());
  }

  // 2. Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.length > 1 && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 3. Animate elements on scroll (fade-in)
  const fadeEls = document.querySelectorAll('.fade-in-on-scroll');
  function handleFadeIn() {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', handleFadeIn);
  handleFadeIn();

  // 4. Dark/light mode toggle
  const modeBtn = document.createElement('button');
  modeBtn.id = 'mode-toggle';
  modeBtn.innerHTML = '🌙';
  modeBtn.style.position = 'fixed';
  modeBtn.style.bottom = '24px';
  modeBtn.style.right = '24px';
  modeBtn.style.zIndex = '3002';
  modeBtn.style.background = '#111';
  modeBtn.style.color = '#00ff6a';
  modeBtn.style.border = 'none';
  modeBtn.style.borderRadius = '50%';
  modeBtn.style.width = '48px';
  modeBtn.style.height = '48px';
  modeBtn.style.fontSize = '1.5rem';
  modeBtn.style.cursor = 'pointer';
  document.body.appendChild(modeBtn);

  function setTheme(mode) {
    if (mode === 'light') {
      document.body.classList.add('light-mode');
      modeBtn.innerHTML = '🌞';
    } else {
      document.body.classList.remove('light-mode');
      modeBtn.innerHTML = '🌙';
    }
    localStorage.setItem('theme', mode);
  }
  modeBtn.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    setTheme(isLight ? 'light' : 'dark');
  });
  // Load theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') setTheme('light');

  // 5. Back-to-top button
  const topBtn = document.createElement('button');
  topBtn.id = 'back-to-top';
  topBtn.innerHTML = '↑';
  topBtn.style.position = 'fixed';
  topBtn.style.bottom = '80px';
  topBtn.style.right = '28px';
  topBtn.style.zIndex = '3002';
  topBtn.style.background = '#00ff6a';
  topBtn.style.color = '#080e11';
  topBtn.style.border = 'none';
  topBtn.style.borderRadius = '50%';
  topBtn.style.width = '44px';
  topBtn.style.height = '44px';
  topBtn.style.fontSize = '1.3rem';
  topBtn.style.cursor = 'pointer';
  topBtn.style.display = 'none';
  document.body.appendChild(topBtn);
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      topBtn.style.display = 'block';
    } else {
      topBtn.style.display = 'none';
    }
  });
  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
>>>>>>> origin/My-VP-Main-branch
}); 